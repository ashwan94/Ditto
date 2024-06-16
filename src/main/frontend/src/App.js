  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import Main from "./main";
  import Header from "./pages/common/Header";
  import Footer from "./pages/common/Footer";
  import SignIn from "./pages/common/SignIn";
  import SignUp from "./pages/common/SignUp";
  import FreeBoard from "./pages/community/freeBoard/list";
  import FreeBoardView from "./pages/community/freeBoard/view";
  import FreeBoardAdd from "./pages/community/freeBoard/add";
  import FreeBoardUpdate from "./pages/community/freeBoard/update";
  import RelayBoard from "./pages/community/relayBoard/list";
  // import NoticeView from "./pages/community/noticeBoard/view";
  // import NoticeAdd from "./pages/community/noticeBoard/add";
  import Podcast from "./pages/community/podcast/list";
  import "./css/style.css";

  function App() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/community/freeBoard/list" element={<FreeBoard />}/>
            <Route path="/community/freeBoard/view" element={<FreeBoardView />}/>
            <Route path="/community/freeBoard/add" element={<FreeBoardAdd />}/>
            <Route path="/community/freeBoard/update" element={<FreeBoardUpdate />}/>
            {/*<Route path="/community/noticeBoard/list" element={<NoticeBoard />}/>*/}
            {/*<Route path="/community/noticeBoard/view" element={<NoticeView />}/>*/}
            {/*<Route path="/community/noticeBoard/add" element={<NoticeAdd />}/>*/}
            <Route path="/community/relayBoard/list" element={<RelayBoard />}/>
            <Route path="/community/podcast/list" element={<Podcast />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }

  export default App;
