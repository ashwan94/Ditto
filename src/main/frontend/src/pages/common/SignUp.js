import {useEffect, useState} from "react";
import axios from "axios";

export default function Signup() {

    const [memberId, setMemberId] = useState("")
    const [memberName, setMemberName] = useState("")
    const [memberNickname, setMemberNickname] = useState("");
    const [memberPw, setMemberPw] = useState("");
    const [memberConfirmPw, setMemberConfirmPw] = useState("");
    const [memberBirth, setMemberBrith] = useState("");
    const [memberTel, setMemberTel] = useState("");
    const [memberAdd, setMemberAdd] = useState("")
    const [memberPostcode, setMemberPostcode] = useState("")
    const [memberDetailAdd, setMemberDetailAdd] = useState("")

    const [idErrorMessage, setIdErrorMessage] = useState("");
    const [nameErrorMessage, setNameErrorMessage] = useState("");
    const [nicknameErrorMessage, setNicknameErrorMessage] = useState("");
    const [pwErrorMessage, setPwErrorMessage] = useState("");
    const [pwConfirmErrorMessage, setPwConfirmErrorMessage] = useState("");
    const [birthErrorMessage, setBirthErrorMessage] = useState("");
    const [addressErrorMessage, setAddressErrorMessage] = useState("");
    const [duplicatedId, setDuplicatedId] = useState(true);
    const [duplicatedNickname, setDuplicatedNickname] = useState(true);

    // 아이디 핸들러
    const memberIdOnChangeHandler = (e) => {
        setMemberId(e.target.value);
    }

    // 이름 핸들러
    const memberNameOnChangeHandler = (e) => {
        setMemberName(e.target.value);
    }

    // 닉네임 핸들러
    const memberNicknameOnChangeHandler = (e) => {
        setMemberNickname(e.target.value);
    }

    // 비밀번호 핸들러
    const memberPwOnChangeHandler = (e) => {
        setMemberPw(e.target.value);
    }

    // 재확인비밀번호 핸들러
    const memberConfimPwOnChangeHandler = (e) => {
        setMemberConfirmPw(e.target.value);
    }

    // 생년월일 핸들러
    const memberBirthOnChangeHandler = (e) => {
        setMemberBrith(e.target.value);
    }

    // 전화번호 핸들러
    const memberTelOnChangeHandler = (e) => {
        setMemberTel(e.target.value);
    }


    // 우편번호 핸들러
    const memberPostcodeOnChangeHandler = (e) => {
        setMemberAdd(e.target.value);
    }


    // 주소 핸들러
    const memberAddOnChangeHandler = (e) => {
        setMemberPostcode(e.target.value);
    }

    // 상세주소 핸들러
    const memberDetailAddOnChangeHandler = (e) => {
        setMemberDetailAdd(e.target.value);
    }



    // 조건에 맞지 않을 경우 빈칸으로 돌려주기 위해서
    // 아이디 중복체크, 에러 문구
    const checkMemberIdDuplicate = async () => {
        // 사용자에게 8글자 이상의 아이디 입력받기
        if (memberId.length < 8) {
            setIdErrorMessage("최소 8글자 이상의 아이디로 설정해주세요.");
            return;
        }
        try {
            console.log("아이디: ", memberId)
            const res = await axios.post("/checkId", {
                memberId: memberId
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            // 아이디 중복 체크 확인
            if (res.data != 0) {
                //   중복
                setDuplicatedId(true);
                setIdErrorMessage("사용중인 아이디입니다.");

            } else {
                setDuplicatedId(false);
                setIdErrorMessage("");
            }

            console.log("DB 조회 결과 : ", res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    // 닉네임 중복 체크
    // 조건에 맞지 않을 경우 빈칸으로 돌려주기 위해서
    // 닉네임 중복 체크
    // 닉네임 중복체크, 에러 문구
    const checkMemberNicknameDuplicate = async () => {
        if (memberNickname.length < 2) {
            setNicknameErrorMessage("최소 2글자 이상의 닉네임으로 설정해주세요.");
            return;
        } else if (memberNickname == '관리자' || memberNickname == 'admin') {
            setNicknameErrorMessage("사용할 수 없는 키워드가 들어간 닉네임입니다.");
            return;
        }
        try {
            console.log("닉네임: ", memberNickname);
            const res = await axios.post("/checkNickname", null, {
                params: {
                    memberNickname: memberNickname
                }
            });
            // 닉네임 중복 체크 확인
            if (res.data != 0) {
                //   중복
                setDuplicatedNickname(true);
                setNicknameErrorMessage("사용중인 닉네임입니다.");


            } else {
                setDuplicatedNickname(false);
                setNicknameErrorMessage("");
            }

            console.log("DB 조회 결과 : ", res.data);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const koreanRegex = /^[가-힣]{2,}$/;
    // 이름, 비밀번호 글자 수 제한
    const checkSizeMemberName = () => {
        // 이름이 두글자 이하인 경우 경고 메세지 출력

        if (!koreanRegex.test(memberName)) {
            setNameErrorMessage("최소 두 글자 이상의 한글만 입력 가능합니다");
            // 조건에 부합한 경우 에러메세지 지우기
        } else {
            setNameErrorMessage("");
        }
    };


    // 비밀번호 정규식 특수문자 1개 포함, 숫자, 문자
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    const checkMemberPw = () => {
        // 이름이 두글자 이하인 경우 경고 메세지 출력
        // 비밀번호 정규식 부합하지 않은 경우 에러메세지 출력
        if (!passwordRegex.test(memberPw) || !memberPw) {
            setPwErrorMessage("최소 특수문자 1개 포함하여 8글자 이상의 비밀번호를 입력해주세요");
            // 오류 메시지 초기화
        } else {
            setPwErrorMessage("");
        }
    }

    // 비밀번호, 재확인 비밀번호 일치, 불일치 함수
    const checkPasswordConfirm = () => {
        if (memberPw !== memberConfirmPw) {
            setPwConfirmErrorMessage("입력한 비밀번호와 다릅니다.");
        } else {
            if(memberPw == ""){
            setPwConfirmErrorMessage("비밀번호를 입력해주세요.");

            }
        else if(memberPw != ""){
                setPwConfirmErrorMessage("");
            }
        }
    }

    const memberBirthOnBlur = () => {
        if (!memberBirth) {
            setBirthErrorMessage("생년월일을 입력해주세요.");
        } else {
            setBirthErrorMessage("");
        }
    };

    const memberDetailAddOnBlur = () => {
        if (!memberDetailAdd) {
            setAddressErrorMessage("상세주소를 입력해주세요.");
        } else {
            setAddressErrorMessage("");
        }
    };

    // 등록 버튼 클릭 시 모든 input 태그 검사 후
    // 경고 메세지 출력 or update 쿼리 쏘기
    const register = () => {
        // 에러 메세지 모두 출력
        if (duplicatedId) {
            setIdErrorMessage("아이디 중복체크 해주세요.");
        } else if (memberId === "") {
            setIdErrorMessage("최소 8글자 이상의 아이디로 설정해주세요.");
        }
        if (memberName === "") {
            setNameErrorMessage("이름을 입력해주세요.");
        }
        if (memberNickname === "") {
            setNicknameErrorMessage("닉네임을 입력해주세요.");
        }
        if (duplicatedNickname) {
            setNicknameErrorMessage("닉네임 중복체크 해주세요.");
        }
        if (memberPw === "") {
            setPwErrorMessage("비밀번호를 입력해주세요.");
        }
        if (memberConfirmPw === "") {
            setPwConfirmErrorMessage("입력한 비밀번호와 다릅니다..");
        }
        if (memberBirth === "") {
            setBirthErrorMessage("생년월일을 입력해주세요.");
        }
        if (memberDetailAdd === ""){
            setAddressErrorMessage("주소를 입력해주세요.")
        }

        // DB에 쿼리 쏴서 insert 하기


    };


    // 주소API 사용하여 우편번호,도로명 주소 자동 완성
    const handlePostcode = () => {
        new window.daum.Postcode({
            oncomplete: function (data) {
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                if (data.userSelectedType === 'R') {
                    addr = data.roadAddress;
                } else {
                    addr = data.jibunAddress;
                }

                if (data.userSelectedType === 'R') {
                    if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                        extraAddr += data.bname;
                    }
                    if (data.buildingName !== '' && data.apartment === 'Y') {
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    if (extraAddr !== '') {
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    document.getElementById("sample6_extraAddress").value = extraAddr;
                } else {
                    document.getElementById("sample6_extraAddress").value = '';
                }

                document.getElementById('sample6_postcode').value = data.zonecode;
                document.getElementById("sample6_address").value = addr;
                document.getElementById("sample6_detailAddress").focus();
                setMemberPostcode(data.zonecode);
                setMemberAdd(addr);
            }
        }).open();
    };



    // 값 변화 감지 확인용
    useEffect(() => {
        console.log(memberPostcode, memberAdd, memberDetailAdd )
    }, [memberPostcode, memberAdd, memberDetailAdd]);


    return (
        <main>
            <section className="i pg fh rm ki xn vq gj qp gr hj rp hr">
                <img src="images/shape-06.svg" alt="Shape" className="h j k"/>
                <img src="images/shape-03.svg" alt="Shape" className="h l m"/>
                <img src="images/shape-17.svg" alt="Shape" className="h n o"/>
                <img src="images/shape-18.svg" alt="Shape" className="h p q"/>

                <div className="animate_top bb af i va sg hh sm vk xm yi _n jp hi ao kp">
                    <span className="rc h r s zd/2 od zg gh"></span>
                    <span className="rc h r q zd/2 od xg mh"></span>

                    <div className="rj">
                        <h2 className="ek ck kk wm xb">Sign Up</h2>

                        <span className="i rc sj hk xj">
              <span className="rc h s z/2 nd oe rh tm"></span>
              <span className="rc h q z/2 nd oe rh tm"></span>
              한석줍쇼 계정 생성
            </span>
                    </div>

                    <div
                        className="sb"
                    >
                        <div className="wb">
                            <label className="rc kk wm vb" htmlFor="memberId">
                                아이디
                            </label>
                            <input
                                type="text"
                                name="memberId"
                                id="memberId"
                                value={memberId}
                                placeholder="hanseokku"
                                className="hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40 w-72"
                                maxLength="15"
                                onChange={memberIdOnChangeHandler}
                            />
                            <button className="bg-blue-500 rounded-xl ms-2 text-white h-12 w-28 font-bold"
                                    onClick={checkMemberIdDuplicate}>중복 확인
                            </button>
                            <p id="idErrorMessage" className="text-red"> {idErrorMessage}
                            </p>
                        </div>

                        <div className="wb">
                            <label className="rc kk wm vb" htmlFor="memberName">
                                이름
                            </label>
                            <input
                                type="text"
                                name="memberName"
                                id="memberName"
                                value={memberName}
                                placeholder="한석규"
                                className="vd hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40"
                                onChange={memberNameOnChangeHandler}
                                onBlur={checkSizeMemberName}
                            />
                            <p id="nameErrorMessage" className="text-red">{nameErrorMessage}</p>
                        </div>

                        <div className="wb">
                            <label className="rc kk wm vb" htmlFor="memberNickname">
                                닉네임
                            </label>
                            <input
                                type="text"
                                name="memberNickname"
                                id="memberNickname"
                                value={memberNickname}
                                placeholder="hanseokku"
                                maxLength="8"
                                className="hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40 w-72"
                                onChange={memberNicknameOnChangeHandler}
                            />
                            <button className="bg-blue-500 rounded-xl ms-2 text-white h-12 w-28 font-bold"
                                    onClick={checkMemberNicknameDuplicate}>중복 확인
                            </button>
                            <p id="nicknameErrorMessage" className="text-red">{nicknameErrorMessage}</p>
                        </div>

                        <div className="wb">
                            <label className="rc kk wm vb" htmlFor="memberPw">
                                비밀번호
                            </label>
                            <input
                                type="password"
                                name="memberPw"
                                id="memberPw"
                                value={memberPw}
                                placeholder="**********"
                                maxLength="15"
                                className="vd hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40"
                                onChange={memberPwOnChangeHandler}
                                onBlur={checkMemberPw}
                            />
                            <p id="pwErrorMessage" className="text-red">{pwErrorMessage}
                            </p>
                        </div>
                        <div className="wb">
                            <label className="rc kk wm vb" htmlFor="passwordConfirm">
                                비밀번호 확인
                            </label>
                            <input
                                type="password"
                                name="passwordConfirm"
                                id="passwordConfirm"
                                value={memberConfirmPw}
                                placeholder="**********"
                                className="vd hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40"
                                onChange={memberConfimPwOnChangeHandler}
                                onBlur={checkPasswordConfirm}
                            />
                            <p id="pwConfirmErrorMessage" className="text-red"> {pwConfirmErrorMessage}
                            </p>
                        </div>

                        <div className="wb">
                            <label className="rc kk wm vb" htmlFor="birth">
                                생년월일
                            </label>
                            <input
                                type="date"
                                name="bitrh"
                                id="birth"
                                value={memberBirth}
                                placeholder="2000.09.01"
                                className="vd hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40"
                                onChange={memberBirthOnChangeHandler}
                                onBlur={memberBirthOnBlur}
                            />
                            <p id="birthErrorMessage" className="text-red">  {birthErrorMessage}
                            </p>
                        </div>

                        <div className="wb">
                            <label className="rc kk wm vb" htmlFor="tel">
                                전화번호
                            </label>
                            <input
                                type="tel"
                                name="tel"
                                id="tel"
                                value={memberTel}
                                placeholder="010-8282-4989"
                                className="hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40 w-72"
                                onChange={memberTelOnChangeHandler}
                            />
                            <button className="bg-blue-500 rounded-xl ms-2 text-white h-12 w-28 font-bold">인증 요청
                            </button>
                        </div>

                        <div className="wb">
                            <label className="rc kk wm vb" htmlFor="addr">
                                주소
                            </label>
                            <input type="text" id="sample6_postcode" placeholder="우편번호"
                                   className="hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40 w-48"
                                   // value={memberPostcode}
                                   onChange={memberPostcodeOnChangeHandler}/>
                            <button className="bg-blue-500 rounded-xl ms-2 text-white h-12 w-28 font-bold"
                                    onClick={handlePostcode}>검색
                            </button>
                            <input type="text" id="sample6_address" placeholder="주소"
                                   className="hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40 w-full my-2"
                                    onChange={memberAddOnChangeHandler}/><br/>
                            <input type="text" id="sample6_detailAddress" placeholder="상세주소"
                                   className="hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40 w-48"
                                   value={memberDetailAdd}
                                   onChange={memberDetailAddOnChangeHandler}
                                   onBlur={memberDetailAddOnBlur}/>
                            <input type="text" id="sample6_extraAddress" placeholder="참고항목"
                                   className="hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40 w-48 mx-3"/>
                        </div>
                        <p id="addressErrorMessage" className="text-red">{addressErrorMessage}</p>
                        <button className="vd rj ek rc rg gh lk ml il _l gi hi mt-14" onClick={register}>
                            등록
                        </button>


                    </div>
                </div>
            </section>
        </main>
    );
}
