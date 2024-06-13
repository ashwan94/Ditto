import {useEffect, useState} from "react";
import axios from "axios";


export default function BookList() {
    const [book, setBook] = useState([]);
    // DB 에서 전체 podcast 내용 조회
    const getData = async () => {
        try {
            const res = await axios.get("/book/list");
            console.log(res.data);
            setBook(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        getData();
    }, [book]);

    const totalCount = 335
    const limit = 10
    let totalPage = Math.ceil(totalCount / limit)
    const currentPage = 1
    const pageCount = 5
    let pageGroup = Math.ceil(currentPage / pageCount)
    let lastNumber = pageGroup * pageCount
    if (lastNumber > totalPage) {
        lastNumber = totalPage
    }
    let firstNumber = lastNumber - (pageCount - 1) // 1

    const next = lastNumber + 1 // 6
    const prev = firstNumber - 1 // 0

    // for (let i = firstNumber; i <= lastNumber; i++) {
    //     html += `<button class="pageNumber" id="page_${i}">${i}</button>`
    // }

    const [page, setPage] = useState(1);
       useEffect(() => {

    }, [page]);
    return (
        <main>
            <section className="gj do ir hj sp jr i pg">
                    <div class="bb ze ki xn 2xl:ud-px-0">
                        {book && book.length > 0 ? (
                                book.map((v, i) => (
                                    <ul role="list" className="divide-y divide-gray-100" key={i}>
                                        <a href="#">
                                            <li className="flex justify-between gap-x-6 py-5">
                                                <div className="flex min-w-0 gap-x-4">
                                                    <img className="h-60 w-60 flex-none rounded-md bg-gray-50 border-2 p-1"
                                                         src={v.bookImage}
                                                         alt=""/>
                                                    <div className="min-w-0 flex-auto mt-5 ml-5">
                                                        <p className="text-lg font-bold leading-6 text-gray-900">
                                                            {v.bookName}</p>
                                                        <p className="text-s leading-6 text-gray-900">저자 : {v.bookAuthor}
                                                        </p>
                                                        <p className="text-s leading-6 text-gray-900">출판사
                                                            : {v.bookCompany}</p>
                                                        <p className="mt-1 text-s leading-5 text-gray-500">출판날짜
                                                            : {v.bookRelease}</p>
                                                        <p className="mt-1 truncate text-s leading-5 text-gray-900">책 소개
                                                            : {v.bookIntro}</p>
                                                        <p className="mt-1 text-s leading-5 text-gray-500">대여여부
                                                            : {v.bookRent}</p>
                                                    </div>
                                                </div>


                                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">

                                                </div>
                                            </li>
                                        </a>
                                    </ul>
                                ))
                            ) :
                            null
                        }


                        <div>
                            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                 aria-label="Pagination">
                                <a href="#"
                                   className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                    <span className="sr-only">Previous</span>
                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </a>

                                {/* 1-34 번까지의 페이지 번호가 들어가게 될 곳 */}
                                <a href="#" aria-current="page"
                                   className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                                <a href="#"
                                   className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                                <a href="#"
                                   className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                                <span
                                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                                <a href="#"
                                   className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                                <a href="#"
                                   className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                                <a href="#"
                                   className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                                <a href="#"
                                   className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                    <span className="sr-only">Next</span>
                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </a>
                            </nav>
                        </div>
                    </div>
            </section>
        </main>
);
}
