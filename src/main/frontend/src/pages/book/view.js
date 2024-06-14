import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import "../../css/board.css"

export default function BookView() {
    const {bookNo} = useParams();
    const [book, setBook] = useState({});
    const [bookRent, setBookRent] = useState(true);

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
            console.log("렌트 여부", res.data.bookNo)

            console.log("통신으로 넘어오는 값 : ", res.data.bookRent);
            if (res.data.bookRent == 'n') {
                // 대출 가능
                setBookRent(true)
            } else if (res.data.bookRent == 'y') {
                setBookRent(false);
            }
            console.log("도서 대여 여부 : ", bookRent);
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
                <div>

                    <div className="page-title">
                        <div className="container">
                            <img
                                src="https://i0.wp.com/library.re.kr/wp-content/uploads/2022/08/social-1024x512-1.jpeg"
                                alt="Example"
                                style={{
                                    width: '100%',
                                    height: '300px',
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            />
                        </div>
                    </div>
                    <div id="board-list" className="rundry">
                        <div className="container">
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center"
                            }}>
                                책을 깨끗하게 사용해주세요<br /> 우리 모두가 함께 사용하는 소중한 책들입니다. <br/>다음 이용자를 위해 책을 소중히 다뤄주세요.<br/> 감사합니다!
                            </div>
                            <div style={{marginTop: "4%", marginBottom: "2%"}}>
                                {/*<img src="https://w7.pngwing.com/pngs/676/110/png-transparent-barcode-book-education-library-loan-school-library-icon.png" />*/}
                                <button
                                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-2">
                                    도서 대여
                                </button>
                                <Link to={`/book/list`}>
                                    <button
                                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2">
                                        목록
                                    </button>
                                </Link>
                            </div>
                            <table className="board-table" style={{fontSize: "15px"}}>
                                <thead>
                                <th style={{background: "lightgray"}} scope="col" className="th-num">표지</th>
                                <td>
                                    <img
                                        src={book.bookImage}
                                        alt="책 표지"
                                        className="flex justify-center items-center"
                                        style={{marginLeft: "40%"}}
                                        // style={{display:"flex", justifyContent:"center", alignItems:"center"}}
                                    />
                                </td>
                                </thead>
                                <tbody>
                                <tr>
                                    <th style={{background: "lightgray"}} scope="col" className="bookDetailTitle">번호
                                    </th>
                                    <td scope="col">{book.bookNo}</td>
                                </tr>
                                <tr>
                                    <th style={{background: "lightgray"}} scope="col" className="bookDetailTitle">제목
                                    </th>
                                    <td>{book.bookName}</td>
                                </tr>
                                <tr>
                                    <th style={{background: "lightgray"}} scope="col" className="bookDetailTitle">저자
                                    </th>
                                    <td>{book.bookAuthor}</td>
                                </tr>
                                <tr>
                                    <th style={{background: "lightgray"}} scope="col" className="bookDetailTitle">출판사
                                    </th>
                                    <td>{book.bookCompany}</td>
                                </tr>
                                <tr>
                                    <th style={{background: "lightgray"}} scope="col"
                                        className="bookDetailTitle white-space: nowrap">도서설명
                                    </th>
                                    <td>{book.bookIntro}</td>
                                </tr>
                                <tr>
                                    <th style={{background: "lightgray"}} scope="col" className="bookDetailTitle">해당년월
                                    </th>
                                    <td>{book.bookRelease}</td>
                                </tr>
                                <tr>
                                    <th style={{background: "lightgray"}} scope="col"
                                        className="bookDetailTitle">대출가능<br/>여부
                                    </th>
                                    <td>
                                        {bookRent ? <img
                                                src="/images/book_possible.png"
                                                alt="대출 가능"
                                                className="flex justify-center items-center"
                                                style={{width:"50px", height:"50px", marginLeft:"48%"}}/>
                                            : <img
                                                src="/images/book_impossible.png"
                                                alt="대출 불가능"
                                                className="flex justify-center items-center"
                                                style={{width:"50px", height:"50px", marginLeft:"48%"}}/>
                                        }
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                <div>

                </div>
            </section>
        </main>
    )

}
