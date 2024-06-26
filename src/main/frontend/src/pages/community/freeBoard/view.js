import React, {useCallback, useEffect, useRef, useState} from 'react';
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';
import '../../../css/boardDetail.css';

export default function View() {
    const [board, setBoard] = useState([]);
    const [commentList, setCommentList] = useState([]);
    let freeBoardNo = useLocation().state; // 이전 page 에서 전달받은 freeBoardNo
    const navigate = useNavigate();
    const [memberLog, setMemberLog] = useState("");
    const [commentContent, setCommentContent] = useState("");   // 댓글 내용
    const typeRef = useRef("");    // 댓글 작성 시 게시판 TYPE 입력을 위한 useRef
    const contentRef = useRef(""); // 댓글 focus 를 위한 Ref

    // 댓글 handler
    const contentOnChangeHandler = useCallback((e) => {
        setCommentContent(e.target.value)
    }, [])

    // 게시글 상세 정보 가져오기
    const getBoard = async () => {
        // TODO
        // '이전' 버튼 클릭 시 강제로 1 page 부터 시작되는데 사용자가 머물던 currentPage 로 이동시키기
        const res = await axios.get('/freeBoard/view', {
            params : {
                freeBoardNo : freeBoardNo
            }
        })
        if (res.data) {
            setBoard(res.data);
        }
    };

    // 댓글 목록 가져오기
    const getCommentList = async () => {
        const res = await axios.get('/comment/list', {
            params : {
                boardNo : freeBoardNo,
            }
        })
        if (res.status === 200) {
            setCommentList(res.data);
        }
    };

    // 댓글 작성
    const goRegisterComment = async () => {
        if(contentRef.current.value){
            const data = {
                boardNo:freeBoardNo,
                memberId:memberLog.memberId,
                content : commentContent,
                type : typeRef.current.value,
            }
            const res = await axios.post("/comment/register",data)
            if(res.status === 200) {
                getCommentList(); // 댓글 작성 완료 시 commentList 재 렌더링
            }
        }else {
            alert("댓글을 입력하세요")
            contentRef.current.focus();
        }
    }

    // TODO
    // 게시글, 댓글 작성자로 표기할 정보를 MEMBER_ID 가 아니라 MEMBER_NICKNAME 으로 수정하기
    // axios.get 방식을 이용해 MEMBER_ID 기준으로 MEMBER 테이블 조회 실행

    useEffect(() => {
        getBoard();
        getCommentList();
        const getMemberLog = sessionStorage.getItem("member");
        if(getMemberLog){
            const parse = JSON.parse(getMemberLog);
            setMemberLog(parse);
        }
    }, []);

    // 게시글 삭제
    const deletePost = async () => {
        if(window.confirm("게시글을 삭제하시겠습니까?")){
            const res = await axios.put('/freeBoard/delete',null, {
                params:{
                    freeBoardNo:freeBoardNo
                }
            })
                .then((navigate('/community/freeBoard/list')))
                .catch((error)=> console.log("게시글 삭제 실패"))
        }
    }

    // 게시글 수정(update.js 로 이동)
    const updatePost = () => {
        navigate('/community/freeBoard/update',{state:{
            freeBoardNo:freeBoardNo,
        }})
    }

    return (
        <>
            {board ? (
                <div className="container" style={{marginTop: "10rem", marginLeft: "6rem"}}>
                    <div className="header">
                        <div className="text-black text-2xl my-3">{board.freeTitle}</div>
                        <div>작성자 : {board.memberId}</div>
                        <div>작성일 : {new Date(board.createDate).toLocaleString('ko-kr', {
                            year:"numeric",month:"long", day:"numeric", hour:"numeric", minute:"numeric", second:"numeric"
                        })}
                            <span className="float-right mr-4">조회수: {board.hits}</span>
                        </div>
                    </div>
                    <div className="comment" dangerouslySetInnerHTML={{__html: board.freeContent}}/>
                    <div className="actions me-4">
                        {
                            memberLog && memberLog.memberAdmin === 'ADMIN'
                                ?
                                <>
                                    <button className="bg-red-500 text-white font-bold" onClick={deletePost}>삭제</button>
                                </>
                                :
                                <>
                                    {
                                        memberLog.memberId === board.memberId
                                            ?
                                            <>
                                                <button className="bg-blue-500 text-white font-bold"
                                                        onClick={updatePost}>수정
                                                </button>
                                                <button className="bg-red-500 text-white font-bold"
                                                        onClick={deletePost}>삭제
                                                </button>
                                            </>
                                            :
                                            null
                        }
                                </>
                        }
                        <button onClick={() => navigate("/community/freeBoard/list")}
                                className="bg-gray-500 text-white font-bold">목록
                        </button>
                        <button onClick={() => navigate(-1)}
                                className="bg-black text-white font-bold">이전
                        </button>
                    </div>
                    <div className="mx-5 my-5 p-5">
                        {commentList && commentList.map((v,i) => {
                            return (
                                <div className="text-black font-extrabold" key={i}>
                                    <span>
                                        {
                                            memberLog && memberLog.memberProfile
                                                ?
                                                <img src={memberLog.memberProfile}
                                                     className="w-7 inline"
                                                     alt="사용자 등록 프로필"/>
                                                :
                                                <img src="/images/profile/basic_profile.png"
                                                     className="w-7 inline"
                                                     alt="기본 프로필"/>
                                        }&nbsp;
                                        <span>작성자 : {v.memberId}</span>
                                    </span>
                                    <div>내용 : {v.content}</div>
                                    <div>작성일 : {new Date(v.createDate).toLocaleString('ko-kr', {
                                        year:"numeric",month:"long", day:"numeric", hour:"numeric", minute:"numeric", second:"numeric"
                                    })}
                                    </div>
                                    <hr className="hr1 mb-8 mt-2"/>
                                </div>
                            )
                        })}
                    </div>
                    <div className="mx-5 my-5 border rounded-md p-5">
                        <div className="text-black font-extrabold">
                            <span>{board && board.memberId}</span>
                        </div>
                        {
                            memberLog && memberLog.memberId
                                ?
                                <input
                                    type="text"
                                    className="mb-5 w-full h-12 text-black"
                                    placeholder="댓글을 남겨보세요"
                                    onChange={contentOnChangeHandler}
                                    ref={contentRef}
                                />
                                :
                                <input placeholder={"로그인 후 이용 가능합니다"} disabled/>
                        }
                        <div className="text-end">
                            <button
                                onClick={goRegisterComment}
                                className="font-extrabold text-gray-400 me-3">등록</button>
                        </div>
                        <input ref={typeRef} type="hidden" value="FREE_BOARD" disabled/>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};
