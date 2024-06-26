import React, {useCallback, useEffect, useRef, useState} from 'react';
import axios from 'axios';
import '../../../css/boardList.css'
import {Link, useNavigate} from "react-router-dom";

export default function List () {
    const [relayBoardNo, setRelayBoardNo] = useState(0); // 임시로 저장할 게시글 번호
    const [boardList, setBoardList] = useState([]);
    const [totalBoardList, setTotalBoardList] = useState([]);

    const [memberId, setMemberId] = useState(null);
    const [addBtn, setAddBtn] = useState(false);                    // 새 글 작성 버튼
    const [commentBtn, setCommentBtn] = useState(false);            // 댓글 작성 버튼
    const typeRef = useRef();                                 // DB 에 저장할 게시글 종류 Ref

    const [title, setTitle] = useState("");         // 첫 글 내용(RELAY_BOARD)
    const [content, setContent] = useState("");     // 댓글 내용(COMMENT)
    const navigate = useNavigate();

    // handler
    const titleOnChangeHandler = useCallback((e) => {
        setTitle(e.target.value);
    }, [])

    const contentOnChangeHandler = useCallback((e) => {
        setContent(e.target.value);
    }, [])

    // TODO
    // 멤버십 구독 회원 표시 | 안승환 | 06.28(금)
    // 멤버십 구독한 회원은 게시글 또는 댓글 작성 시 닉네임 옆에 왕관 이미지 표시하기

    // DB 로 게시글 리스트 조회
    const getData = async () => {
        const res = await axios.get(`/relayBoard/list`)
        if (res.data) {
            setBoardList(res.data.boardList);
        }
    }

    // AMDIN 일때 게시글 삭제
    const goDelete = async (number)=> {
        if(window.confirm("게시글 번호 : " + number + " 을 삭제합니까?")){
            const res = await axios.put(`/relayBoard/delete`, null, {
                params:{
                    relayBoardNo: number,
                }
            })
            getData(); // 삭제 후 게시글 재렌더링
        }
    }

    // 새 글 작성 시 로그인 체크
    const goAdd = () => {
        if (!memberId) {
            alert("로그인이 필요한 서비스입니다.");
            navigate("/signIn")
        }
        setTitle("");
        setAddBtn(!addBtn);
    }

    // 글 작성
    const goRegister = async ()=> {
        const res = await axios.post("/relayBoard/register", null,{
            params : {
                relayTitle : title,
                memberId : memberId.memberId,
            }
        })
        setRelayBoardNo(res.data);
        setAddBtn(false);
        getData();
    }

    // 글 작성 취소
    const goCancle = () => {
        setAddBtn(false);
    }

    // 댓글 작성 버튼 활성화
    const goChangeComment = () => {
        if (!memberId) {
            alert("로그인이 필요한 서비스입니다.");
            navigate("/signIn");
            return;
        }
        setContent("");
        setCommentBtn(!commentBtn);
    }

    // GPT 로 댓글 작성
    const goGPT = (e) => {
        console.log("GPT 도와줘",e);
        console.log("릴레이 제목 : ",e.relayTitle);
        console.log("댓글 리스트 : ",e.commentList);
    }

    // 댓글 작성
    const goCommentRegister = async () => {
        const data = {
            boardNo: relayBoardNo,
            content : content,
            memberId : memberId.memberId,
            type : typeRef.current.value,
        }
        const res = await axios.post("/comment/register", data)
        if(res.status){
            setCommentBtn(false);
            getData();
        }
    }

    // 댓글 작성 취소
    const goCommentCancle = async () => {
        setCommentBtn(false);
    }

    // 댓글 삭제
    const goDeleteComment = async (e) => {
        const res = await axios.post(`/comment/delete?commentNo=${e}`)
        console.log("삭제 결과 : ",res);
        getData();
    }

    useEffect(() => {
        console.log("가져온 게시글 : ", boardList)
    }, [boardList]);

    // 로그인된 회원 정보 페이지에 저장
    useEffect(() => {
        getData()
        const memberLog = sessionStorage.getItem("member")
        if(memberLog){
            setMemberId(JSON.parse(memberLog)); // 필요한 경우 memberId, memberNickname, memberAdmin 등에서 data 꺼내쓰기
        }
    }, []);

    return (
        <article className="mt-32 ml-32 mr-32">
            <br/>
            <div className="text-center text-4xl mb-10">릴레이 소설</div>
            <hr className="hr1" noshade/>
            <span>총 {boardList.length} 개의 게시물이 있습니다.</span>
            <button onClick={goAdd} className="bg-blue-600 text-white font-bold p-1 rounded">새 글 작성</button>
            <div className="my-5">
                {addBtn
                ?
                    <div className="border rounded bg-blue-100">
                    {memberId
                        ? <>
                        <span className="ms-5">
                            <div className="grid grid-cols-1 ms-10">
                                <img className="ms-5 mt-5 w-10"
                                     src={`http://localhost:3000${memberId.memberProfile}`}
                                     alt={"작성자"}/>
                                <span className="top-5 font-bold text-black">{memberId.memberId}</span>
                            </div>
                        </span>
                            <input type="text"
                                   maxLength={50}
                                   placeholder={"50자 이내로 작성해주세요"}
                                   className="w-full h-10 bg-blue-200"
                                   onChange={titleOnChangeHandler}/>
                            <div className="grid grid-cols-2">
                                <div className="ms-10">
                                    {title.length >= 40
                                        ?
                                        <div className="text-red-600">글자 수 {title.length}</div>
                                        :
                                        <div>글자 수 {title.length}</div>
                                    }
                                </div>
                                <div className="text-end">
                                <button className="me-5 mb-3 font-bold" onClick={goRegister}>등록</button>
                                <button className="me-5 mb-3 font-bold" onClick={goCancle}>취소</button>
                                </div>
                            </div>
                        </>
                        :
                        null
                    }
                    </div>
                :
                null
                }
            </div>
            <hr className="my-5"/>
            {boardList && boardList.map((v, i) => {
                return(
                    <div key={i} className="my-5">
                        <div className="border rounded">
                            <div>게시글 번호 : {v.relayBoardNo}</div>
                            <div>게시글 제목 : {v.relayTitle}</div>
                            <div>작성자 : {v.memberId}</div>
                            <div>작성자 프로필 :
                                <img className="ms-5 mt-5 w-12 inline rounded-full"
                                     src={`http://localhost:3000${v.memberProfile}`}/>
                            </div>
                            <div>작성일 : {new Date(v.modifyDate).toLocaleString('ko-kr', {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric"
                            })}
                            </div>
                            <div>활성화 : {v.status}</div>
                            <button onClick={() => {
                                goChangeComment();
                                setRelayBoardNo(v.relayBoardNo)
                            }} className="bg-blue-600 text-white font-bold p-2 rounded">댓글 쓰기
                            </button>
                            {commentBtn
                                ?
                                <div className="border rounded p-10">
                                    <span className="text-black font-bold">{memberId.memberId}</span>
                                    <input type="text"
                                           maxLength={50}
                                           onChange={contentOnChangeHandler}
                                           placeholder="50자 이내로 작성해주세요"
                                           className="bg-blue-100 w-full h-12 rounded"/>
                                    <div className="grid grid-cols-2">
                                        <div className="text-center">
                                            {content.length >= 40
                                                ?
                                                <span className="text-red-600">글자 수 {content.length}</span>
                                                :
                                                <span className="text-start"> 글자 수 {content.length}</span>
                                            }
                                            <button className="me-5 mb-3 font-bold" onClick={()=>goGPT(v)}>
                                                <img src="/images/GPT_logo.png" className="w-8 mt-3"/>
                                            </button>
                                        </div>
                                        <div className="mt-5 text-end">
                                            <button className="me-5 mb-3 font-bold" onClick={goCommentRegister}>등록
                                            </button>
                                            <button className="me-5 mb-3 font-bold" onClick={goCommentCancle}>취소
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                :
                                null
                            }
                        </div>
                        <div className="my-5 mb-14">
                            <div>{v.commentList.map((c, j) => {
                                return (
                                    <div key={j} className="my-12">
                                            <>
                                                <img src="/images/comment_arrow.png" className="w-16 ms-20 inline"/>
                                                {
                                                    c.status === 'Y'

                                                    ?
                                                        <>
                                                        <div className="inline border ms-10 p-10 text-black">
                                                    <span><img src={`http://localhost:3000${c.memberProfile}`}
                                                               className="rounded-full w-12 inline"/></span>
                                                            <span>댓글 번호 : {c.commentNo}</span>
                                                            <span>작성일 : {new Date(c.modifyDate).toLocaleString('ko-kr', {
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "numeric",
                                                                second: "numeric"
                                                            })}
                                                            </span>
                                                                <span className="text-black">{c.memberId}</span>
                                                            <span className="text-black">내용 : {c.content}</span>
                                                        </div>
                                                        {c.memberId === memberId.memberId
                                                                ?
                                                                <button onClick={() => goDeleteComment(c.commentNo)}
                                                                        className="bg-red-500 p-5 text-white font-bold">삭제</button>
                                                                :
                                                                null
                                                        }
                                                        </>
                                                        :
                                                        <div className="inline border ms-10 p-10">
                                                            삭제된 댓글입니다.
                                                        </div>
                                                }
                                            </>
                                    </div>
                                )
                            })}</div>
                        </div>
                    </div>
                )
            })}
            <input type="hidden" ref={typeRef} value="RELAY_BOARD"/>
        </article>
    );
};