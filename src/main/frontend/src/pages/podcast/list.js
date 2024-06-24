import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import {useLocation} from "react-router-dom";

export default function PodcastList() {
  const [podcasts, setPodcasts] = useState([]);
  const col = useLocation().state;
  console.log("/podcast/list 에서 넘겨받은 data : ",col);

  // DB 에서 전체 podcast 내용 조회
  const getData = async () => {
    const res = await axios.get("/podcast/list");
<<<<<<<<<<< Temporary merge branch 1
    console.log("컨트롤러에서 받은 data");
===========
>>>>>>>>>>> Temporary merge branch 2
    console.log(res.data);
    setPodcasts(res.data);
  };

  // 최초 브라우저 로딩 시 Controller 의 /podcast/list 호출
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(podcasts);
    console.log(moment(podcasts.start).format("YYYY년MM월DD일 hh시mm분ss초"));
    console.log(moment(podcasts.start).format("YYYY년MM월DD일"));
    console.log(moment(podcasts.start).format("hh시mm분ss초"));
  }, [podcasts]);

  return (
      <main>
        <section className="gj do ir hj sp jr i pg">
      <div>리스트!!!!</div>
      <div>테슽 성공</div>
      {podcasts &&
        podcasts.map((v, i) => {
          return (
            <ul key={i}>
              <li key={i}>podcast_no : {v.podcastNo}</li>
              <li>create_date : {v.createDate}</li>
              <li>modify_date : {v.modifyDate}</li>
              <li>hits : {v.hits}</li>
              <li>status : {v.status}</li>
              <li>total_streaming_time : {v.totalStreamingTime}</li>
            </ul>
          );
        })}
        </section>
    </main>
  );
}
