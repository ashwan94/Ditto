import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main";
import PodcastList from "./pages/podcast/list";

function App() {
  const [hello, setHello] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("/api/back")
  //     .then((response) => setHello(response.data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <>
      <BrowserRouter>
        {/*<Header />*/}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/index" element={<Main />} />
          <Route path="/podcast/list" element={<PodcastList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
