import React from 'react';
import Slider from 'react-slick';
import '../../css/introduction.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KakaoMap from './KakaoMap';

export default function Introduction() {
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
        <div className="mt-44">
            {/* 소개 섹션 */}
            <section className="introduction">
                <h2>최고의 기술, 최적의 방법으로 기업들의 디지털 혁신을 실현합니다</h2>
                <p>카카오엔터프라이즈는 클라우드, 인공지능(AI), 빅데이터, 챗봇, 사물인터넷(IoT), 스마트오피스, 스마트팩토리 등 다양한 솔루션을 제공합니다.</p>
            </section>

            {/* 상단 이미지 갤러리 섹션 */}
            <section className="image-gallery">
                <Slider {...settings}>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/gu1.png`} alt="Image 1" />
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/gu2.jpg`} alt="Image 2" />
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/gu3.jpg`} alt="Image 3" />
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/gu4.png`} alt="Image 4" />
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/gu5.jpg`} alt="Image 5" />
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/gu6.jpg`} alt="Image 6" />
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/gu7.jpg`} alt="Image 7" />
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/gu8.jpg`} alt="Image 8" />
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/gu9.jpg`} alt="Image 9" />
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/gu10.jpg`} alt="Image 10" />
                    </div>
                </Slider>
            </section>

            {/* Manifesto 섹션 */}
            <section className="manifesto">
                <h2>Manifesto</h2>
                <p>우리는 작은 혁신을 만드는 사람들이 함께하는 플랫폼이다. 우리는 사람들이 작지만 가장 혁신적인 것들로 조금씩 더 나은 세상을 만들어 나가도록 이끕니다.</p>
            </section>

            {/* 슬로건 섹션 */}
            <section className="slogan">
                <h2>Why not? If Kakao Enterprise, ( )</h2>
                <p>당연한 것들에 대한 도전! 카카오스러운 생각에 대한 가치!</p>
            </section>

            {/* 비전 섹션 */}
            <section className="vision">
                <h2>Connect. Solve. Create. +AI</h2>
                <div className="vision-details">
                    <div className="vision-item">
                        <h3>Connect</h3>
                        <p>모든 데이터를 이어주는 모든 것을 연결하다.</p>
                    </div>
                    <div className="vision-item">
                        <h3>Solve</h3>
                        <p>문제를 풀어내고 더 가치 있는 것에 집중하다.</p>
                    </div>
                    <div className="vision-item">
                        <h3>Create</h3>
                        <p>새로운 생각, 방법을 창조하다.</p>
                    </div>
                    <div className="vision-item">
                        <h3>+AI</h3>
                        <p>이 모든 과정에 AI로 함께하다.</p>
                    </div>
                </div>
            </section>

            {/* 연락처 섹션 */}
            <section className="contact">
                <h2>Contact Us</h2>
                <p>대전 중구 계룡로 825</p>
                <KakaoMap />
            </section>
        </div>
    );
}
