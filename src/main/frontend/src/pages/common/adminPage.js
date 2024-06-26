import axios from "axios";
import {useCallback, useEffect, useState} from "react";

export default function AdminPage(){

    const [memberList, setMemberList] = useState([]) // 회원 정보 리스트
    const [freeBoardList, setFreeBoardList] = useState([])// 자유게시판 리스트
    const [relayBoardList, setRelayBoardList] = useState([]) // 릴레이 소설게시판 리스트
    const [bookRentList, setBookRentList] = useState([]) // 도서 대여 이력 리스트
    const [podcastList, setPodcastList] = useState([]) // 팟캐스트 리스트
    const [showMemberList, setShowMemberList] = useState(false) // 회원 정보 화면표시
    const [showFreeBoardList, setShowFreeBoardList] = useState(false) // 자유게시판 화면표시
    const [showRelayBoardList, setShowRelayBoardList] = useState(false) // 릴레이 소설 게시판 화면표시
    const [showBookList, setShowBookList] = useState(false) // 도서 대여 이력 화면표시
    const [showPodcastList, setShowPodcastList] = useState(false) // 팟캐스트 화면표시
    const [searchType, setSearchType] = useState("아이디") // 회원 정보 검색타입
    const [searchWord, setSearchWord] = useState("") // 회원 정보 검색키워드
    const [memberSubChangeData, setMemberSubChangeData] = useState("Y") // 멤버십 상태 변경용
    const [memberDelete, setMemberDelete] = useState("Y") // 회원 활동 상태 변경용

    // TODO 날짜 검색 타입클릭시 자동으로 날짜선택 열리도록 할수있나 알아보기

    const searchTypeOnChangeHandler = useCallback((e) => {
        setSearchType(e.target.value)
        if (searchType == "아이디" || searchType == "도서명"){
            setSearchWord("")
        }
    },[])

    const searchWordOnChangeHandler = useCallback((e) => {
        setSearchWord(e.target.value)
    },[])

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
        console.log(searchWord)
        if(searchWord != ""){
            if(showMemberList){
                searchMemberList()
            }else if (showFreeBoardList){
                searchFreeBoardList()
            }else if (showRelayBoardList){
                searchRelayBoardList()
            }else if (showBookList){
                searchBookList()
            }else if (showPodcastList){
                searchPodcastList()
            }
            return;
        }
        getMemberData();
        getFreeBoardData();
        getRelayBoardData();
        getBookRentData();
        searchPodcastList();
    }

    // 회원정보 검색요청
    const searchMemberList = async () => {
        try {
            const res = await axios.post("/adminMemberListSearch",{
                searchType: searchType,
                searchWord : searchWord
            },{
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setMemberList(res.data)

        } catch (error) {
            console.error("도서 대여 이력조회 에러", error);
        }
    }

    // 자유게시판 검색요청
    const searchFreeBoardList = async () => {
        try {
            const res = await axios.post("/adminFreeBoardListSearch",{
                searchType: searchType,
                searchWord : searchWord
            },{
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setFreeBoardList(res.data)

        } catch (error) {
            console.error("도서 대여 이력조회 에러", error);
        }
    }

    // 릴레이 소설게시판 검색요청
    const searchRelayBoardList = async () => {
        try {
            const res = await axios.post("/adminRelayBoardListSearch",{
                searchType: searchType,
                searchWord : searchWord
            },{
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setRelayBoardList(res.data)

        } catch (error) {
            console.error("도서 대여 이력조회 에러", error);
        }
    }

    // 도서 대여 이력 검색요청
    const searchBookList = async () => {
        try {
            const res = await axios.post("/adminBookListSearch",{
                searchType: searchType,
                searchWord : searchWord
            },{
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setBookRentList(res.data)

        } catch (error) {
            console.error("도서 대여 이력조회 에러", error);
        }
    }

    // 팟캐스트 검색요청
    const searchPodcastList = async () => {
        try {
            const res = await axios.post("/adminPodcastListSearch",{
                searchType: searchType,
                searchWord : searchWord
            },{
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setPodcastList(res.data)

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
        searchBtn()
    }

    // 도서목록에서 회원 아이디 클릭시 해당 회원 번호 검색
    const idClick = async (memId) => {
        try {
            const res = await axios.post("/idClickSearch",{
                memberId : memId
            });
            setShowBookList(false)
            setShowMemberList(true)
            setSearchWord(memId)
            setMemberList(res.data)
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

    // 연체여부 클릭시 딜레이상태 'Y' 'N'인것들만 보임
    const rentDelaySearch = async () => {
        try {
            const res = await axios.post("/rentDelaySearch");
            setBookRentList(res.data)
        } catch (error) {
            console.error("도서 대여 이력조회 에러", error);
        }
    }

    // 멤버십 클릭시 각각 X 또는 O 인것만 조회
    const memberSubChange = async () => {
        if (memberSubChangeData == "Y"){
            setMemberSubChangeData("N")
        }else {
            setMemberSubChangeData("Y")
        }
        try {
            const res = await axios.post("/memberSubChangeOX",{
                memberSub: memberSubChangeData
            },{
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setMemberList(res.data)
        } catch (error){
            console.log("멤버십 O X 조회 에러", error)
        }
    }

    // 회원 상태변경 클릭시 활성화 또는 정지 인것만 조회
    const memberStatusChange = async () => {
        if (memberDelete == "N"){
            setMemberDelete("Y")
        }else {
            setMemberDelete("N")
        }
        try {
            const res = await axios.post("/memberStatusChangeOX", {
                memberDelete: memberDelete
            },{
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setMemberList(res.data)
        }catch (error){
            console.log("멤버 상태 정렬조회 에러",error)
        }
    }

    return (
        <main className="rundry">
            <section className="i pg fh rm ki xn vq gj qp gr hj rp hr ">
                <div className="bb ze ki xn 2xl:ud-px-0">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div>
                            <span
                                onClick={() => {
                                    setShowMemberList(true);
                                    setShowFreeBoardList(false);
                                    setShowRelayBoardList(false);
                                    setShowBookList(false);
                                    setShowPodcastList(false);
                                    getMemberData();
                                    setSearchWord("");
                                    setSearchType("아이디");
                                }}
                                className={`btn mt-1 text-lg leading-6 mx-3 ${showMemberList ? 'text-blue-600' : 'text-gray-600'}`}>회원정보</span>
                            <span
                                onClick={() => {
                                    setShowMemberList(false);
                                    setShowFreeBoardList(true);
                                    setShowRelayBoardList(false);
                                    setShowBookList(false);
                                    setShowPodcastList(false);
                                    getFreeBoardData();
                                    setSearchWord("");
                                    setSearchType("아이디");
                                }}
                                className={`btn mt-1 text-lg leading-6 mx-3 ${showFreeBoardList ? 'text-blue-600' : 'text-gray-600'}`}>자유게시판</span>
                            <span
                                onClick={() => {
                                    setShowMemberList(false);
                                    setShowFreeBoardList(false);
                                    setShowRelayBoardList(true);
                                    setShowBookList(false);
                                    setShowPodcastList(false);
                                    getRelayBoardData();
                                    setSearchWord("");
                                    setSearchType("아이디");
                                }}
                                className={`btn mt-1 text-lg leading-6 mx-3 ${showRelayBoardList ? 'text-blue-600' : 'text-gray-600'}`}>릴레이 소설게시판</span>
                            <span
                                onClick={() => {
                                    setShowMemberList(false);
                                    setShowFreeBoardList(false);
                                    setShowRelayBoardList(false);
                                    setShowBookList(true);
                                    setShowPodcastList(false);
                                    getBookRentData();
                                    setSearchWord("");
                                    setSearchType("아이디");
                                }}
                                className={`btn mt-1 text-lg leading-6 mx-3 ${showBookList ? 'text-blue-600' : 'text-gray-600'}`}>도서 대여 이력</span>
                            <span
                                onClick={() => {
                                    setShowMemberList(false);
                                    setShowFreeBoardList(false);
                                    setShowRelayBoardList(false);
                                    setShowBookList(false);
                                    setShowPodcastList(true);
                                    // getPodcastData();
                                    setSearchWord("");
                                    setSearchType("아이디");
                                }}
                                className={`btn mt-1 text-lg leading-6 mx-3 ${showPodcastList ? 'text-blue-600' : 'text-gray-600'}`}>팟캐스트</span>
                            {showMemberList ? (
                            <label className="float-right">
                                <select onChange={searchTypeOnChangeHandler}>
                                    <option value="아이디">아이디</option>
                                </select>
                                <input
                                    type="text"
                                    onChange={searchWordOnChangeHandler}
                                    className="border" style={{borderRadius: "4px"}} value={searchWord}/>
                                <button
                                    onClick={searchBtn}
                                    className="ml-2 bg-blue-500 text-white w-14" style={{borderRadius: "4px"}}>검색
                                </button>
                            </label>) : showFreeBoardList ? (
                                <label className="float-right">
                                    <select onChange={searchTypeOnChangeHandler}>
                                        <option value="아이디">아이디</option>
                                        <option value="제목">제목</option>
                                    </select>
                                    <input
                                        type="text"
                                        onChange={searchWordOnChangeHandler}
                                        className="border" style={{borderRadius: "4px"}} value={searchWord}/>
                                    <button
                                        onClick={searchBtn}
                                        className="ml-2 bg-blue-500 text-white w-14" style={{borderRadius: "4px"}}>검색
                                    </button>
                                </label>) : showRelayBoardList ? (
                                <label className="float-right">
                                    <select onChange={searchTypeOnChangeHandler}>
                                        <option value="아이디">아이디</option>
                                        <option value="제목">제목</option>
                                    </select>
                                    <input
                                        type="text"
                                        onChange={searchWordOnChangeHandler}
                                        className="border" style={{borderRadius: "4px"}} value={searchWord}/>
                                    <button
                                        onClick={searchBtn}
                                        className="ml-2 bg-blue-500 text-white w-14" style={{borderRadius: "4px"}}>검색
                                    </button>
                                </label>) : showBookList ? (
                                <label className="float-right">
                                    <select onChange={searchTypeOnChangeHandler}>
                                        <option value="아이디">아이디</option>
                                        <option value="도서명">도서명</option>
                                        <option value="대여일">대여일</option>
                                        <option value="반납예정일">반납예정일</option>
                                        <option value="실제반납일">실제반납일</option>
                                    </select>
                                    {searchType == "아이디" || searchType == "도서명"? (
                                        <input
                                            type="text"
                                            onChange={searchWordOnChangeHandler}
                                            className="border" style={{borderRadius: "4px"}} value={searchWord}/>
                                    ) : (
                                        <input
                                            type="date"
                                            onChange={searchWordOnChangeHandler}
                                            className="border" style={{borderRadius: "4px"}} value={searchWord}/>
                                    )}
                                    <button
                                        onClick={searchBtn}
                                        className="ml-2 bg-blue-500 text-white w-14" style={{borderRadius: "4px"}}>검색
                                    </button>
                                </label>) : showPodcastList ? (
                                <label className="float-right">
                                    <select onChange={searchTypeOnChangeHandler}>
                                        <option value="생성일">생성일</option>
                                        <option value="수정일">수정일</option>
                                    </select>
                                    <input
                                        type="text"
                                        onChange={searchWordOnChangeHandler}
                                        className="border" style={{borderRadius: "4px"}} value={searchWord}/>
                                    <button
                                        onClick={searchBtn}
                                        className="ml-2 bg-blue-500 text-white w-14" style={{borderRadius: "4px"}}>검색
                                    </button>
                                </label>
                            ) : null}
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
                                        <td class="border border-gray-800 px-4 py-2 text-purple-700"><button onClick={memberSubChange}>멤버십</button></td>
                                        <td class="border border-gray-800 px-4 py-2">전화번호</td>
                                        <td class="border border-gray-800 px-4 py-2 text-purple-700"><button onClick={memberStatusChange}>회원상태</button></td>
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
                                                                className="text-blue-600">구독중</button>
                                                        ) : <button
                                                                onClick={() => memberSubStatus(v.memberId,v.memberSub)}
                                                                className="text-red">미가입</button>}
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
                                        ) : (<td className="text-red text-center" colSpan="7">검색된 정보가 없습니다.</td>)}
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
                                                ) : (<td className="text-red text-center" colSpan="7">검색된 정보가 없습니다.</td>)}
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
                                        ) : (<td className="text-red text-center" colSpan="7">검색된 정보가 없습니다.</td>)}
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
                                            <td
                                                className="border border-gray-800 px-4 py-2 text-purple-700">
                                                <button onClick={rentDelaySearch}>연체여부</button></td>
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
                                        ) : (<td className="text-red text-center" colSpan="7">검색된 정보가 없습니다.</td>)}
                                    </table>
                                    ) : null}
                                    < /div>
                                </div>
                            </div>
                        </section>
                    </main>
                    )
                }