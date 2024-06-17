import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
// import '../../../css/board.css';
import '../../../css/boardList.css'
import {Link} from "react-router-dom";

export default function List () {
    const [boardList, setBoardList] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [searchType, setSearchType] = useState("freeTitle");

    const searchKeywordOnChangeHandler = useCallback((e) => {
        setKeyword(e.target.value);
    }, []);

    const searchTypeOnChangeHandler = useCallback((e) => {
        setSearchType(e.target.value);
    }, []);

    const getData = async () => {
        const res = await axios.get('/freeboard/list')
        if (res.data) {
            setBoardList(res.data);
            console.log(res.data)
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const handleSearch = async  () => {
        const res = await axios.get(`/freeboard/search?keyword=${keyword}&type=${searchType}`)
        console.log("데이터 결과 : ", res.data);
        if (res.data) {
            setBoardList(res.data)
        }
    }

    const allList = () =>{
        setKeyword("")
        getData();
    }

    return (
        <article className="mt-32 ml-32 mr-32">
            <div>
                <Link to={`/community/freeBoard/list`} onClick={allList}><h3 className="center">자유게시판</h3></Link><br/>
                <hr className="hr1" noshade/>
                <span>총 {boardList.length} 개의 게시물이 있습니다.</span>
                <span className="right">
                    <span className="grey" id="strong">SELECT</span>
                    <select onChange={searchTypeOnChangeHandler}>
                        <option value="제목">제목</option>
                        <option value="글쓴이">글쓴이</option>
                    </select>
                    <input
                        onChange={searchKeywordOnChangeHandler}
                        type="text" value={keyword}/>
                    <button
                        onClick={handleSearch}
                        name="검색" className="gradient">
                        검색
                    </button>
                </span><br/>
                <table>
                    <thead>
                        <tr>
                            <th className="small-col">번호</th>
                            <th className="large-col">제목</th>
                            <th className="sl-col">글쓴이</th>
                            <th className="middle-col">일시</th>
                            <th className="small-col">조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {boardList.map((board,i)=> (
                            <tr key={board.freeBoardNo}>
                                <td className="center small-col">{i + 1}</td>
                                <td className="left large-col">
                                    <Link
                                        to={`/community/freeBoard/view/${board.freeBoardNo}`}>
                                        {board.freeTitle}
                                    </Link>
                                </td>
                                <td className="center small-col">{board.memberId}</td>
                                <td className="center sl-col">{new Date(board.registerTime).toLocaleString()}</td>
                                <td className="center small-col">{board.hits}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br/>
                <div className="center">
                    <a href="https://www.naver.com">◀ 이전</a>
                    <a href="https://www.naver.com">1</a>
                    <a href="https://www.naver.com">다음 ▶</a>
                </div>
                <span className="right">
                    <Link to={`/community/freeBoard/list`}><button className="greylist" onClick={allList}>목록</button></Link>
                    <Link to={`/community/freeBoard/add`}><button className="gradient">글쓰기</button></Link>
                </span>
            </div>
        </article>
    );
};
