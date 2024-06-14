import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BookView() {
    const { bookNo } = useParams();
    const [book, setBook] = useState({});

    console.log("BookView");
    console.log(bookNo);

    const getBook = async () => {
        try {
            console.log("getBook");
            console.log(bookNo);

            const res = await axios.get("/book/view", {
                params: {
                    bookNo: bookNo
                }
            });
            setBook(res.data);

            console.log("통신으로 넘어오는 값 : ", res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getBook();
    }, []);

    return (
        <main>
            <section className="gj do ir hj sp jr i pg">
                <div className="bb ze ki xn 2xl:ud-px-0">
                    <div className="container">
                        <h3>도서 상세보기</h3>
                    </div>

                {/*    <table className="board-table">*/}
                {/*        <thead>*/}
                {/*        <th>*/}
                {/*            <tr scope="col" className="th-num">{book.bookNo} 책 번호</tr>*/}
                {/*            <tr scope="col" className="th-title">{book.bookName}</tr>*/}
                {/*            <tr scope="col" className="th-nick-name">{book.bookCompany}</tr>*/}
                {/*            <tr scope="col" className="th-date">{book.bookIntro}</tr>*/}
                {/*            <tr scope="col" className="th-hits">{book.bookRent}</tr>*/}
                {/*            <tr scope="col" className="th-hits">{book.bookAuthor}</tr>*/}
                {/*            <tr scope="col" className="th-hits">{book.bookRelease}</tr>*/}
                {/*            <tr scope="col" className="th-hits">{book.bookImage}</tr>*/}
                {/*        </th>*/}
                {/*        </thead>*/}
                {/*        <tbody>*/}
                {/*        <tr>*/}
                {/*            <td>1</td>*/}
                {/*            <th>2</th>*/}
                {/*            <td>3</td>*/}
                {/*            <td>4</td>*/}
                {/*            <td>5</td>*/}
                {/*        </tr>*/}
                {/*        </tbody>*/}
                {/*    </table>*/}
                {/*</div>*/}

                <div id="board-list">
                    <div className="container">
                        <table className="board-table">
                            <tbody>
                            <th>
                                <tr scope="col" className="th-num">책 번호 : {book.bookNo}</tr>
                                <tr scope="col" className="th-nick-name">도서명 : {book.bookName}</tr>
                                <tr scope="col" className="th-date">소개 : {book.bookIntro}</tr>
                                <tr scope="col" className="th-hits">대여여부 : {book.bookRent}</tr>
                                <tr scope="col" className="th-hits">저자 : {book.bookAuthor}</tr>
                                <tr scope="col" className="th-hits">출간일 : {book.bookRelease}</tr>
                                <tr scope="col" className="th-hits">
                                    <image href={book.bookImage}></image>
                                </tr>
                            </th>
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </section>
        </main>
)

}
