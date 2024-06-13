import {useEffect, useState} from "react";
import axios from "axios";


export default function Intro() {

    const getData = async () => {
        try {
            const res = await axios.get("/intro");
            console.log(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <main>
            <section className="gj do ir hj sp jr i pg">
                <div className="bb ze ki xn 2xl:ud-px-0">
                <p>여기는 기업 슬로건 느낌의 문구</p>
                <p>여기는 사진</p>    
                <p>여기는 지도</p>
                </div>

            </section>
        </main>
);
}
