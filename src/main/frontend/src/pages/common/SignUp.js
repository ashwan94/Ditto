import {useEffect, useState} from "react";
import axios from "axios";

export default function Signup() {

  const [memberId,setMemberId] = useState("")
  const [memberName,setMemberName] = useState("")
  const [memberNickname, setMemberNickname] = useState("");
  const [memberPw, setMemberPw] = useState("");
  const [memberConfimPw, setMemberConfimPw] = useState("");
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
    setMemberConfimPw(e.target.value);
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

  // 값 변화 감지 확인용
  useEffect(() => {
    console.log(memberId, memberName)
  }, [memberId,memberName]);


  // 아이디 중복 체크
  const checkMemberIdDuplicate = async (e) => {
    try {
      console.log("아이디: ",memberId)
      const res = await axios.post("/checkId", {
        memberId: memberId
      }, {

        headers:{
          "Content-Type": "application/json"
        }
      });
      console.log("DB 조회 결과 : ", res.data.memberId);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
    e.preventDefault()
  }

  // 닉네임 중복 체크
  const checkMemberNicknameDuplicate = async () => {
    try {
      console.log("아이디: ",memberId)
      const res = await axios.post("/checkNickname", null, {
        params: {
          memberNickname: memberNickname
        }
      });
      console.log("DB 조회 결과 : ", res.data.memberNickname);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  return (
    <main>
      <section className="i pg fh rm ki xn vq gj qp gr hj rp hr">
        <img src="images/shape-06.svg" alt="Shape" className="h j k" />
        <img src="images/shape-03.svg" alt="Shape" className="h l m" />
        <img src="images/shape-17.svg" alt="Shape" className="h n o" />
        <img src="images/shape-18.svg" alt="Shape" className="h p q" />

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

          <form
              className="sb"
              // method="POST"
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
                  onChange={memberIdOnChangeHandler}
              />
              <button className="bg-blue-500 rounded-xl ms-2 text-white h-12 w-28 font-bold"
                      onClick={checkMemberIdDuplicate}>중복 확인</button>
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
              />
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
                  className="hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40 w-72"
                  onChange={memberNicknameOnChangeHandler}
              />
              <button className="bg-blue-500 rounded-xl ms-2 text-white h-12 w-28 font-bold"
                      onClick={checkMemberNicknameDuplicate}>중복 확인</button>
            </div>

            <div className="wb">
              <label className="rc kk wm vb" htmlFor="memberPw">
                비밀번호
              </label>
              <input
                  type="password"
                  name="memberPw"
                  id="memberPw"
                  placeholder="**************"
                  className="vd hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40"
                  onChange={memberPwOnChangeHandler}
              />
            </div>
            <div className="wb">
              <label className="rc kk wm vb" htmlFor="passwordConfirm">
                비밀번호 확인
              </label>
              <input
                  type="password"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  placeholder="**************"
                  className="vd hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40"
                  onChange={memberConfimPwOnChangeHandler}
              />
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
              />
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
              <input
                  type="text"
                  name="addr"
                  id="addr"
                  placeholder="대전 유성구 봉명로 49-4 해피하우스 303호"
                  className="hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40 w-72"
                  onChange={memberAddOnChangeHandler}
              />
              <button className="bg-blue-500 rounded-xl ms-2 text-white h-12 w-28 font-bold">검색</button>
            </div>

            <button className="vd rj ek rc rg gh lk ml il _l gi hi mt-14">
              등록
            </button>

          </form>
        </div>
      </section>
    </main>
  );
}
