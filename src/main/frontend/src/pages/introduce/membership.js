import React, {useEffect} from "react";

export default function Membership() {


    // 첫 랜더링 시 사이트 가장 상단으로 위치
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'auto',
        })
    }, []);

    const clickChargeBtn = (pg_method, amount, nickname, redirect_url) => {
        const {IMP} = window;
        IMP.init('imp18537852') // 가맹점 번호 지정
        IMP.request_pay({
                pg: `${pg_method}`, // 결제 방식 지정 -> 카카오페이
                pay_method: 'card',
                merchant_uid: `mid_${new Date().getTime()}`, // 현재 시간
                name: '한석줍쇼 1일 멤버십 이용권 구매', // 결제 품목 및 제목 지정
                amount: `${amount}`, // 충전할 금액
                buyer_email: '구매자 이메일',
                buyer_name: `${nickname}`,
                buyer_tel: '010-1222-1222',
                buyer_addr: '서울특별시 강남구 삼성동',
                buyer_postcode: '123-456',
                m_redirect_url: `${redirect_url}` // 만약 새창에서 열린다면 결제 완료 후 리다이렉션할 주소
            }, function (rsp) {
                if (rsp.success) {
                    alert("결제 성공");
                    // 테이블 수정





                } else {
                    alert("결제 실패");
                }

            }
        );
    }


    return (
        <main className="rundry text-xl">
            <div className="gj do ir hj sp jr i pg rundry">
                <div className="bb ze ki xn 2xl:ud-px-0" style={{borderTop: "1px solid lightgray"}}>
                </div>

                <section className="gj do ir hj sp jr i pg">
                    <div className="xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r me-36">
                        <img src="/images/shape-01.svg" alt="shape"
                             className="xc 2xl:ud-block h t -ud-left-[10%] ua scale-75"/>
                        <img src="https://cdn.wadiz.kr/ft/images/green001/2021/0702/20210702193533979_7.gif"
                             alt="library" className="rounded-3xl my-52"
                             style={{width: "100%", height: "80%"}}/>
                    </div>
                    <div className="bb ze ki xn 2xl:ud-px-0 mt-32">
                        <div className="tc _o">
                            <div className="animate_left jn/2">
                                <h1 className="fk vj zp or kk wm wbss font-extrabold rundry px-2 py-3"
                                    style={{fontSize: "65px"}}>
                                    나와 너, 그리고 우리를<br/> 위한 공간
                                </h1>
                                <p className="fq mt-2">
                                    생각은 곱씹으면 깊어지고, 아이디어는 부딪힐수록 커집니다.<br/> 한석줍쇼에서는 사람과 사람을 연결하는<br/> 커뮤니케이션 공간을
                                    제공하며,<br/> 많은 사람들이 반짝이는
                                    영감을 얻을 수 있는 환경 조성을<br/> 최우선 목표로 두고 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="lj tp kr mt-10">
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
                        <div className="text-center text-2xl mt-3">멤버십 구독 회원분들께 드리는 무료 혜택!</div>
                    </div>

                    /' <div className="bb ze ki xn yq mb en">
                    {/* 무료 혜택 안내 화면 구역 리셉션 데스크, 주방 및 휴게실 등 6가지 */}
                    <div className="wc qf pn xo ng">
                        <div className="animate_top sg oi pi zq ml il am cn _m">
                            <img src="images/main_features_info.png" alt="Icon" className="w-10"/>
                            <h4 className="ek zj kk wm nb _b rundry">리셉션 데스크</h4>
                            <p>리셉션 데스크에는 전문성을 갖춘 매니저가 상주하며, 최고의 고객 서비스를 제공합니다</p>
                        </div>

                        <div className="animate_top sg oi pi zq ml il am cn _m">
                            <img src="images/main_features_kitchen.png" alt="Icon" className="w-10"/>
                            <h4 className="ek zj kk wm nb _b rundry">주방 및 휴게시설</h4>
                            <p>편안한 쇼파, 고급 안마의자, 자연 친화적인 휴식 공간, 간단히 식음료를 즐길 수 있는 테이블과 스툴 등을 갖추고 있습니다. 라운지 공간에는 공용
                                냉장고,
                                얼음정수기, 커피머신,
                                전자렌지, 토스트기, 싱크대, 식기 등이 있습니다</p>
                        </div>

                        <div className="animate_top sg oi pi zq ml il am cn _m">
                            <img src="images/main_features_printer.png" alt="Icon" className="w-10"/>
                            <h4 className="ek zj kk wm nb _b rundry">사무 보조 기기</h4>
                            <p>복사/스캔/팩스가 가능한 복합기, 문서 절단기, 코팅기, 제본기, 파쇄기까지 다양한 사무 보조기기를 고루 갖추고 있습니다. 입주사분들께는 월
                                100장(흑백기준)을 무료로 출력해
                                드립니다. 초과시에도 부담없는 금액으로 이용하실 수 있습니다</p>
                        </div>

                        <div className="animate_top sg oi pi zq ml il am cn _m">
                            <img src="images/main_features_readingRoom.png" alt="Icon" className="w-10"/>
                            <h4 className="ek zj kk wm nb _b rundry">열람실</h4>
                            <p>1인 ~ 10인이 도서 열람이 가능한 공간이 마련돼 있습니다. 냉난방시설과 환기시설을 갖추고 있어 쾌적한 실내환경을 제공합니다. 책상과 서랍, 고급의자
                                등이
                                마련돼 있어 최상의
                                컨디션을 유지해줍니다. 또한 여러 개의 CCTV로 보안과 안전에 최선을 다합니다</p>
                        </div>

                        <div className="animate_top sg oi pi zq ml il am cn _m">
                            <img src="images/main_features_location.png" alt="Icon" className="w-10"/>
                            <h4 className="ek zj kk wm nb _b rundry">접근성</h4>
                            <p>오룡역 8번 출구에서 도보 5분 거리에 위치하고 있어 대중교통 이용이 편리합니다</p>
                        </div>

                        <div className="animate_top sg oi pi zq ml il am cn _m">
                            <img src="images/main_features_clean.png" alt="Icon" className="w-10"/>
                            <h4 className="ek zj kk wm nb _b rundry">시설 관리</h4>
                            <p>매일 정기적으로 전문 청소업체가 방문해 모든 시설을 쾌적하고 깔끔하게 관리합니다</p>
                        </div>
                    </div>


                    {/* 멤버십 가격 안내 화면 구역 */}

                    <section className="px-8 py-24 rounded-xl mt-44" style={{backgroundColor: "lightblue"}}>
                        <div className="container mx-auto text-center">
                            <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-black mb-4 rundry">멤버십
                                가격 안내</h2>
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal text-white">
                                Check out our affordable pricing options for awesome environment.
                            </p>
                        </div>
                        <div className="flex justify-center mt-24"
                             style={{display: "flex", alignItems: "center", textAlign: "center", margin: "auto"}}>



                            {/* 왼쪽 박스 */}
                            <div
                                className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100 mx-4">
                                <div
                                    className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
                                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 capitalize">한달
                                        이용권</h5>
                                    <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500">
                                        꾸준히 자기계발을 하고 싶은 당신에게 추천하는 한석줍쇼 한달 이용권
                                    </p>
                                    <h3 className="antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 flex gap-1 mt-4">
                                        159,000원<span
                                        className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 -translate-y-0.5 self-end opacity-70"></span>
                                    </h3>
                                </div>
                                <div className="p-6 border-t border-blue-gray-50">
                                    <ul className="flex flex-col gap-3">
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="2" stroke="currentColor" aria-hidden="true"
                                                 className="h-4 w-4 text-blue-gray-900">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                            <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">카페테리아 / 무료 와이파이
                                                이용 가능</p>
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="2" stroke="currentColor" aria-hidden="true"
                                                 className="h-4 w-4 text-blue-gray-900">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                            <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">도서
                                                열람 및 대여 가능</p>
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="2" stroke="currentColor" aria-hidden="true"
                                                 className="h-4 w-4 text-blue-gray-900">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                            <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">개인석
                                                이용 가능</p>
                                        </li>
                                    </ul>
                                    <button
                                        onClick={() => clickChargeBtn('kakaopay', '159000', 'nickname', 'http://localhost:3000/membershipInfo')}
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-green-500 text-green-500 hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] block w-full mt-6"
                                        type="button">buy now
                                    </button>
                                </div>
                            </div>
                            {/* 오른쪽 박스 */}
                            <div
                                className="reative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100 mx-4">
                                <div
                                    className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
                                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 capitalize">기업체
                                        공유오피스 입주 상담</h5>
                                    <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500">
                                        사옥 이전 비용, 인테리어 비용이 부담스러운 사장님들께 추천하는 입주 상담 서비스
                                    </p>
                                    <h3 className="antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 flex gap-1 mt-4">
                                        Contact us<span
                                        className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 -translate-y-0.5 self-end opacity-70"></span>
                                    </h3>
                                </div>
                                <div className="p-6 border-t border-blue-gray-50">
                                    <ul className="flex flex-col gap-3">
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="2" stroke="currentColor" aria-hidden="true"
                                                 className="h-4 w-4 text-blue-gray-900">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                            <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">24시간
                                                입주 상담 예약 가능</p>
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="2" stroke="currentColor" aria-hidden="true"
                                                 className="h-4 w-4 text-blue-gray-900">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                            <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">아래
                                                톡상담 버튼을 클릭해주세요</p>
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="2" stroke="currentColor" aria-hidden="true"
                                                 className="h-4 w-4 text-blue-gray-900">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                            <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">
                                               전화상담 010-4795-9464로 연락주세요
                                            </p>
                                        </li>
                                    </ul>
                                    <button
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-green-500 text-green-500 hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] block w-full mt-6"
                                        type="button"
                                        onClick={() => {
                                            const kakaoTalk = document.querySelector("#chat-channel-button")
                                            kakaoTalk.click()
                                        }}>상담하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
                </section>


            </div>
        </main>
    )
}