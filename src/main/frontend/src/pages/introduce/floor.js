import React from "react";
import Slider from "react-slick";

export default function Floor() {


    // 캐러셀 관련 설정
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        swipeToSlide: true,
        draggable: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (

        <main className="rundry text-xl">
            <section className="gj do hj sp jr i pg rundry">
                <div className="bb ze ki xn 2xl:ud-px-0 mb-8" style={{borderTop: "1px solid lightgray"}}>

                    {/* 상단 기업 이미지 갤러리 섹션 */}
                    <div
                        className="mt-32 mb- bg-blue-950 text-white py-10 px-6 rounded-xl border-black border-2 text-center"
                        style={{
                            fontSize: "50px", width: "60%", display: "inline-flex",
                            alignItems: "center",
                            textAlign: "center"
                        }}>
                        <img src="https://cdn-icons-png.flaticon.com/512/8347/8347452.png" className="w-48 h-40"/>
                        <p>한석줍쇼와 함께한 기업들</p>
                    </div>
                    <section className="image-gallery mt-12  border-t border-b border-gray-200 border-dashed">
                        <Slider {...settings}>
                            <div>
                                <img
                                    src={`http://asset.bizhows.com/bhfile01/__CM_FILE_DATA/202211/07/16/4699188_1667805902355.jpg`}
                                    alt="Image 1"/>
                            </div>
                            <div>
                                <img
                                    src={`http://asset.bizhows.com/bhfile01/__CM_FILE_DATA/202211/07/16/4699189_1667805902359.jpg`}
                                    alt="Image 2"/>
                            </div>
                            <div>
                                <img
                                    src={`http://asset.bizhows.com/bhfile01/__CM_FILE_DATA/202211/07/16/4699190_1667805902376.jpg`}
                                    alt="Image 3"/>
                            </div>
                            <div>
                                <img
                                    src={`http://asset.bizhows.com/bhfile01/__CM_FILE_DATA/202211/07/16/4699191_1667805902376.jpg`}
                                    alt="Image 4"/>
                            </div>
                            <div>
                                <img
                                    src={`http://asset.bizhows.com/bhfile01/__CM_FILE_DATA/202211/07/16/4699192_1667805902383.jpg`}
                                    alt="Image 5"/>
                            </div>
                            <div>
                                <img
                                    src={`http://asset.bizhows.com/bhfile01/__CM_FILE_DATA/202211/07/16/4699166_1667805706179.png`}
                                    alt="Image 6"/>
                            </div>
                            <div>
                                <img
                                    src={`http://asset.bizhows.com/bhfile01/__CM_FILE_DATA/202211/07/16/4699335_1667806270150.jpg`}
                                    alt="Image 7"/>
                            </div>
                            <div>
                                <img
                                    src={`http://asset.bizhows.com/bhfile01/__CM_FILE_DATA/202211/07/16/4699334_1667806270147.jpg`}
                                    alt="Image 8"/>
                            </div>
                            <div>
                                <img
                                    src={`http://asset.bizhows.com/bhfile01/__CM_FILE_DATA/202211/07/16/4699352_1667806403871.jpg`}
                                    alt="Image 9"/>
                            </div>
                            <div>
                                <img
                                    src={`http://asset.bizhows.com/bhfile01/__CM_FILE_DATA/202211/07/16/4699363_1667806532917.jpg`}
                                    alt="Image 10"/>
                            </div>
                        </Slider>
                    </section>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                         className="mb-12 mt-5">
                        <button style={{display: 'inline-flex', alignItems: 'center', textAlign: 'center'}}
                                className="mt-12 text-blue-400 border-b"
                                onClick={() => {
                                    const kakaoTalk = document.querySelector("#chat-channel-button")
                                    kakaoTalk.click()
                                }}
                        >
                            한석줍쇼는 함께 성장할 기업들을 환영합니다
                        </button>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRcDnbOxWwxbXs7iAXwJascC2EPVbKCFbFQ&s"
                            alt="이미지 설명"
                            style={{width: '80px', height: '80px'}}
                        />
                    </div>



                    {/* 층별 안내 세션 */}
                    <section style={{
                        display: "grid",
                        placeItems: "center"
                    }}
                    className="border-2 border-gray-200 border-dashed rounded-xl bg-gray-50"
                    >
                        <div
                            className="mt-32 py-10 px-6 rounded-xl border-black border-2 text-center text-white bg-blue-950"
                            style={{
                                fontSize: "50px", width: "50%", display: "inline-flex",
                                alignItems: "center",
                                textAlign: "center"
                            }}>
                            <img src="https://cdn-icons-png.flaticon.com/128/3824/3824541.png" className="w-36 h-36"/>
                            <p className="text-center px-8">한석줍쇼 층별 안내</p>
                        </div>

                        <div className="w-full px-4 dark:text-white text-blue-900 mt-5">
                            <div className="tree-wrapper relative md:w-[10px] min-h-[50vh] md:mx-auto ">


                                <div
                                    className="flex md:flex-row flex-col md:items-center md:gap-2 group  relative top-0 md:left-1/2 md:right-1/2 md:even:translate-x-[-100%] even:translate-x-0 md:w-max w-full z-[1]">


                                    <div
                                        className="border-2 border-gray-800 text-center pointer p-4 dark:bg-blue-900 bg-blue-100 aspect-square w-[150px] flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0">
                                        1층<br />
                                        카페테리아
                                    </div>
                                    <div className="details md:max-w-sm p-5 rounded-md my-3 border-2 border-dashed">

                                        <img
                                            className="rounded-xl mt-5"
                                            src="https://png.pngtree.com/background/20230618/original/pngtree-high-angle-view-of-a-coffee-shop-cafe-lounge-in-3d-picture-image_3747899.jpg"/>
                                        <img
                                            className="rounded-xl mt-5"
                                            src="https://png.pngtree.com/background/20230618/original/pngtree-a-coffee-shop-and-cafe-lounge-rendered-in-3d-picture-image_3748081.jpg"/>
                                    </div>
                                </div>


                                <div
                                    className="flex md:flex-row flex-col md:items-center md:gap-2 group  relative top-0 md:left-1/2 md:right-1/2 md:even:translate-x-[-100%] even:translate-x-0 md:w-max w-full z-[1]">
                                    <div
                                        className="border-2 border-gray-800 text-center pointer p-4 dark:bg-blue-900 bg-blue-100 aspect-square w-[150px] flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0">
                                        2층 <br />
                                        개인 열람실
                                    </div>
                                    <div className="details md:max-w-sm p-5 rounded-md my-3  border-2 border-dashed">

                                        <img
                                            className="rounded-xl mt-5"
                                            src="https://mblogthumb-phinf.pstatic.net/MjAyMDA4MDNfNjgg/MDAxNTk2NDQzMzQ5MjEy.TBom_aL0Yn92UsENNZY9LnytloApxS6206AoQcYioYkg.MRgZ5sZvxv_yE1Y1xW7EaxYberwKash4J2AQK02eHdsg.JPEG.gamsungstudycafe10/KakaoTalk_20200803_165536859.jpg?type=w800"/>
                                        <img
                                            className="rounded-xl mt-5"
                                            src="https://modo-phinf.pstatic.net/20200717_171/1594975412422YJd2L_PNG/mosahJRfTa.png?type=w1100"/>

                                        <img
                                            className="rounded-xl mt-5"
                                            src="https://cdn.imweb.me/upload/S20200827134edd4261517/0959ea1d77556.png"/>


                                    </div>
                                </div>


                                <div
                                    className="flex md:flex-row flex-col md:items-center md:gap-2 group  relative top-0 md:left-1/2 md:right-1/2 md:even:translate-x-[-100%] even:translate-x-0 md:w-max w-full z-[1]">
                                    <div
                                        className="border-2 border-gray-800 text-center pointer p-4 dark:bg-blue-900 bg-blue-100 aspect-square w-[150px] flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0">
                                        3층 <br />
                                        사무실
                                    </div>
                                    <div className="details md:max-w-sm p-5 rounded-md my-3  border-2 border-dashed">


                                        <img
                                            className="rounded-xl mt-5"
                                            src="https://previews.123rf.com/images/nikonaft/nikonaft1111/nikonaft111100025/11385173-%EC%82%AC%EB%AC%B4%EC%8B%A4-%EA%B1%B4%EB%AC%BC%EC%9D%98-%EB%82%B4%EB%B6%80%EB%8A%94-%EC%95%84%EB%9E%98%EB%A1%9C-%EB%B3%B8%EB%8B%A4-3d-%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg"/>
                                        <img
                                            className="rounded-xl mt-5"
                                            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/159219484887404014.jpg?w=480"/>

                                        <img
                                            className="rounded-xl mt-5"
                                            src="https://i0.wp.com/916er.com/wp-content/uploads/2020-01-18-235435-1.png?resize=840%2C613&ssl=1"/>


                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex md:flex-row flex-col md:items-center md:gap-2 group  relative top-0 md:left-1/2 md:right-1/2 md:even:translate-x-[-100%] even:translate-x-0 md:w-max w-full z-[1] mb-28">
                                <div
                                    className="border-2 border-gray-800 text-center pointer p-4 dark:bg-blue-900 bg-blue-100 aspect-square w-[150px] flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0">
                                    4층 <br />
                                    도서관
                                </div>
                                <div className="details md:max-w-sm p-5 rounded-md my-3 border-2 border-dashed">

                                    <img
                                        className="rounded-xl mt-5"
                                        src="https://png.pngtree.com/background/20240413/original/pngtree-contemporary-library-interior-in-3d-design-picture-image_8473738.jpg"/>
                                    <img
                                        className="rounded-xl mt-5"
                                        src="https://png.pngtree.com/background/20240125/original/pngtree-contemporary-library-interior-featuring-study-desk-and-table-rendered-in-3d-picture-image_7425700.jpg"/>


                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </main>


    )


}