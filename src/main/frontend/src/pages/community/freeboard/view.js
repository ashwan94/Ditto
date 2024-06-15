import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
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
                <div className="page-title mt-24">
                    <div className="container">
                        <Link to={`/community/freeBoard/list`}><h3>자유게시판</h3></Link>
                    </div>
                </div>
                <div id="board-list">
                    <div className="container">
                        {board ? (
                            <table className="board-table">
                                <thead>
                                <tr style={{border:" 1px solid grey"}}>
                                    <th>{board.freeTitle}</th>
                                </tr>
                                </thead>
                                <tbody style={{border: "1px solid grey"}}>
                                <tr className="float-left">
                                    <td>이미지</td>
                                    <td style={{textAlign: "left"}}><span className="ml-4">ID: {board.memberId} 일시: {new Date(board.registerTime).toLocaleString()} 조회수: {board.hits}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{board.freeContent}</td>
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
