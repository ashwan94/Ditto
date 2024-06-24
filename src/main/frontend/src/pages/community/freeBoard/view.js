import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';
import '../../../css/boardDetail.css';
import ReactQuill from "../../../js/ReactQuill";


export default function View() {
    const [board, setBoard] = useState(null);
    let freeBoardNo = useLocation().state; // 이전 page 에서 전달받은 freeBoardNo
    const navigate = useNavigate();

    const getBoard = async () => {
        // 이전 page 에서 data 를 넘겨 받았으면 console 에 출력
        const res = await axios.get('/freeBoard/view', {
            params : {
                freeBoardNo : freeBoardNo
            }
        })
        if (res.data) {
            setBoard(res.data);
        }
    };

    useEffect(() => {
        getBoard();
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
                        <div>작성일 : {new Date(board.registerTime).toLocaleString()}
                            <span className="float-right mr-4">조회수: {board.hits}</span>
                        </div>
                    </div>
                    <div className="content" dangerouslySetInnerHTML={{__html: board.freeContent}}/>
                    <div className="actions">
                        {/* TODO
                        게시글을 연사람이 로그인아이디와 게시글작성자와 일치할때만 보이도록 */}
                        <button className="bg-blue-500 text-white font-bold" onClick={updatePost}>수정</button>
                        <button className="bg-red-500 text-white font-bold" onClick={deletePost}>삭제</button>
                        <button onClick={() => navigate("/community/freeBoard/list")}
                                className="bg-gray-500 text-white font-bold">목록
                        </button>
                    </div>
                    <div className="comment-section">
                        <textarea placeholder="댓글을 입력하세요."></textarea>
                        <div className="comment-actions">
                            <input type="text" placeholder="작성자"/>
                            <button>댓글 작성</button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};
