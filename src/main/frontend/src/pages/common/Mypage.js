import SignIn from "./SignIn";
import axios from "axios";
import {useCallback, useEffect, useState} from "react";

export default function Mypage() {

    /* 사용자에게 입력받을 useState 지정 필드 */
    const [memberView, setMemberView] = useState([]) // 회원정보 조회
    const [currentMemberPw, setCurrentMemberPw] = useState("") // 현재 패스워드
    const [changeMemberPw, setChangeMemberPw] = useState(""); // 수정할 패스워드
    const [memberNickname, setMemberNickname] = useState(""); // 회원 닉네임
    const [memberBirth, setMemberBrith] = useState(""); // 회원 생년월일
    const [memberAdd, setMemberAdd] = useState("") // 회원 도로명 주소
    const [memberPostcode, setMemberPostcode] = useState("") // 회원 우편번호
    const [memberDetailAdd, setMemberDetailAdd] = useState("") // 회원 상세주소
    const [showBook, setShowBook] = useState(false); // 도서 대여 내역 on/off
    const [showBookRentalList, setShowBookRentalList] = useState([]) // 도서대여 내역 리스트
    const [bookNo, setBookNo] = useState(0); // 책 번호

    /* 에러 메세지 */
    const [currentPwErrorMessage, setCurrentPwErrorMessage] = useState(""); // 현재 패스워드 에러 메세지
    const [pwErrorMessage, setPwErrorMessage] = useState(""); // 패스워드 에러 메세지
    const [nicknameErrorMessage, setNicknameErrorMessage] = useState(""); // 닉네임 에러 메세지
    const [duplicatedNickname, setDuplicatedNickname] = useState(true); // 닉네임 중복 에러 메세지
    //현재 비밀번호 입력값 핸들러
    const currentPasswordOnChangeHandler = useCallback((e) => {
        setCurrentMemberPw(e.target.value);
    },[])

    // 비밀번호 수정 핸들러
    const passwordOnChangeHandler = useCallback((e) => {
        setChangeMemberPw(e.target.value);
    },[])

    // 닉네임 핸들러
    const memberNicknameOnChangeHandler = useCallback((e) => {
        setMemberNickname(e.target.value);
    },[])

    // 생년월일 핸들러
    const memberBirthOnChangeHandler = useCallback((e) => {
        setMemberBrith(e.target.value);
    },[])

    // 우편번호 핸들러
    const memberPostcodeOnChangeHandler = useCallback((e) => {
        setMemberPostcode(e.target.value);
    },[])

    // 주소 핸들러
    const memberAddOnChangeHandler = useCallback((e) => {
        setMemberAdd(e.target.value);
    },[])

    // 상세주소 핸들러
    const memberDetailAddOnChangeHandler = useCallback((e) => {
        setMemberDetailAdd(e.target.value);
    },[])

    const memberData = sessionStorage.getItem("member");
    const memberObj = JSON.parse(memberData); // 문자열을 JSON 객체로 변환


    // 로그인한 유저의 정보 가져오기
    const getData = async () => {
        const postData = {
            memberId: memberObj.memberId
        }

        try {
            const res = await axios.post("/searchMemberInfo", postData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            console.log(res.data)
            setMemberView(res.data)
            setMemberNickname(res.data.memberNickname)
            setMemberPostcode(res.data.memberPostcode)
            setMemberAdd(res.data.memberAdd)
            setMemberDetailAdd(res.data.memberDetailAdd)
            setMemberBrith(res.data.memberBirth)

        } catch (error) {
            console.error("Error fetching data:", error);
        }

    };

    // 책 정보 가져오기
    const getBookData = async () => {

        const bookData = {
            memberId: memberObj.memberId
        }

        try {
            const resData = await axios.post("/showBookRentalList",bookData,{
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setShowBookRentalList(resData.data)
            console.log(resData.data)
        }catch (error){
            console.error("Error fetching data:", error);
        }
    };

    // 페이지 첫 랜더링 시 가져오기
    useEffect(() => {
        getData()
        getBookData()
    }, []);

    // showBookRentalList 상태가 변경될 때마다 로그 출력
    useEffect(() => {
        console.log(showBookRentalList);
    }, [showBookRentalList]);

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

    // 수정할 패스워드 정규식 검사 및 에러 메세지 출력 함수
    const checkMemberPw = () => {
        // 이름이 두글자 이하인 경우 경고 메세지 출력
        // 비밀번호 정규식 부합하지 않은 경우 에러메세지 출력
        if(changeMemberPw != ""){
            if (!passwordRegex.test(changeMemberPw) || !changeMemberPw) {
                setPwErrorMessage("최소 특수문자 1개 포함하여 8글자 이상의 비밀번호를 입력해주세요");
                // 오류 메시지 초기화
            } else {
                setPwErrorMessage("");
            }
        }
    }

    // 현재 비밀번호 체크
    const checkCurrentMemberPw = () => {
        // 이름이 두글자 이하인 경우 경고 메세지 출력
        // 비밀번호 정규식 부합하지 않은 경우 에러메세지 출력
        if (currentMemberPw != ""){
            if (currentMemberPw != memberView.memberPw) {
                setCurrentPwErrorMessage("비밀번호가 일치하지 않습니다.");
                // 오류 메시지 초기화
            } else {
                setCurrentPwErrorMessage("");
            }
        }
    }

    // 비밀번호 수정
    const passwordChange = async () => {
        if (memberNickname.length < 2) {
            setNicknameErrorMessage("최소 2글자 이상의 닉네임으로 설정해주세요.");
            return;
        } else if (memberNickname == '관리자' || memberNickname == 'admin') {
            setNicknameErrorMessage("사용할 수 없는 키워드가 들어간 닉네임입니다.");
            return;
        }
        if (currentMemberPw == memberView.memberPw && changeMemberPw != "" && pwErrorMessage == ""){
            const passChange = {
                memberId : memberView.memberId,
                memberPw : changeMemberPw
            }
            try {
                const res = await axios.post("/passwordChange", passChange, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                setCurrentMemberPw("");
                setChangeMemberPw("");
                alert("비밀번호가 수정되었습니다.")
                getData();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    }

    // 주소API 사용하여 우편번호,도로명 주소 자동 완성
    const handlePostcode = () => {
        new window.daum.Postcode({
            oncomplete: function (data) {
                var addr = ''; // 주소 변수
                // var extraAddr = ''; // 참고항목 변수

                if (data.userSelectedType === 'R') {
                    addr = data.roadAddress;
                } else {
                    addr = data.jibunAddress;
                }

                document.getElementById('memberPostcode').value = data.zonecode;
                document.getElementById("memberAdd").value = addr;
                document.getElementById("memberDetailAdd").focus();
                setMemberPostcode(data.zonecode);
                setMemberAdd(addr);
                setMemberDetailAdd("")
            }
        }).open();
    };

    // 회원정보 수정
    const saveMemberData = async () => {
        if (memberNickname.length < 2) {
            alert("최소 2글자 이상의 닉네임으로 설정해주세요.")
            return;
        } else if (memberNickname == '관리자' || memberNickname == 'admin') {
            alert("사용할 수 없는 키워드가 들어간 닉네임입니다.")
            return;
        }
        if (duplicatedNickname){
            alert("사용할수없는 닉네임 입니다 닉네임을 수정해주세요.")
            return
        }
        const memberData =  {
            memberId : memberView.memberId,
            memberNickname : memberNickname,
            memberPostcode : memberPostcode,
            memberAdd : memberAdd,
            memberDetailAdd : memberDetailAdd,
            memberBirth : memberBirth
        }
        try {
            await axios.put("/changeMemberData", memberData,{
                headers: {
                    "Content-Type": "application/json"
                }
            });
            alert("회원정보가 수정되었습니다.")
            getData();
        }catch (error){
            console.error("회원수정 에러야! => ",error)
        }
    }

    // 닉네임 중복체크
    const nicknameDupCheck = async () => {

        if (memberNickname.length < 2) {
            setNicknameErrorMessage("최소 2글자 이상의 닉네임으로 설정해주세요.");
            return;
        } else if (memberNickname == '관리자' || memberNickname == 'admin') {
            setNicknameErrorMessage("사용할 수 없는 키워드가 들어간 닉네임입니다.");
            return;
        }

        try {
            const res = await axios.post("/checkNick",  {
                    memberNickname : memberNickname
            });

            if (memberNickname != memberView.memberNickname){
                // 닉네임 중복 체크 확인
                if (res.data != 0) {
                    //   중복
                    setDuplicatedNickname(true);
                    setNicknameErrorMessage("사용중인 닉네임입니다.");
                    return
                } else {
                    setDuplicatedNickname(false);
                    setNicknameErrorMessage("");
                }
            }
            setDuplicatedNickname(false);
        } catch (error) {
            console.error("닉네임 에러야! ", error);
        }

    }

    // 도서 반납
    const bookRentReturn = async () => {

        const rentData = {
            bookNo: bookNo
        }

        try {
            await axios.post("/rentReturn",rentData,{
                headers: {
                    "Content-Type": "application/json"
                }
            })

            getBookData();
        }catch (error){
            console.error("Error fetching data:", error);
        }
    }

    useEffect(()=>{
        bookRentReturn()
    },[bookNo])

    return (
        <main className="rundry">
            <section className="i pg fh rm ki xn vq gj qp gr hj rp hr ">
                <div className="bb ze ki xn 2xl:ud-px-0">
                    <div className="border-b border-gray-900/10 pb-12">

                        <h2 className="text-xl font-semibold leading-7 text-gray-900 rundry">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            {memberView.memberNickname}님
                            환영합니다.
                        </h2>
                        <div className="py-5">
                            <span onClick={() => setShowBook(false)} className="btn mt-1 text-lg leading-6 text-gray-600">내 정보 보기</span>
                            <span onClick={() => setShowBook(true)} className="btn mt-1 text-lg leading-6 text-gray-600 mx-3">도서 대출 이력 보기</span>
                        </div>
                        {showBook ? (
                        <div
                            className="mt-10 gap-x-6 gap-y-8 sm:grid-cols-6 border-t border-gray-900/10 pt-12">
                            <table class="table-auto w-full border-collapse border border-gray-800">
                                <tr className="text-center">
                                    <td class="border border-gray-800 px-4 py-2">도서 번호</td>
                                    <td class="border border-gray-800 px-4 py-2">도서명</td>
                                    <td class="border border-gray-800 px-4 py-2">대여일</td>
                                    <td class="border border-gray-800 px-4 py-2">반납예정일</td>
                                    <td class="border border-gray-800 px-4 py-2">실제 반납일</td>
                                    <td class="border border-gray-800 px-4 py-2">연체여부</td>
                                    <td class="border border-gray-800 px-4 py-2">반납여부</td>
                                </tr>
                                {showBookRentalList && showBookRentalList.length > 0 ? (
                                    showBookRentalList.map((v,i)=>
                                        (
                                            <tr key={i} className="text-center">
                                                <td className="border border-gray-800 px-4 py-2">{v.bookNo}</td>
                                                <td className="border border-gray-800 px-4 py-2">{v.bookName}</td>
                                                <td className="border border-gray-800 px-4 py-2">{v.rentStart}</td>
                                                <td className="border border-gray-800 px-4 py-2">{v.rentEnd}</td>
                                                <td className="border border-gray-800 px-4 py-2">{v.rentReturn}</td>
                                                <td className="border border-gray-800 px-4 py-2">{v.rentDelay}</td>
                                                <td className="border border-gray-800 px-4 py-2">{v.bookRent == 'Y' ? (<button type={"button"} onClick={() => setBookNo(v.bookNo)
                                                } className="text-red">반납하기</button>) : (<span className="text-blue-500">반납완료</span>)}</td>
                                            </tr>
                                        )
                                    )
                                ) : null}
                            </table>
                        </div>
                        ) : (
                            <>
                                <div
                                    className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border-t border-gray-900/10 pt-12">

                                    <div className="sm:col-span-2 border-gray-900/10">
                                        <label htmlFor="memberName"
                                               className="block text-lg font-medium leading-6 text-gray-900">
                                            이름
                                        </label>
                                    <div className="mt-2">
                                        <input
                                            readOnly={true}
                                            type="text"
                                            name="memberName"
                                            value={memberView.memberName}
                                            id="memberName"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="memberNickname"
                                           className="block text-lg font-medium leading-6 text-gray-900">
                                        닉네임
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="memberNickname"
                                            onChange={memberNicknameOnChangeHandler}
                                            onBlur={nicknameDupCheck}
                                            value={memberNickname}
                                            id="memberNickname"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                                        />
                                    </div>
                                    <p id="nicknameErrorMessage" className="text-red">{nicknameErrorMessage}</p>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="memberId"
                                           className="block text-lg font-medium leading-6 text-gray-900">
                                        아이디
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            readOnly={true}
                                            type="text"
                                            name="memberId"
                                            id="memberId"
                                            value={memberView.memberId}
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                                        />
                                    </div>
                                </div>


                                <div className="sm:col-span-2">
                                    <label htmlFor="memberPw"
                                           className="block text-lg font-medium leading-6 text-gray-900">
                                        현재 비밀번호
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="memberPw"
                                            name="memberPw"
                                            type="password"
                                            onChange={currentPasswordOnChangeHandler}
                                            onBlur={checkCurrentMemberPw}
                                            value={currentMemberPw}
                                            autoComplete="memberPw"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                                        />
                                        <p id="pwErrorMessage" className="text-red">{currentPwErrorMessage}</p>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="memberNewPw"
                                           className="block text-lg font-medium leading-6 text-gray-900">
                                        새로운 비밀번호
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="memberNewPw"
                                            name="memberNewPw"
                                            type="password"
                                            autoComplete="memberNewPw"
                                            onChange={passwordOnChangeHandler}
                                            value={changeMemberPw}
                                            onBlur={checkMemberPw}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                                        />
                                        <p id="pwErrorMessage" className="text-red">{pwErrorMessage}</p>
                                    </div>
                                </div>

                                <div className="sm:col-span-2 mt-8 text-xl">
                                    <button
                                        onClick={passwordChange}
                                        // className="rounded-md bg-blue-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        className="btn btn-dark"
                                    >
                                        비밀번호 수정
                                    </button>
                                </div>


                                <div className="sm:col-span-2">
                                    <label htmlFor="memberTel"
                                           className="block text-lg font-medium leading-6 text-gray-900">
                                        전화번호
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            readOnly={true}
                                            id="memberTel"
                                            name="memberTel"
                                            value={memberView.memberTel}
                                            type="text"
                                            autoComplete="memberTel"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="memberPostcode"
                                           className="block text-lg font-medium leading-6 text-gray-900">
                                        우편번호
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            readOnly={true}
                                            type="text"
                                            name="memberPostcode"
                                            id="memberPostcode"
                                            onChange={memberPostcodeOnChangeHandler}
                                            value={memberPostcode}
                                            autoComplete="memberPostcode"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                                        />
                                    </div>
                                </div>


                                <div className="sm:col-span-2">
                                    <label htmlFor="memberAdd"
                                           className="block text-lg font-medium leading-6 text-gray-900">
                                        도로명 주소
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            readOnly={true}
                                            type="text"
                                            name="memberAdd"
                                            id="memberAdd"
                                            onChange={memberAddOnChangeHandler}
                                            value={memberAdd}
                                            autoComplete="memberAdd"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-1">
                                    <label htmlFor="memberDetailAdd"
                                           className="block text-lg font-medium leading-6 text-gray-900">
                                        상세주소
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="memberDetailAdd"
                                            value={memberDetailAdd}
                                            id="memberDetailAdd"
                                            onChange={memberDetailAddOnChangeHandler}
                                            autoComplete="memberDetailAdd"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-1">
                                    <div className="mt-2">
                                        <button
                                            onClick={handlePostcode}
                                            className="mt-5 bg-blue-500 rounded-xl ms-2 text-white h-12 w-28 font-bold"
                                        >검색
                                        </button>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="memberSub"
                                           className="block text-lg font-medium leading-6 text-gray-900">
                                        멤버십 구독 여부
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            readOnly={true}
                                            type="text"
                                            name="memberSub"
                                            id="memberSub"
                                            value={memberView.memberSub}
                                            autoComplete="memberSub"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="memberBirth"
                                           className="block text-lg font-medium leading-6 text-gray-900">
                                        생년월일
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="date"
                                            name="memberBirth"
                                            id="memberBirth"
                                            value={memberBirth}
                                            onChange={memberBirthOnChangeHandler}
                                            autoComplete="memberBirth"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                                        />
                                    </div>
                                </div>


                                <div className="sm:col-span-2">
                                    <label htmlFor="memberCard"
                                           className="block text-lg font-medium leading-6 text-gray-900">
                                        결제카드
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="memberCard"
                                            id="memberCard"
                                            autoComplete="memberCard"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </>)}
                    </div>
                    {!showBook ?
                        (<div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-lg font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            onClick={saveMemberData}
                            className="btn btn-dark"
                            // className="rounded-md bg-blue-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                        Save
                        </button>
                    </div>) :null}
                </div>
            </section>
        </main>
    )
}
