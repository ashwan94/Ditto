import { useEffect, useState } from "react";
import axios from "axios";

export default function PodcastAdd() {
  const [hello, setHello] = useState("");

  useEffect(() => {

    axios
      .get("/podcast/add")
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>팟캐스트 채널 생성</div>
    </>
  );
}
