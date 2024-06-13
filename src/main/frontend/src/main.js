import React, {useState} from "react";

const Main = () => {

  return (
      <main>
        <section className="gj do ir hj sp jr i pg">
          <div className="xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r me-36">
            <img src="/images/shape-01.svg" alt="shape" className="xc 2xl:ud-block h t -ud-left-[10%] ua scale-75"/>
            <img src="/images/main_thumnail.png" alt="library" className="rounded-3xl my-52"/>
          </div>
          <div className="bb ze ki xn 2xl:ud-px-0 mt-32">
            <div className="tc _o">
              <div className="animate_left jn/2">
                <h1 className="fk vj zp or kk wm wbss font-extrabold">
                  나, 너 그리고 우리를 위한 공간
                </h1>
                <p className="fq mt-3">
                  생각은 곱씹으면 깊어지고, 아이디어는 부딪힐수록 커집니다. 한석줍쇼에서는 사람과 사람을 연결하는 커뮤니케이션 공간을 제공하며, 많은 사람들이 반짝이는 영감을 얻을 수 있는 환경 조성을 최우선 목표로 두고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mt-16">
          <div className="bb ze ki yn 2xl:ud-px-12.5">
            <div className="tc uf zo xf ap zf bp mq">
              <div className="animate_top kn to/3 tc cg oq">
                <div className="tc wf xf cf ae cd rg mh">
                  <img src="images/main_call_icon.png" alt="Icon"/>
                </div>
                <div>
                  <h4 className="ek yj go kk wm xb">24시간 상담</h4>
                  <p>도움이 필요하신가요? 시설 이용 중 발생하는 궁금증, 건의사항, 요청 사항 등 언제든 응대할 수 있는 상담원이 대기 중입니다
                  </p>
                </div>
              </div>
              <div className="animate_top kn to/3 tc cg oq">
                <div className="tc wf xf cf ae cd rg nh">
                  <img src="images/main_membership_icon.png" alt="Icon" className="scale-110"/>
                </div>
                <div>
                  <h4 className="ek yj go kk wm xb">멤버십 서비스</h4>
                  <p>멤버십 구독으로 더 많은 혜택을 누려보세요</p>
                </div>
              </div>
              <div className="animate_top kn to/3 tc cg oq">
                <div className="tc wf xf cf ae cd rg oh">
                  <img src="images/main_community_icon.png" alt="Icon" className="scale-110"/>
                </div>
                <div>
                  <h4 className="ek yj go kk wm xb">팟캐스트</h4>
                  <p>재밌게 읽은 책 내용을 많은 사람들과 실시간 방송으로 공유해보세요</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-44 mb-24">
          <div className="bb ze ki xn wq">
            <div className="tc wf gg qq">
              <div className="animate_left xc gn gg jn/2 i">
                <div style={{width: "50rem"}}>
                  <img
                      src="images/main_relay_sample.png"
                      alt="Shape"
                      className="ms-24 mb-24 scale-125 border"
                  />
                </div>

              </div>
              <div className="animate_right jn/2 mb-24">
                <h4 className="ek yj mk gb">릴레이 소설</h4>
                <h2 className="fk vj zp pr kk wm qb">
                  우리가 완성하는 이야기
                </h2>
                <p className="uo">
                  여러 사람의 손을 거친 소설은 어떻게 마무리될까요?<br/>
                  자유롭고 두서없이 완성해나가는 릴레이 소설에 참여해보세요!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="lj tp kr">
          <div>
            <div className="animate_top bb ze rj ki xn vq">
              <h2
                  x-text="sectionTitle"
                  className="fk vj pr kk wm on/5 gq/2 bb _b"
              >
              </h2>
              <p className="bb on/5 wo/5 hq" x-text="sectionTitleText"></p>
            </div>
            <div className="text-center text-8xl text-black">Features</div>
            <div className="text-center text-2xl mt-3">누구나 이용할 수 있습니다</div>
          </div>

          <div className="bb ze ki xn yq mb en">
            <div className="wc qf pn xo ng">
              <div className="animate_top sg oi pi zq ml il am cn _m">
                <img src="images/main_features_info.png" alt="Icon" className="w-10"/>
                <h4 className="ek zj kk wm nb _b">리셉션 데스크</h4>
                <p>리셉션 데스크에는 전문성을 갖춘 매니저가 상주하며, 최고의 고객 서비스를 제공합니다</p>
              </div>

              <div className="animate_top sg oi pi zq ml il am cn _m">
                <img src="images/main_features_kitchen.png" alt="Icon" className="w-10"/>
                <h4 className="ek zj kk wm nb _b">주방 및 휴게시설</h4>
                <p>편안한 쇼파, 고급 안마의자, 자연 친화적인 휴식 공간, 간단히 식음료를 즐길 수 있는 테이블과 스툴 등을 갖추고 있습니다. 라운지 공간에는 공용 냉장고, 얼음정수기, 커피머신,
                  전자렌지, 토스트기, 싱크대, 식기 등이 있습니다</p>
              </div>

              <div className="animate_top sg oi pi zq ml il am cn _m">
                <img src="images/main_features_printer.png" alt="Icon" className="w-10"/>
                <h4 className="ek zj kk wm nb _b">사무 보조 기기</h4>
                <p>복사/스캔/팩스가 가능한 복합기, 문서 절단기, 코팅기, 제본기, 파쇄기까지 다양한 사무 보조기기를 고루 갖추고 있습니다. 입주사분들께는 월 100장(흑백기준)을 무료로 출력해
                  드립니다. 초과시에도 부담없는 금액으로 이용하실 수 있습니다</p>
              </div>

              <div className="animate_top sg oi pi zq ml il am cn _m">
                <img src="images/main_features_readingRoom.png" alt="Icon" className="w-10"/>
                <h4 className="ek zj kk wm nb _b">열람실</h4>
                <p>1인 ~ 10인이 도서 열람이 가능한 공간이 마련돼 있습니다. 냉난방시설과 환기시설을 갖추고 있어 쾌적한 실내환경을 제공합니다. 책상과 서랍, 고급의자 등이 마련돼 있어 최상의
                  컨디션을 유지해줍니다. 또한 여러 개의 CCTV로 보안과 안전에 최선을 다합니다</p>
              </div>

              <div className="animate_top sg oi pi zq ml il am cn _m">
                <img src="images/main_features_location.png" alt="Icon" className="w-10"/>
                <h4 className="ek zj kk wm nb _b">접근성</h4>
                <p>오룡역 8번 출구에서 도보 5분 거리에 위치하고 있어 대중교통 이용이 편리합니다</p>
              </div>

              <div className="animate_top sg oi pi zq ml il am cn _m">
                <img src="images/main_features_clean.png" alt="Icon" className="w-10"/>
                <h4 className="ek zj kk wm nb _b">시설 관리</h4>
                <p>매일 정기적으로 전문 청소업체가 방문해 모든 시설을 쾌적하고 깔끔하게 관리합니다</p>
              </div>
            </div>
          </div>
        </section>

        <section className="i pg gh ji">
          <img className="h p q" src="images/shape-16.svg" alt="Bg Shape"/>

          <section id="testimonials">
            <div className="container px-4 ms-28">
              <div className="flex flex-wrap">
                <div className="w-full mx-4">
                  <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[620px] text-white">
                    <h2
                        className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[42px]
                  text-dark
                  mb-4
                "
                    >
                      마음의 소리
                    </h2>
                    <p
                        className="
                  text-lg
                  sm:text-xl
                  leading-relaxed
                  sm:leading-relaxed
                  text-body-color
                "
                    >
                      한석줍쇼를 이용자들의 마음 속에서 우러나온 이야기들
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                  <div
                      className="
                ud-single-testimonial
                p-8
                bg-white
                mb-12
                shadow-testimonial
                wow
                fadeInUp
              "
                      data-wow-delay=".1s
              "
                  >
                    <div className="ud-testimonial-ratings flex items-center mb-3">
                <span className="text-[#fbb040] mr-1">
                  <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                  >
                    <path
                        d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                    />
                  </svg>
                </span>
                      <span className="text-[#fbb040] mr-1">
                  <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                  >
                    <path
                        d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                    />
                  </svg>
                </span>
                      <span className="text-[#fbb040] mr-1">
                  <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                  >
                    <path
                        d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                    />
                  </svg>
                </span>
                      <span className="text-[#fbb040] mr-1">
                  <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                  >
                    <path
                        d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                    />
                  </svg>
                </span>
                      <span className="text-[#fbb040] mr-1">
                  <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                  >
                    <path
                        d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                    />
                  </svg>
                </span>
                    </div>
                    <div className="ud-testimonial-content mb-6">
                      <p className="text-base tracking-wide text-body-color">
                        실수로 복도에 음료를 쏟았는데 데스크 직원분이 빠르게 처리해주셨습니다. 죄송하고 감사합니다.
                      </p>
                    </div>
                    <div className="ud-testimonial-info flex items-center">
                      <div
                          className="
                    ud-testimonial-image
                    w-[50px]
                    h-[50px]
                    rounded-full
                    overflow-hidden
                    mr-5
                  "
                      >
                        <img
                            src="/images/main_review1.png"
                            alt="author"
                        />
                      </div>
                      <div className="ud-testimonial-meta">
                        <h4 className="text-sm font-semibold">카릿나</h4>
                        <p className="text-[#969696] text-xs">knifeHave @ nextit.or.kr</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                  <div
                      className="
                ud-single-testimonial
                p-8
                bg-white
                mb-12
                shadow-testimonial
                wow
                fadeInUp
              "
                      data-wow-delay=".15s
              "
                  >
                    <div className="ud-testimonial-ratings flex items-center mb-3">
                <span className="text-[#fbb040] mr-1">
                  <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                  >
                    <path
                        d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                    />
                  </svg>
                </span>
                      <span className="text-[#fbb040] mr-1">
                  <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                  >
                    <path
                        d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                    />
                  </svg>
                </span>
                      <span className="text-[#fbb040] mr-1">
                  <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                  >
                    <path
                        d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                    />
                  </svg>
                </span>
                      <span className="text-[#fbb040] mr-1">
                  <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                  >
                    <path
                        d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                    />
                  </svg>
                </span>
                      <span className="text-[#fbb040] mr-1">
                  <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                  >
                    <path
                        d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                    />
                  </svg>
                </span>
                    </div>
                    <div className="ud-testimonial-content mb-12">
                      <p className="text-base tracking-wide text-body-color">
                        에어컨이 빵빵함. 남극에 온 것 같음. 취조실로 써도 될 듯.
                      </p>
                    </div>
                    <div className="ud-testimonial-info flex items-center">
                      <div
                          className="
                    ud-testimonial-image
                    w-[50px]
                    h-[50px]
                    rounded-full
                    overflow-hidden
                    mr-5
                  "
                      >
                        <img
                            src="/images/main_review2.png"
                            alt="author"
                        />
                      </div>
                      <div className="ud-testimonial-meta">
                        <h4 className="text-sm font-semibold">진실공방</h4>
                        <p className="text-[#969696] text-xs">truthroom @ instagram</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                  <div
                      className="
                ud-single-testimonial
                p-8
                bg-white
                mb-12
                shadow-testimonial
                wow
                fadeInUp
              "
                      data-wow-delay=".2s
              "
                  >
                    <div className="ud-testimonial-ratings flex items-center mb-3">
                <span className="text-[#fbb040] mr-1">
                  <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                  >
                    <path
                        d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                    />
                  </svg>
                </span>
                      <span className="text-[#fbb040] mr-1">
                  <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                  >
                    <path
                        d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                    />
                  </svg>
                </span>
                      <span className="text-[#fbb040] mr-1">
                  <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                  >
                    <path
                        d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                    />
                  </svg>
                </span>
                      <span className="text-[#fbb040] mr-1">
                  <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                  >
                    <path
                        d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                    />
                  </svg>
                </span>
                      <span className="text-[#fbb040] mr-1">
                  <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                  >
                    <path
                        d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                    />
                  </svg>
                </span>
                    </div>
                    <div className="ud-testimonial-content mb-6">
                      <p className="text-base tracking-wide text-body-color">
                        복사기 무료 이용이 너무 좋습니다. 흑백만 되는게 아쉽지만 만족합니다.
                      </p>
                    </div>
                    <div className="ud-testimonial-info flex items-center">
                      <div
                          className="
                    ud-testimonial-image
                    w-[50px]
                    h-[50px]
                    rounded-full
                    overflow-hidden
                    mr-5
                  "
                      >
                        <img
                            src="/images/main_review3.png"
                            alt="author"
                        />
                      </div>
                      <div className="ud-testimonial-meta">
                        <h4 className="text-sm font-semibold">상냥한자와</h4>
                        <p className="text-[#969696] text-xs">kindthief @ Troie</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </section>
      </main>
  );
};

export default Main;
