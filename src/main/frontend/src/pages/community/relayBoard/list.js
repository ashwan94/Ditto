import React, {useCallback, useEffect, useRef, useState} from 'react';
import axios from 'axios';
import '../../../css/boardList.css'
import {Link, useNavigate} from "react-router-dom";

export default function List () {
    const [relayBoardNo, setRelayBoardNo] = useState(0); // 임시로 저장할 게시글 번호
    const [boardList, setBoardList] = useState([]);
    const [totalBoardList, setTotalBoardList] = useState([]);

    const [memberId, setMemberId] = useState("");
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

        // 멤버십 회원만 첫 글 작성하도록 설정
        if (memberId.memberSub === 'N') {
            alert("멤버십 회원만 첫 글을 작성할 수 있습니다.");
            if(window.confirm("멤버십 구독 화면으로 이동하시겠습니까?")){
                navigate("/membershipInfo")
            }
            return;
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
    const [commentIndex, setCommentIndex] = useState(0);
    const goChangeComment = (e) => {
        if (!memberId) {
            alert("로그인이 필요한 서비스입니다.");
            navigate("/signIn");
        }

        if (e.commentList.length >= 5) {
            alert("이미 완결되었습니다.");
            return;
        }

        // 동일 게시글에 동일 회원 댓글 작성 방지
        for(let commentWriter of e.commentList){
            if(commentWriter.memberId === memberId.memberId){
                alert("이미 댓글을 작성하셨습니다.");
                return;
            }
        }

        setContent("");
        setCommentBtn(!commentBtn);
    }

    // GPT 로 댓글 작성
    const [gptUsed, setGptUsed] = useState(false); // GPT 사용 여부 판별
    const goGPT = (e) => {
        console.log("GPT 도와줘",e);
        console.log("릴레이 제목 : ",e.relayTitle);
        console.log("댓글 리스트 : ",e.commentList);
        setGptUsed(true);
    }

    // 댓글 창이 꺼지면 GPT State 를 false 로 변경
    useEffect(()=>{
        if(!addBtn){
            setGptUsed(false);
        }
    },[addBtn])

    // GPT 이미지 호버 애니메이션
    const [gptHover, setGptHover] = useState(false); // GPT 로고 이미지 회전
    // GPT 로고 호버 할때
    const handleHover = useCallback(() => {
        setGptHover(true);
    },[]);

    // GPT 로고 호버 안 할때
    const handleLeave = useCallback(() => {
        setGptHover(false);
    },[]);

    // 댓글 작성
    const goCommentRegister = async () => {
        console.log("GPT 사용 여부 확인 : ",gptUsed);
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
        setGptUsed(false);
    }

    // 댓글 작성 취소
    const goCommentCancle = async () => {
        setCommentBtn(false);
    }

    // 댓글 삭제
    const goDeleteComment = async (e) => {
        const res = await axios.post(`/comment/delete?commentNo=${e}`)
        getData();
    }

    // 날짜 형식 변환
    const formatDate = (dateString) => {
        const date = new Date(dateString);

        // Format date as yyyy.MM.dd
        const formattedDate = date.toLocaleDateString('ko-kr', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).replace(/\./g, '').replace(/ /g, '.').replace(/\.$/, '');

        // Format time as HH:mm
        const formattedTime = date.toLocaleTimeString('ko-kr', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false  // Use 24-hour format
        });

        return `${formattedDate} ${formattedTime}`;
    };

    // 로그인된 회원 정보 페이지에 저장
    useEffect(() => {
        getData()
        const memberLog = sessionStorage.getItem("member")
        if(memberLog){
            setMemberId(JSON.parse(memberLog)); // 필요한 경우 memberId, memberNickname, memberAdmin 등에서 data 꺼내쓰기
        }
    }, []);

    return (
        <article className="mt-32 ml-32 mr-32 p-5 rundry text-black">
            <br/>
            <div className="text-center text-4xl mb-10 border-b py-5 border-gray-200">
                <img src="https://cdn-icons-png.flaticon.com/512/5190/5190722.png"
                     className="w-48 py-5"
                     style={{display: "flex", margin: "auto"}}/>
                릴레이 소설
            </div>


            <div className="text-center mt-5">

                <div> 여러 사람의 손을 거친 소설은 어떻게 마무리될까요?<br />
                    자유롭고 두서없이 완성해나가는 릴레이 소설에 참여해보세요! </div>

                <div className="mt-5 mb-5 py-3 bg-gray-50 border-dashed border-2">
                    <p>릴레이 소설 게시판 규칙 안내</p>
                    <p>1. 인당 N개의 댓글을 작성할 수 있습니다.</p>
                    <p>2. 노란색 배경의 글에는 더이상 댓글을 작성할 수 없습니다.</p>
                    <p>3. 하늘색 배경의 글은 릴레이 소설이 진행중입니다.</p>

                    <button onClick={goAdd}
                            className="mb-4 mt-5 border border-blue-500 w-96 h-20 text-blue-500 hover:bg-blue-500 hover:text-white font-bold p-2 text-4xl rounded">
                        첫 글 쓰기
                    </button>
                </div>


            </div>
            <div className="my-5">
                {memberId.memberSub === 'Y' && addBtn
                    ?
                    <div className="border rounded bg-blue-100 mx-80">
                    {memberId
                        ? <>
                            <div className="flex justify-center items-center">
                                <img className="mt-3"
                                     style={{borderRadius: "100%", width: "50px", height: "50px"}}
                                     src={`http://localhost:3000${memberId.memberProfile}`}
                                     alt={"작성자"}/>
                            </div>
                            <div className="font-bold text-black text-center">{memberId.memberId}</div>
                            <div className="flex justify-center items-center">
                            <textarea type="text"
                                   maxLength={50}
                                   placeholder={"50자 이내로 작성해주세요"}
                                      className=" w-3/5 h-40 bg-blue-200 pt-5 text-center rounded text-4xl text-black"
                                      style={{resize: "none"}}
                                      onChange={titleOnChangeHandler}></textarea>
                            </div>
                            <div className="grid grid-cols-3 mt-5">
                                <div></div>
                                <div className="text-center">
                                    {title.length >= 40
                                        ?
                                        <div className="text-red-600">{title.length}</div>
                                        :
                                        <div>{title.length}</div>
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

            {boardList && boardList.map((v, i) => {
                return(
                    <div key={i} className="my-5 text-black">
                        <div
                            className={`border pt-5 mx-80 h-5/6 rounded ${v.commentList.length >= 5 ? "bg-amber-300" : "bg-blue-100"}`}>
                            <div>
                                <div className="flex justify-center">
                                    <img src={`http://localhost:3000${v.memberProfile}`}
                                         style={{width: "50px", height: "50px", borderRadius: "100%"}}/>
                                </div>
                                <div className="font-bold text-center">
                                    <span>{v.memberId}</span>
                                </div>
                                <div className="text-4xl my-3 mx-10 text-center">
                                    <span>{v.relayTitle}</span>
                                </div>
                            </div>
                            <div>
                                <div className="text-sm grid grid-cols-3">
                                    <div></div>
                                    <span className="text-center">{formatDate(v.modifyDate)}</span>
                                    <span className="text-end">
                                        {v.commentList.length >= 5
                                            ?
                                            null
                                            :
                                            <div>
                                                {v.memberId === memberId.memberId && memberId.memberSub === 'Y'
                                                    ?
                                                    null
                                                    :
                                                    <button onClick={() => {
                                                        goChangeComment(v);
                                                        setCommentIndex(i);
                                                        setRelayBoardNo(v.relayBoardNo);
                                                    }}
                                                            className="text-blue-500 font-bold text-sm me-4 mb-2 border border-blue-500 rounded p-2 hover:bg-blue-500 hover:text-white">댓글
                                                        쓰기
                                                    </button>
                                                }
                                            </div>
                                        }
                                    </span>
                                </div>
                            </div>
                            {commentBtn && commentIndex === i
                                ?
                                <div className="border rounded px-10 py-5 m-5">
                                    <span className="text-black font-bold">{memberId.memberId}</span>
                                    <input type="text"
                                           maxLength={50}
                                           onChange={contentOnChangeHandler}
                                           placeholder="50자 이내로 작성해주세요"
                                           className="bg-blue-100 w-full h-12 rounded mb-5"/>
                                    <div className="grid grid-cols-3">
                                        <div className="flex justify-center items-center">
                                            <button className={`font-bold w-10 ${gptHover ? 'rotate-infinite' : ''}`}
                                                    onMouseEnter={handleHover}
                                                    onMouseLeave={handleLeave}
                                                    style={{transition: 'transform 1s ease'}}
                                                    onClick={() => goGPT(v)}>
                                                <img src="/images/GPT_logo.png" className="w-10" alt="GPT Logo"/>
                                            </button>
                                        </div>
                                        <div className="text-center">
                                            {content.length >= 40
                                                ?
                                                <span className="text-red-600">{content.length}</span>
                                                :
                                                <span className="text-start">{content.length}</span>
                                            }
                                        </div>
                                        <div className="text-end">
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
                        {v.commentList.map((c, j) => {
                                return (
                                    <div key={j} className="grid grid-cols-3 ms-20 pt-3"
                                         style={{gridTemplateColumns: '0.8fr 2.2fr 1fr'}}>
                                        <div className="flex justify-end items-center"><img
                                            src="/images/comment_arrow.png" className="w-20 h-20 me-7"/>
                                        </div>
                                                {
                                                    c.status === 'Y'
                                                    ?
                                                        <div className="border rounded">
                                                            <div className="text-black mt-3">
                                                                <div className="flex justify-center items-center">
                                                                    <img src={`http://localhost:3000${c.memberProfile}`}
                                                                         style={{
                                                                             width: "50px",
                                                                             height: "50px",
                                                                             borderRadius: "100%"
                                                                         }}/>
                                                                </div>
                                                                <div
                                                                    className="text-black font-bold text-center">{c.memberId}</div>
                                                            </div>
                                                            <div className="text-black text-3xl text-center my-5 px-5">
                                                                {c.content}
                                                            </div>
                                                            <div
                                                                className="text-sm text-center mb-2 grid grid-cols-3">
                                                                <div></div>
                                                                <div className="mb-1">{formatDate(c.modifyDate)}</div>
                                                                {c.memberId === memberId.memberId
                                                                    ?
                                                                    <div className="flex justify-end items-center me-3">
                                                                        <button
                                                                            onClick={() => goDeleteComment(c.commentNo)}
                                                                            className="ms-10 text-red-400 w-10 h-8 font-bold border px-1 rounded hover:bg-red-500 hover:text-white">삭제
                                                                        </button>
                                                                    </div>
                                                                    :
                                                                    null
                                                                }
                                                            </div>
                                                        </div>
                                                        :
                                                        <div
                                                            className="flex justify-start items-center border rounded bg-gray-300">
                                                            <div className="ms-5 py-24 text-black">삭제된 댓글입니다.</div>
                                                        </div>
                                                }
                                    </div>
                                )
                        })}
                    </div>
                )
            })}
            <input type="hidden" ref={typeRef} value="RELAY_BOARD"/>
        </article>
    );
};