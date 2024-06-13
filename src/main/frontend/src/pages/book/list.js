import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function BookList() {

    // 도서 리스트
    const [bookList, setBookList] = useState([]);
    // 현재 페이지
    const [currentPage, setCurrentPage] = useState(1);
    // 한 페이지에 보일 게시글의 개수
    const recordsPerPage = 10;
    const totalCount = 335

    const getData = async () => {
        try {
            console.log(currentPage)
            const fristRecordIndex = (currentPage-1) * 10 + 1  //페이지시작
            // const lastRecordIndex = currentPage * recordsPerPage //페이지종료

            const res = await axios.get("/book/list", {
                params: {
                    firstRecordIndex: fristRecordIndex,
                    // lastRecordIndex: lastRecordIndex
                }

            });
            setBookList(res.data.list);
            setCurrentPage(currentPage);

            console.log("도서 목록 : ", res.data.list);
            console.log(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, [currentPage]);


    return (
        <main>
            <section className="gj do ir hj sp jr i pg">
                <div className="bb ze ki xn 2xl:ud-px-0">
                    <form action="/book/list" method="get">
                        <label>
                            <select name="searchType">
                                <option>선택</option>
                                <option value="title">제목</option>
                                <option value="content">내용</option>
                            </select>
                        </label>
                        <label>
                            <input type="text" name="searchWord" placeholder="검색어" />
                        </label>
                        <button type="submit">검색</button>
                    </form>

                    {bookList && bookList.length > 0 ? (
                        bookList.map((v, i) => (
                            <ul role="list" className="divide-y divide-gray-100" key={i}>
                                <a href={`/book/view?no=${v.bookNo}`}>
                                    <li className="flex justify-between gap-x-6 py-5">
                                        <div className="flex min-w-0 gap-x-4">
                                            <img className="h-60 w-60 flex-none rounded-md bg-gray-50 border-2 p-1"
                                                 src={v.bookImage}
                                                 alt={v.bookName} />
                                            <div className="min-w-0 flex-auto mt-5 ml-5">
                                                <p className="text-lg font-bold leading-6 text-gray-900">
                                                    {v.bookName}
                                                </p>
                                                <p className="text-s leading-6 text-gray-900">저자 : {v.bookAuthor}</p>
                                                <p className="text-s leading-6 text-gray-900">출판사 : {v.bookCompany}</p>
                                                <p className="mt-1 text-s leading-5 text-gray-500">출판날짜 : {v.bookRelease}</p>
                                                <p className="mt-1 truncate text-s leading-5 text-gray-900">책 소개 : {v.bookIntro}</p>
                                                <p className="mt-1 text-s leading-5 text-gray-500">대여여부 : {v.bookRent}</p>
                                            </div>
                                        </div>
                                    </li>
                                </a>
                            </ul>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}

                    {/* 페이지 버튼 시작 */}
                    <div>
                        {Array.from({ length: 34 }, (_, i) => i + 1).map((page) => (


                            <Link to={`/book/list?currentPageNo=${page}`}
                                key={page}
                                onClick={() => {setCurrentPage(page);}}
                            >
                                {page}
                            </Link>


                        ))}
                    </div>

                    {/* 버튼 끝 */}
                </div>
            </section>
        </main>
    );
}
