import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../../../css/boardDetail.css';


export default function View() {
    const { freeBoardNo } = useParams();
    const [board, setBoard] = useState(null);
    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [title, setTitle] = useState(''); // 비동기처리라서 바뀌고 렌더링 시켜줘야함 useState는 상태값담고 변형시켜줄떄 씀
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);
    const navigate = useNavigate(); // useNavigate 훅 초기화

    const titleOnChangeHandler = useCallback((e) => {
        setTitle(e.target.value);
    }, []);

    const contentOnChangeHandler = useCallback((e) => {
        setContent(e.target.value);
    }, []);

    const fileOnChangeHandler = useCallback((e) => {
        setFile(e.target.files);
    }, []);

    const mem = JSON.parse(sessionStorage.getItem("member"))

    const getBoard = async () => {
        try{
            const res = await axios.get(`/freeboard/view/${freeBoardNo}`);  // 조회수 증가된 게시글 상세 정보 가져오기
            if (res.data) {
                console.log("=> ", res.data);
                setBoard(res.data);

                if(res.data.memberId == mem.id){
                    setShow(true);
                }

            }
        }catch (error){
            console.error("에러야! :",error)
        }
    };

    useEffect(() => {
        if(board){
            setTitle(board.freeTitle)
            setContent(board.freeContent)
        }
    }, [board]); // [안의값이 바꼈을떄] 실행하도록 []비어있으면 최초 렌더링 시에만 실행

    const deleteBoard = async () => {
        try {
            const res = await axios.put(`/freeboard/${freeBoardNo}`);
            if (res.status == 200) {
                alert("삭제되었습니다.");
                navigate("/community/freeBoard/list"); // 삭제 후 페이지 이동
            } else {
                alert("삭제 실패");
            }
        } catch (error) {
            console.error('에러야!', error);
            alert("에러라구!");
        }
    };

    const updateBoard = async (e) => {
        e.preventDefault();
        const postData = { // 보낼정보
            freeTitle: title,
            freeContent: content,
        };
        try {
            const res = await axios.put(`/freeboard/update/${freeBoardNo}`, postData);
            if (res.status == 200) {
                setShowUpdate(false)
                getBoard();
                alert("수정되었습니다.");
            } else {
                alert("수정 실패");
            }
        } catch (error) {
            console.error('에러야!', error);
            alert("에러라구!");
        }
    }

    useEffect(() => {
        getBoard();
    }, [freeBoardNo]);

    return (
        <>
            {board && !showUpdate ? (
                <div className="container" style={{marginTop:"10rem", marginLeft:"6rem"}}>
                    <div className="header">
                        <div className="title">{board.freeTitle}</div>
                        <div className="info">작성자: {board.memberId}</div>
                        <div className="info">작성일: {new Date(board.registerTime).toLocaleString()} <span className="float-right mr-4">조회수: {board.hits}</span></div>
                    </div>
                    <div className="content">
                        {board.freeContent}
                    </div>
                    {show ?(
                        <div className="actions">
                        {/* 게시글을 연사람이 로그인아이디와 게시글작성자와 일치할때만 보이도록 */}
                            <button
                                onClick={() => {
                                    setShowUpdate(true)
                                }}
                                className="edit">수정</button>
                            <button
                                onClick={deleteBoard}
                                className="delete">삭제</button>
                        </div>
                    ) : null}
                    <div className="comment-section">
                        <textarea placeholder="댓글을 입력하세요."></textarea>
                        <div className="comment-actions">
                            <input type="text" placeholder="작성자" />
                            <button>댓글 작성</button>
                        </div>
                    </div>
                </div>
            ) : showUpdate ? (
                <div className="card" style={{marginTop: " 10rem"}}>
                    <div className="card-header1">
                        <Link to={`/community/freeBoard/list`}><h3 className="center">자유게시판</h3></Link>
                    </div>
                    <form onSubmit={updateBoard}>
                        <div className="card-write">
                            <div className="title-w">
                                <label>
                                    제목
                                    <input
                                        type="text"
                                        placeholder="제목을 입력하세요."
                                        value={title}
                                        onChange={titleOnChangeHandler}
                                    />
                                </label>
                            </div>
                            <div className="msg">
                                <label>
                                    내용
                                    <textarea
                                        placeholder="내용을 입력하세요."
                                        value={content}
                                        onChange={contentOnChangeHandler}
                                    ></textarea>
                                </label>
                                <input
                                    type="file"
                                    onChange={fileOnChangeHandler}
                                />
                            </div>
                            <button
                                type="submit" className="float-right btn"
                                style={{backgroundColor: "orange", color: "white"}}>완료
                            </button>
                        </div>
                    </form>
                </div>
            ) : <p>loding...</p>
            }
        </>
    );
};
