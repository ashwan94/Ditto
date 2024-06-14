import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../../css/board.css';

export default function View() {
    const { freeBoardNo } = useParams();
    const [board, setBoard] = useState(null);

    const getBoard = async () => {
        const res = await axios.get(`/freeboard/view/${freeBoardNo}`);
        if (res.data) {
            setBoard(res.data);
        }
    };

    useEffect(() => {
        getBoard();
    }, [freeBoardNo]);

    return (
        <div>
            <section className="notice">
                <div className="page-title">
                    <div className="container">
                        <h3>자유게시판</h3>
                    </div>
                </div>
                <div id="board-list">
                    <div className="container">
                        {board ? (
                            <table className="board-table">
                                <thead>
                                <tr>
                                    <th>제목</th>
                                    <td>{board.freeTitle}</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>내용</th>
                                    <td>{board.freeContent}</td>
                                </tr>
                                <tr>
                                    <th>아이디</th>
                                    <td>{board.memberId}</td>
                                </tr>
                                <tr>
                                    <th>등록일</th>
                                    <td>{new Date(board.registerTime).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <th>조회수</th>
                                    <td>{board.hits}</td>
                                </tr>
                                </tbody>
                            </table>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};
