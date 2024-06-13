import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

export default function PodcastList() {
  const [podcasts, setPodcasts] = useState([]);

  // DB 에서 전체 podcast 내용 조회
  const getData = async () => {
    const res = await axios.get("/podcast/list");
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
    <>
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
    </>
  );
}
