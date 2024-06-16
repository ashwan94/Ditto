import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import '../../../css/boardDetail.css';


export default function View() {
    const { freeBoardNo } = useParams();
    const [board, setBoard] = useState(null);

    const getBoard = async () => {
        const res = await axios.get(`/freeboard/view/${freeBoardNo}`);  // 조회수 증가된 게시글 상세 정보 가져오기
        if (res.data) {
            setBoard(res.data);
        }
    };

    useEffect(() => {
        getBoard();
    }, [freeBoardNo]);

    return (
        <>
            {board ? (
                <div className="container" style={{marginTop:"10rem", marginLeft:"6rem"}}>
                    <div className="header">
                        <div className="title">{board.freeTitle}</div>
                        <div className="info">작성자: {board.memberId}</div>
                        <div className="info">작성일: {new Date(board.registerTime).toLocaleString()} <span className="float-right mr-4">조회수: {board.hits}</span></div>
                    </div>
                    <div className="content">
                        {board.freeContent}
                    </div>
                    <div className="actions">
                        {/* 게시글을 연사람이 로그인아이디와 게시글작성자와 일치할때만 보이도록 */}
                        <button className="edit">수정</button>
                        <button className="delete">삭제</button>
                    </div>
                    <div className="comment-section">
                        <textarea placeholder="댓글을 입력하세요."></textarea>
                        <div className="comment-actions">
                            <input type="text" placeholder="작성자" />
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
