import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import '../../../css/board.css';

const FreeBoard = () => {
    const [posts, setPosts] = useState([]);
    const [searchBoard, setSearchBoard] = useState("");

    const searchBoardOnChangeHandler = useCallback((e) => {
        setSearchBoard(e.target.value);
    }, []);

    useEffect(() => {
        axios.get('/freeboard/list')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('에러 발생:', error);
            });
    }, []);

    return (
        <div>
            <section className="notice">
                <div className="page-title">
                    <div className="container">
                        <h3>자유게시판</h3>
                    </div>
                </div>
                <div id="board-search">
                    <div className="container">
                        <div className="search-window">
                            <form action="">
                                <div className="search-wrap">
                                    <label htmlFor="search" className="blind">공지사항 내용 검색</label>
                                    <input
                                        onChange={searchBoardOnChangeHandler}
                                        id="search" type="search" placeholder="검색어를 입력해주세요." value={searchBoard} />
                                    <button type="submit" className="btn btn-dark">검색</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="board-list">
                    <div className="container">
                        <table className="board-table">
                            <thead>
                            <tr>
                                <th scope="col" className="th-num">번호</th>
                                <th scope="col" className="th-title">제목</th>
                                <th scope="col" className="th-nick-name">닉네임</th>
                                <th scope="col" className="th-date">등록일</th>
                                <th scope="col" className="th-hits">조회수</th>
                            </tr>
                            </thead>
                            <tbody>
                                {posts.map((post,index) => (
                                    <tr key={index}>
                                        <td>{post.freeBoardNo}</td>
                                        <th>{post.freeTitle}</th>
                                        <td>{post.memberId}</td>
                                        <td>{new Date(post.registerTime).toLocaleString()}</td>
                                        <td>{post.hits}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FreeBoard;
