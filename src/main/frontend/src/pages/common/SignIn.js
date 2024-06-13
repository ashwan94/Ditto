import {Link} from "react-router-dom";

export default function signIn() {
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

          <form
            className="sb"
            action="https://formbold.com/s/unique_form_id"
            method="POST"
          >
            <div className="wb">
              <label className="rc kk wm vb" htmlFor="username">
                이메일 주소
              </label>
              <input
                type="text"
                name="username"
                id="username"
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
                className="vd hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40"
              />
            </div>

            <button className="vd rj ek rc rg gh lk ml il _l gi hi">
              로그인
            </button>
            <div className="text-center mt-10 text-black font-extrabold">
              <Link to="/SignUp" className="sj hk xj rj ob">아직 계정이 없으신가요?</Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
