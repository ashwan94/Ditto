import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import '../../../css/board.css';

export default function List () {
    const [boardList, setBoardList] = useState([]);
    const [keyword, setKeyword] = useState("");

    const searchKeywordOnChangeHandler = useCallback((e) => {
        setKeyword(e.target.value);
    }, []);

    const getData = async () => {
        const res = await axios.get('/freeboard/list')
        if (res.data) {
            setBoardList(res.data);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const handleSearch = async  () => {
        const res = await axios.get(`/freeboard/search?keyword=${keyword}`)
        console.log("데이터 결과 : ", res.data);
        if (res.data) {
            setBoardList(res.data)
        }
    }

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

                                <div className="search-wrap">
                                    <label htmlFor="search" className="blind">공지사항 내용 검색</label>
                                    <input
                                        onChange={searchKeywordOnChangeHandler}
                                        id="search" type="text" placeholder="검색어를 입력해주세요." value={keyword} />
                                    <button
                                        onClick={handleSearch}
                                       className="btn btn-dark">검색</button>
                                </div>

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
                                <th scope="col" className="th-id">아이디</th>
                                <th scope="col" className="th-date">등록일</th>
                                <th scope="col" className="th-hits">조회수</th>
                            </tr>
                            </thead>
                            <tbody>
                                {boardList.map((board,i) => (
                                    <tr key={board.freeBoardNo}>
                                        <td>{i + 1}</td>
                                        <th>{board.freeTitle}</th>
                                        <td>{board.memberId}</td>
                                        <td>{new Date(board.registerTime).toLocaleString()}</td>
                                        <td>{board.hits}</td>
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
