import axios from "axios";
import {useCallback, useEffect, useState} from "react";

export default function AdminPage(){

    const [memberList, setMemberList] = useState([]) // 회원 정보 리스트
    const [freeBoardList, setFreeBoardList] = useState([])// 자유게시판 리스트
    const [relayBoardList, setRelayBoardList] = useState([]) // 릴레이 소설게시판 리스트
    const [bookRentList, setBookRentList] = useState([]) // 도서 대여 이력 리스트
    const [showMemberList, setShowMemberList] = useState(false) // 회원 정보 화면표시
    const [showFreeBoardList, setShowFreeBoardList] = useState(false) // 자유게시판 화면표시
    const [showRelayBoardList, setShowRelayBoardList] = useState(false) // 릴레이 소설 게시판 화면표시
    const [showBookList, setShowBookList] = useState(false) // 도서 대여 이력 화면표시
    const [searchId,setSearchId] = useState("") // 아이디 검색

    const searchIdOnChangeHandler = useCallback((e) => {
        setSearchId(e.target.value)
    },[searchId])

    // 회원정보 전체 조회
    const getMemberData = async () => {

        try {
            const resMem = await axios.get("/adminMemberList");

            setMemberList(resMem.data)

        } catch (error) {
            console.error("회원정보 에러", error);
        }

    };

    // 자유게시판 리스트 조회
    const getFreeBoardData = async () => {
        try {
            const resFreeBoard = await axios.get("/adminFreeBoardList");

            setFreeBoardList(resFreeBoard.data)

        } catch (error) {
            console.error("자유게시판 에러", error);
        }
    }

    // 릴레이 소설게시판 리스트 조회
    const getRelayBoardData = async () => {
        try {
            const resRelayBoard = await axios.get("/adminRelayBoardList");

            setRelayBoardList(resRelayBoard.data)

        } catch (error) {
            console.error("릴레이 소설 게시판 에러", error);
        }
    }

    // 관리자 페이지 도서 대여 이력 조회
    const getBookRentData = async () => {
        try {
            const resBookRent = await axios.get("/adminBookRentList");

            setBookRentList(resBookRent.data)
            console.log(resBookRent.data)

        } catch (error) {
            console.error("도서 대여 이력조회 에러", error);
        }
    }

    useEffect(() =>{
        setShowMemberList(true)
        getMemberData();
        getFreeBoardData();
        getRelayBoardData();
        getBookRentData();
    },[])

    // 멤버 아이디로 회원 정보, 게시판, 도서 대여이력 검색
    const searchBtn = async () => {
        if (searchId != ""){
            if (showMemberList){
                searchMemId();
            }else if (showFreeBoardList){
                searchFreeBoardList();
            }else if(showRelayBoardList){
                searchRelayBoardList();
            }else if(showBookList){
                searchBookList();
            }
        }else {
            getMemberData();
            getFreeBoardData();
            getRelayBoardData();
            getBookRentData();
        }
    }

    // 회원정보 검색아이디 요청
    const searchMemId = async () => {
        try {
            const resMB = await axios.post("/adminMemberListSearch",{
                memberId : searchId
            });
            setMemberList(resMB.data)

        } catch (error) {
            console.error("도서 대여 이력조회 에러", error);
        }
    }

    // 자유게시판 검색아이디 정보 요청
    const searchFreeBoardList = async () => {
        try {
            const resFB = await axios.post("/adminFreeBoardListSearch",{
                memberId : searchId
            });
            setFreeBoardList(resFB.data)

        } catch (error) {
            console.error("도서 대여 이력조회 에러", error);
        }
    }

    // 릴레이 소설게시판 검색아이디 요청
    const searchRelayBoardList = async () => {
        try {
            const resRB = await axios.post("/adminRelayBoardListSearch",{
                memberId : searchId
            });
            setRelayBoardList(resRB.data)

        } catch (error) {
            console.error("도서 대여 이력조회 에러", error);
        }
    }

    // 도서 대역 이력 검색아이디 요청
    const searchBookList = async () => {
        try {
            const resBK = await axios.post("/adminBookRentListSearch",{
                memberId : searchId
            });
            setBookRentList(resBK.data)
            console.log(resBK.data)

        } catch (error) {
            console.error("도서 대여 이력조회 에러", error);
        }
    }

    // 회원 비활성화 요청
    const memberDeleteY = async (mem) => {
        try{
            await axios.post("/memberDeleteY",{
                memberId: mem
            })
        }catch (error){
            console.log("회원 탈퇴 에러야", error);
        }
        searchBtn();
    }

    // 회원 활성화 요청
    const memberDeleteN = async (mem) => {
        try{
            await axios.post("/memberDeleteN",{
                memberId: mem
            })
        }catch (error){
            console.log("회원 활성화 에러야", error);
        }
        searchBtn();
    }

    // 회원 멤버십 구독상태 변경
    const memberSubStatus = async (memId,memSb) => {
        try{
            const subData = {
                memberId : memId,
                memberSub : memSb
            }
            await axios.post("/memberSubStatus",subData,{
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
        }catch (error){
            console.log("멤버쉽 구독상태 수정 에러야!", error)
        }
        searchBtn();
    }

    // 도서목록에서 회원 아이디 클릭시 해당 회원 번호 검색
    const idClick = async (memId) => {
        try {
            const res = await axios.post("/idClickSearch",{
                memberId : memId
            });
            setBookRentList(res.data)
        } catch (error) {
            console.error("도서 대여 이력조회 에러", error);
        }
    }

    // 휴대전화 정규식
    function formatPhoneNumber (phoneNumber) {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
        if (match) {
            return `${match[1]}-${match[2]}-${match[3]}`;
        }
        return null;
    }
    return (
        <main className="rundry">
            <section className="i pg fh rm ki xn vq gj qp gr hj rp hr ">
                <div className="bb ze ki xn 2xl:ud-px-0">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div>
                            <span
                                onClick={() => {setShowMemberList(true); setShowFreeBoardList(false); setShowRelayBoardList(false); setShowBookList(false); getMemberData(); setSearchId("");}}
                                className={`btn mt-1 text-lg leading-6 mx-3 ${showMemberList ? 'text-blue-600' : 'text-gray-600'}`}>회원정보</span>
                            <span
                                onClick={() => {setShowMemberList(false); setShowFreeBoardList(true); setShowRelayBoardList(false); setShowBookList(false); getFreeBoardData(); setSearchId("");}}
                                className={`btn mt-1 text-lg leading-6 mx-3 ${showFreeBoardList ? 'text-blue-600' : 'text-gray-600'}`}>자유게시판</span>
                            <span
                                onClick={() => {setShowMemberList(false); setShowFreeBoardList(false); setShowRelayBoardList(true); setShowBookList(false); getRelayBoardData(); setSearchId("");}}
                                className={`btn mt-1 text-lg leading-6 mx-3 ${showRelayBoardList ? 'text-blue-600' : 'text-gray-600'}`}>릴레이 소설게시판</span>
                            <span
                                onClick={() => {setShowMemberList(false); setShowFreeBoardList(false); setShowRelayBoardList(false); setShowBookList(true); getBookRentData(); setSearchId("");}}
                                className={`btn mt-1 text-lg leading-6 mx-3 ${showBookList ? 'text-blue-600' : 'text-gray-600'}`}>도서 대여 이력</span>
                            <label className="float-right">
                                <input
                                    onChange={searchIdOnChangeHandler}
                                    className="border" style={{borderRadius: "4px"}} value={searchId}/>
                                <button
                                    onClick={searchBtn}
                                    className="ml-2 bg-blue-500 text-white w-14" style={{borderRadius:"4px"}}>검색</button>
                            </label>
                        </div>
                        <div
                            className="mt-10 gap-x-6 gap-y-8 sm:grid-cols-6 border-t border-gray-900/10 pt-12">
                                {/* 회원정보 리스트 */}
                                {showMemberList ? (
                                    <table class="table-auto w-full border-collapse border border-gray-800">
                                        <tr className="text-center">
                                            <td class="border border-gray-800 px-4 py-2">회원번호</td>
                                            <td class="border border-gray-800 px-4 py-2">아이디</td>
                                            <td class="border border-gray-800 px-4 py-2">이름</td>
                                            <td class="border border-gray-800 px-4 py-2">닉네임</td>
                                            <td class="border border-gray-800 px-4 py-2">멤버십</td>
                                            <td class="border border-gray-800 px-4 py-2">전화번호</td>
                                            <td class="border border-gray-800 px-4 py-2">회원상태 변경</td>
                                        </tr>
                                        {memberList && memberList.length > 0 ? (
                                            memberList.map((v,i)=>
                                                (
                                                    <tr key={i} className="text-center">
                                                        <td className="border border-gray-800 px-4 py-2">{v.memberNo}</td>
                                                        <td className="border border-gray-800 px-4 py-2">{v.memberId}</td>
                                                        <td className="border border-gray-800 px-4 py-2">{v.memberName}</td>
                                                        <td className="border border-gray-800 px-4 py-2">{v.memberNickname}</td>
                                                        <td className="border border-gray-800 px-4 py-2">{v.memberSub != 'N' ? (
                                                            <button
                                                                onClick={() => memberSubStatus(v.memberId,v.memberSub)}
                                                                className="text-blue-600">O</button>
                                                        ) : <button
                                                                onClick={() => memberSubStatus(v.memberId,v.memberSub)}
                                                                className="text-red">X</button>}
                                                        </td>
                                                        <td className="border border-gray-800 px-4 py-2">{formatPhoneNumber(v.memberTel)}</td>
                                                        <td className="border border-gray-800 px-4 py-2">{v.memberDelete == 'N' ? (
                                                            <button
                                                                onClick={()=> memberDeleteY(v.memberId)}
                                                                className="text-blue-600" type="button">
                                                                활성화</button>) : (
                                                            <button
                                                                onClick={() => memberDeleteN(v.memberId)}
                                                                className="text-red" type="button">정지</button>)}</td>
                                                    </tr>
                                                )
                                            )
                                        ) : null}
                                    </table>) : showFreeBoardList ? (
                                            // 자유게시판 리스트
                                            <table className="table-auto w-full border-collapse border border-gray-800">
                                                <tr className="text-center">
                                                    <td className="border border-gray-800 px-4 py-2">회원번호</td>
                                                    <td className="border border-gray-800 px-4 py-2">아이디</td>
                                                    <td className="border border-gray-800 px-4 py-2">이름</td>
                                                    <td className="border border-gray-800 px-4 py-2">닉네임</td>
                                                    <td className="border border-gray-800 px-4 py-2">멤버십 구독여부</td>
                                                    <td className="border border-gray-800 px-4 py-2">전화번호</td>
                                                    <td className="border border-gray-800 px-4 py-2">활성화</td>
                                                    <td className="border border-gray-800 px-4 py-2">회원상태 변경</td>
                                                </tr>
                                                {memberList && memberList.length > 0 ? (
                                                    memberList.map((v, i) =>
                                                        (
                                                            <tr key={i} className="text-center">
                                                                <td className="border border-gray-800 px-4 py-2">{v.memberNo}</td>
                                                                <td className="border border-gray-800 px-4 py-2">{v.memberId}</td>
                                                                <td className="border border-gray-800 px-4 py-2">{v.memberName}</td>
                                                                <td className="border border-gray-800 px-4 py-2">{v.memberNickname}</td>
                                                                <td className="border border-gray-800 px-4 py-2">{v.memberSub != 'N' ? "O" : "X"}</td>
                                                                <td className="border border-gray-800 px-4 py-2">{v.memberTel}</td>
                                                                <td className="border border-gray-800 px-4 py-2">{v.memberDelete == 'N' ? "Y" : "N"}</td>
                                                                <td className="border border-gray-800 px-4 py-2">{v.memberDelete == 'N' ? (
                                                                    <button className="text-red hover:bg-red-300" type="button">
                                                                        탈퇴</button>) : (
                                                                    <button className="text-red hover:bg-red-300" type="button">회원
                                                                        활성화</button>)}</td>
                                                            </tr>
                                                        )
                                                    )
                                                ) : null}
                                    </table>
                                    ) : showRelayBoardList ? (
                                    // 릴레이 소설게시판 리스트
                                    <table className="table-auto w-full border-collapse border border-gray-800">
                                        <tr className="text-center">
                                            <td className="border border-gray-800 px-4 py-2">회원번호</td>
                                            <td className="border border-gray-800 px-4 py-2">아이디</td>
                                            <td className="border border-gray-800 px-4 py-2">이름</td>
                                            <td className="border border-gray-800 px-4 py-2">닉네임</td>
                                            <td className="border border-gray-800 px-4 py-2">멤버십 구독여부</td>
                                            <td className="border border-gray-800 px-4 py-2">전화번호</td>
                                            <td className="border border-gray-800 px-4 py-2">활성화</td>
                                            <td className="border border-gray-800 px-4 py-2">회원상태 변경</td>
                                        </tr>
                                        {memberList && memberList.length > 0 ? (
                                            memberList.map((v, i) =>
                                                (
                                                    <tr key={i} className="text-center">
                                                        <td className="border border-gray-800 px-4 py-2">{v.memberNo}</td>
                                                        <td className="border border-gray-800 px-4 py-2">{v.memberId}</td>
                                                        <td className="border border-gray-800 px-4 py-2">{v.memberName}</td>
                                                        <td className="border border-gray-800 px-4 py-2">{v.memberNickname}</td>
                                                        <td className="border border-gray-800 px-4 py-2">{v.memberSub != 'N' ? "O" : "X"}</td>
                                                        <td className="border border-gray-800 px-4 py-2">{v.memberTel}</td>
                                                        <td className="border border-gray-800 px-4 py-2">{v.memberDelete == 'N' ? "Y" : "N"}</td>
                                                        <td className="border border-gray-800 px-4 py-2">{v.memberDelete == 'N' ? (
                                                            <button className="text-red" type="button">
                                                                탈퇴</button>) : (
                                                            <button className="text-red" type="button">회원
                                                                활성화</button>)}</td>
                                                    </tr>
                                                )
                                            )
                                        ) : null}
                                    </table>
                                    ) : showBookList ? (
                                    // 도서 대여 이력 리스트
                                    <table className="table-auto w-full border-collapse border border-gray-800">
                                        <tr className="text-center">
                                            <td className="border border-gray-800 px-4 py-2">도서 번호</td>
                                            <td className="border border-gray-800 px-4 py-2">도서명</td>
                                            <td className="border border-gray-800 px-4 py-2">대여일</td>
                                            <td className="border border-gray-800 px-4 py-2">반납예정일</td>
                                            <td className="border border-gray-800 px-4 py-2">실제 반납일</td>
                                            <td className="border border-gray-800 px-4 py-2">회원 아이디</td>
                                            <td className="border border-gray-800 px-4 py-2">연체여부</td>
                                        </tr>
                                        {/* 도서대여 이력이 한개이상 존재 할때나옴 */}
                                        {bookRentList && bookRentList.length > 0 ? (
                                            bookRentList.map((v, i) =>
                                                (
                                                    <tr key={i} className="text-center">
                                                        <td className="border border-gray-800 px-4 py-2">{v.bookNo}</td>
                                                        <td className="border border-gray-800 px-4 py-2">{v.bookName}</td>
                                                        <td className="border border-gray-800 px-4 py-2">{v.rentStart}</td>
                                                        <td className="border border-gray-800 px-4 py-2">{v.rentEnd}</td>
                                                        <td className="border border-gray-800 px-4 py-2">{v.rentReturn}</td>
                                                        <td className="border border-gray-800 px-4 py-2"><button className="text-blue-500 hover:bg-blue-100" onClick={()=> idClick(v.memberId)}>{v.memberId}</button></td>
                                                        <td className="border border-gray-800 px-4 py-2 text-red">{v.rentDelay == 'Y' ? 'Y' : null}</td>
                                                    </tr>
                                                )
                                            )
                                        ) : null}
                                    </table>
                                    ) : null}
                                    < /div>
                                </div>
                            </div>
                        </section>
                    </main>
                    )
                }