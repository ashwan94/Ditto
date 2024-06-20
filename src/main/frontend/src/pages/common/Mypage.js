import SignIn from "./SignIn";
import axios from "axios";
import {useCallback, useEffect, useState} from "react";

export default function Mypage() {

    const [memberView, setMemberView] = useState([])
    const [currentMemberPw, setCurrentMemberPw] = useState("") // 현재 패스워드
    const [changeMemberPw, setChangeMemberPw] = useState(""); // 수정할 패스워드
    const [currentPwErrorMessage, setCurrentPwErrorMessage] = useState(""); // 현재 패스워드 에러 메세지
    const [pwErrorMessage, setPwErrorMessage] = useState(""); // 패스워드 에러 메세지

    const currentPasswordOnChangeHandler = useCallback((e) => {
        setCurrentMemberPw(e.target.value); //현재 비밀번호 입력값 핸들러
    },[])

    const passwordOnChangeHandler = useCallback((e) => {
        setChangeMemberPw(e.target.value); // 수정할 비밀번호 입력값 핸들러
    },[])

    const memberData = sessionStorage.getItem("member");
    const memberObj = JSON.parse(memberData); // 문자열을 JSON 객체로 변환
    const memberNickname = memberObj.memberNickname; // memberNickname 속성 추출
    const memberId = memberObj.memberId;
    // console.log(memberNickname, memberId); // "용문동핵주먹" 출력


    // 로그인한 유저의 정보 가져오기
    const getData = async () => {
        const postData = {
            memberId: memberObj.memberId
        }

        console.log("postData", postData)

        try {
            const res = await axios.post("/searchMemberInfo", postData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setMemberView(res.data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // 페이지 첫 랜더링 시 가져오기
    useEffect(() => {
        getData()
    }, []);

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

    // 수정할 패스워드 정규식 검사 및 에러 메세지 출력 함수
    const checkMemberPw = () => {
        // 이름이 두글자 이하인 경우 경고 메세지 출력
        // 비밀번호 정규식 부합하지 않은 경우 에러메세지 출력
        if (!passwordRegex.test(changeMemberPw) || !changeMemberPw) {
            setPwErrorMessage("최소 특수문자 1개 포함하여 8글자 이상의 비밀번호를 입력해주세요");
            // 오류 메시지 초기화
        } else {
            setPwErrorMessage("");
        }
    }

    // 현재 비밀번호 체크
    const checkCurrentMemberPw = () => {
        // 이름이 두글자 이하인 경우 경고 메세지 출력
        // 비밀번호 정규식 부합하지 않은 경우 에러메세지 출력
        if (currentMemberPw != memberView.memberPw) {
            setCurrentPwErrorMessage("비밀번호가 일치하지 않습니다.");
            // 오류 메시지 초기화
        } else {
            setCurrentPwErrorMessage("");
        }
    }

    // 비밀번호 수정
    const passwordChange = async () => {
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
                            <span className="mt-1 text-lg leading-6 text-gray-600">내 정보 보기</span>
                            <span className="mt-1 text-lg leading-6 text-gray-600 mx-3">도서 대출 이력 보기</span>
                        </div>
                        <div
                            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border-t border-gray-900/10 pt-12">

                            <div className="sm:col-span-2 border-gray-900/10">
                                <label htmlFor="memberName"
                                       className="block text-lg font-medium leading-6 text-gray-900">
                                    이름
                                </label>
                                <div className="mt-2">
                                    <input
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
                                        value={memberView.memberNickname}
                                        id="memberNickname"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="memberId"
                                       className="block text-lg font-medium leading-6 text-gray-900">
                                    아이디
                                </label>
                                <div className="mt-2">
                                    <input
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
                                        type="text"
                                        name="memberPostcode"
                                        id="memberPostcode"
                                        value={memberView.memberPostcode}
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
                                        type="text"
                                        name="memberAdd"
                                        id="memberAdd"
                                        value={memberView.memberAdd}
                                        autoComplete="memberAdd"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="memberDetailAdd"
                                       className="block text-lg font-medium leading-6 text-gray-900">
                                    상세주소
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="memberDetailAdd"
                                        value={memberView.memberDetailAdd}
                                        id="memberDetailAdd"
                                        autoComplete="memberDetailAdd"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="memberSub"
                                       className="block text-lg font-medium leading-6 text-gray-900">
                                    멤버십 구독 여부
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="memberSub"
                                        id="memberSub"
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
                                        type="text"
                                        name="memberBirth"
                                        id="memberBirth"
                                        value={memberView.memberBirth}
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
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-lg font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-dark"
                            // className="rounded-md bg-blue-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            Save
                        </button>
                    </div>
                </div>

            </section>
        </main>
    )
}
