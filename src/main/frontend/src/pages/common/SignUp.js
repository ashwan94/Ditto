export default function signup() {
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
            <h2 className="ek ck kk wm xb">계정 만들기</h2>

            <span className="i rc sj hk xj">
              <span className="rc h s z/2 nd oe rh tm"></span>
              <span className="rc h q z/2 nd oe rh tm"></span>
              한석줍쇼 계정 생성
            </span>
          </div>

          <form
              className="sb"
              action="https://formbold.com/s/unique_form_id"
              method="POST"
          >
            <div className="wb">
              <label className="rc kk wm vb" htmlFor="userid">
                아이디
              </label>
              <input
                  type="text"
                  name="userid"
                  id="userid"
                  placeholder="hanseokku"
                  className="hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40 w-72"
              />
              <button className="bg-blue-500 rounded-xl ms-2 text-white h-12 w-28 font-bold">중복 확인</button>
            </div>
            <div className="wb">
              <label className="rc kk wm vb" htmlFor="username">
                이름
              </label>
              <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="한석규"
                  className="vd hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40"
              />
            </div>

            <div className="wb">
              <label className="rc kk wm vb" htmlFor="password">
                비밀번호
              </label>
              <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="**************"
                  className="vd hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40"
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
              />
              <button className="bg-blue-500 rounded-xl ms-2 text-white h-12 w-28 font-bold">인증 요청</button>
            </div>

            <div className="wb">
              <label className="rc kk wm vb" htmlFor="email">
                이메일
              </label>
              <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="hsk999@gmail.com"
                  className="hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40 w-72"
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
              />
              <button className="bg-blue-500 rounded-xl ms-2 text-white h-12 w-28 font-bold">검색</button>
            </div>

            <button className="vd rj ek rc rg gh lk ml il _l gi hi mt-14">
              Sign Up
            </button>

          </form>
        </div>
      </section>
    </main>
  );
}
