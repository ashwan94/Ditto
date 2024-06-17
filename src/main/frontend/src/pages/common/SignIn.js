import {Link} from "react-router-dom";
import axios, {post} from "axios";
import {useEffect, useState} from "react";

export default function SignIn() {

  const [memberId, setMemberId] = useState("")
  const [memberPw, setMemberPw] = useState("")

  // 아이디 체인지 핸들러
  const memberIdOnChangeHandler = (e) => {
    setMemberId(e.target.value);
  }

  // 비밀번호 체인지 핸들러
  const memberPwOnChangeHandler  = (e) => {
    setMemberPw(e.target.value);
  }

  const getData = async () => {
    try {
      const res = await axios.get("/SignIn");
      console.log("DB 연결  : ", res);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const login = async () => {
    try {
      console.log("아이디: ",memberId,"비밀번호: ", memberPw)
      const res = await axios.post("/SignIn", null, {
        params: {
          id: memberId,
          password: memberPw
        }
      });

      console.log("DB 조회 결과 : ", res);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  // set아이디/비밀번호 확인용
  useEffect(() => {
    getData();
    // console.log(memberId, memberPw)
  }, []);



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

            <div className="wb">
              <label className="rc kk wm vb" htmlFor="memberId">
                아이디
              </label>
              <input
                type="text"
                name="memberId"
                id="memberId"
                className="vd hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40"
                onChange={memberIdOnChangeHandler}
              />
            </div>

            <div className="wb">
              <label className="rc kk wm vb" htmlFor="memberPw">
                비밀번호
              </label>
              <input
                type="password"
                name="memberPw"
                id="memberPw"
                className="vd hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40"
                onChange={memberPwOnChangeHandler}
              />
            </div>

            {/* 로그인 실패 시 빨갛게 로그인 실패 메세지 출력할 공간 */}


            <button className="vd rj ek rc rg gh lk ml il _l gi hi" onClick={login}>
              로그인
            </button>

            <div className="text-center mt-10 text-black font-extrabold">
              아직 계정이 없으신가요?
              <Link to="/SignUp" className="sj hk xj rj ob" style={{color:"blue"}}> 회원가입</Link>
            </div>

        </div>
      </section>
    </main>
  );
}
