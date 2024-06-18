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
  const [memberAdd, setMemberAdd] = useState("");



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

  // 주소 핸들러
  const memberAddOnChangeHandler = (e) => {
    setMemberAdd(e.target.value);
  }


  // 아이디 중복 useState
  // false == 중복없음 // true == 중복
  const [duplicatedId, setDuplicatedId] = useState(true);

  // 조건에 맞지 않을 경우 빈칸으로 돌려주기 위해서
  const memberIdInput = document.querySelector(".memberId")
  // 아이디 중복 체크
  // 아이디 중복체크, 에러 문구
  const idErrorMessage = document.querySelector(".idErrorMessage");

  const checkMemberIdDuplicate = async () => {
    // 사용자에게 8글자 이상의 아이디 입력받기
    if (memberId.length < 8) {
      idErrorMessage.innerHTML = `<p style="color:red;">최소 8글자 이상의 아이디로 설정해주세요.</p>`
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
        idErrorMessage.innerHTML = `<p style="color:red;">사용중인 아이디입니다.</p>`

      } else {
        setDuplicatedId(false);
        idErrorMessage.innerHTML = `<p style="color:green">사용가능한 아이디입니다.</p>`
      }

      console.log("DB 조회 결과 : ", res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // 닉네임 중복 체크
  const [duplicatedNickname, setDuplicatedNickname] = useState(true);

  // 조건에 맞지 않을 경우 빈칸으로 돌려주기 위해서
  // 닉네임 중복 체크
  // 닉네임 중복체크, 에러 문구
  const nicknameErrorMessage = document.querySelector(".nicknameErrorMessage");
  const checkMemberNicknameDuplicate = async () => {
    if (memberNickname.length <= 2) {
      nicknameErrorMessage.innerHTML = `<p style="color:red;">최소 2글자 이상의 닉네임으로 설정해주세요.</p>`
      return;
    } else if (memberNickname == '관리자' || memberNickname == 'admin') {
      nicknameErrorMessage.innerHTML = `<p style="color:red; margin-top: 2%">사용할 수 없는 키워드가 들어간 닉네임입니다.</p>`
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
        nicknameErrorMessage.innerHTML = `<p style="color:red;">사용중인 닉네임입니다.</p>`

      } else {
        setDuplicatedId(false);
        nicknameErrorMessage.innerHTML = `<p style="color:green">사용가능한 닉네임입니다.</p>`
      }

      console.log("DB 조회 결과 : ", res.data);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const errorMessageMemberName = document.querySelector(".errorMessageMemberName");
  const koreanRegex = /^[가-힣]{2,}$/;
  const memberNameInput = document.querySelector("#memberName");
  // 이름, 비밀번호 글자 수 제한
  const checkSizeMemberName =  () => {
    // 이름이 두글자 이하인 경우 경고 메세지 출력

    if (!koreanRegex.test(memberName) || memberName) {

      errorMessageMemberName.innerHTML = `<p class="errorMessageMemberName" style="color:red;">최소 두 글자 이상의 한글만 입력 가능합니다</p>`;
      memberNameInput.value = "";
      // 조건에 부합한 경우 에러메세지 지우기
    } else {
      errorMessageMemberName.innerHTML = `<p class="errorMessageMemberName"></p>`; // 오류 메시지 초기화
    }
  };






  const errorMessageMemberPw = document.querySelector(".errorMessageMemberPw");
  // 비밀번호 정규식 특수문자 1개 포함, 숫자, 문자
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  const memberPwInput = document.querySelector("#memberPw");
  const checkMemberPw = () => {
    // 이름이 두글자 이하인 경우 경고 메세지 출력
    // 비밀번호 정규식 부합하지 않은 경우 에러메세지 출력
    if (!passwordRegex.test(memberPw) || !memberPw) {
      errorMessageMemberPw.innerHTML = `<p style="color:red;">최소 특수문자 1개 포함하여 8글자 이상의 비밀번호를 입력해주세요</p>`;
      memberPwInput.value = '';

      // 오류 메시지 초기화
    } else {
      errorMessageMemberPw.innerHTML = `<p style="color: green">사용가능한 비밀번호입니다.</p>`;
    }
  }

  // 비밀번호, 재확인 비밀번호 일치, 불일치 함수
  const passwordConfirm = document.querySelector("#passwordConfirm");
  const errorMessagePasswordConfirm = document.querySelector(".errorMessagePasswordConfirm");

  const checkPasswordConfirm = () => {
    if (memberPwInput.value != passwordConfirm.value) {
      errorMessagePasswordConfirm.innerHTML = `<p style="color:red;">비밀번호가 일치하지 않습니다.</p>`;
      passwordConfirm.value = '';

    } else {
      errorMessagePasswordConfirm.innerHTML = `<p style="color: green">비밀번호 재확인 성공</p>`;
    }
  }

  const errorMessageBirth = document.querySelector(".errorMessageBirth")
  const memberBirthOnBlur = () => {
    if (memberBirth == "") {
      errorMessageBirth.innerHTML = `<p style="color:red;">생년월일을 입력해주세요.</p>`
    } else {
      errorMessageBirth.innerHTML = `<p></p>`

    }
  }
  // 등록 버튼 클릭 시 모든 input 태그 검사 후
  // 경고 메세지 출력 or update 쿼리 쏘기
  const register = () => {
    // 에러 메세지 모두 출력
    const idErrorMessage = document.querySelector(".idErrorMessage");
    const errorMessageMemberName = document.querySelector(".errorMessageMemberName");
    const nicknameErrorMessage = document.querySelector(".nicknameErrorMessage");
    const errorMessageMemberPw = document.querySelector(".errorMessageMemberPw");
    const errorMessagePasswordConfirm = document.querySelector(".errorMessagePasswordConfirm");
    const errorMessageBirth = document.querySelector(".errorMessageBirth");
    if (duplicatedId) {
      idErrorMessage.innerHTML = `<p style="color:red;">아이디 중복체크 해주세요.</p>`
    } else if (memberId == "") {
      idErrorMessage.innerHTML = `<p style="color:red;">최소 8글자 이상의 아이디로 설정해주세요.</p>`
    }
    if (memberName == "") {
      errorMessageMemberName.innerHTML = `<p style="color:red;">이름을 입력해주세요.</p>`
    }
    if (memberNickname == "") {
      nicknameErrorMessage.innerHTML = `<p style="color:red;">닉네임을 입력해주세요.</p>`
    }
    if (duplicatedNickname) {
      nicknameErrorMessage.innerHTML = `<p style="color:red;">닉네임 중복체크 해주세요.</p>`
    }
    if (memberPw == "") {
      errorMessageMemberPw.innerHTML = `<p style="color:red;">비밀번호를 입력해주세요.</p>`
    }
    if (passwordConfirm == "") {
      errorMessagePasswordConfirm.innerHTML = `<p style="color:red;">재확인비밀번호를 입력해주세요.</p>`
    }
    if (memberBirth == "") {
      errorMessageBirth.innerHTML = `<p style="color:red;">생년월일을 입력해주세요.</p>`;
    }

  }

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
        }
      }).open();
    };

  const detailAddress = document.querySelector("#sample6_detailAddress");


  // 값 변화 감지 확인용
  useEffect(() => {
    console.log(duplicatedId, memberBirth)
  }, [duplicatedId, memberBirth]);


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
                    placeholder="hanseokku"
                    className="hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40 w-72"
                    maxLength="15"
                    onChange={memberIdOnChangeHandler}
                />
                <button className="bg-blue-500 rounded-xl ms-2 text-white h-12 w-28 font-bold"
                        onClick={checkMemberIdDuplicate}>중복 확인
                </button>
                <p className="idErrorMessage"></p>
              </div>

              <div className="wb">
                <label className="rc kk wm vb" htmlFor="memberName">
                  이름
                </label>
                <input
                    type="text"
                    name="memberName"
                    id="memberName"
                    placeholder="한석규"
                    className="vd hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40"
                    onChange={memberNameOnChangeHandler}
                    onBlur={checkSizeMemberName}
                />
                <p className="errorMessageMemberName"></p>
              </div>

              <div className="wb">
                <label className="rc kk wm vb" htmlFor="memberNickname">
                  닉네임
                </label>
                <input
                    type="text"
                    name="memberNickname"
                    id="memberNickname"
                    placeholder="hanseokku"
                    maxLength="8"
                    className="hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40 w-72"
                    onChange={memberNicknameOnChangeHandler}
                />
                <button className="bg-blue-500 rounded-xl ms-2 text-white h-12 w-28 font-bold"
                        onClick={checkMemberNicknameDuplicate}>중복 확인
                </button>
                <p className="nicknameErrorMessage"></p>
              </div>

              <div className="wb">
                <label className="rc kk wm vb" htmlFor="memberPw">
                  비밀번호
                </label>
                <input
                    type="password"
                    name="memberPw"
                    id="memberPw"
                    placeholder="**********"
                    maxLength="15"
                    className="vd hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40"
                    onChange={memberPwOnChangeHandler}
                    onBlur={checkMemberPw}
                />
                <p className="errorMessageMemberPw"></p>
              </div>
              <div className="wb">
                <label className="rc kk wm vb" htmlFor="passwordConfirm">
                  비밀번호 확인
                </label>
                <input
                    type="password"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    placeholder="**********"
                    className="vd hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40"
                    onChange={memberConfimPwOnChangeHandler}
                    onBlur={checkPasswordConfirm}
                />
                <p className="errorMessagePasswordConfirm"></p>
              </div>

              <div className="wb">
                <label className="rc kk wm vb" htmlFor="birth">
                  생년월일
                </label>
                <input
                    type="date"
                    name="bitrh"
                    id="birth"
                    placeholder="2000.09.01"
                    className="vd hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40"
                    onChange={memberBirthOnChangeHandler}
                    onBlur={memberBirthOnBlur}
                />
                <p className="errorMessageBirth"></p>
              </div>

              <div className="wb">
                <label className="rc kk wm vb" htmlFor="tel">
                  전화번호
                </label>
                <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="010-8282-4989"
                    className="hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40 w-72"
                    onChange={memberTelOnChangeHandler}
                />
                <button className="bg-blue-500 rounded-xl ms-2 text-white h-12 w-28 font-bold">인증 요청</button>
              </div>

              <div className="wb">
                <label className="rc kk wm vb" htmlFor="addr">
                  주소
                </label>
                <input type="text" id="sample6_postcode" placeholder="우편번호"
                       className="hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40 w-48"/>
                <button className="bg-blue-500 rounded-xl ms-2 text-white h-12 w-28 font-bold"
                        onClick={handlePostcode}>검색
                </button>
                <input type="text" id="sample6_address" placeholder="주소"
                       className="hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40 w-full my-2"/><br/>
                <input type="text" id="sample6_detailAddress" placeholder="상세주소"
                       className="hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40 w-48"/>
                <input type="text" id="sample6_extraAddress" placeholder="참고항목"
                       className="hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40 w-48 mx-3"/>
              </div>

              <button className="vd rj ek rc rg gh lk ml il _l gi hi mt-14" onClick={register}>
                등록
              </button>
              <p className="errorMessageAddress"></p>

            </div>
          </div>
        </section>
      </main>
  );
}
