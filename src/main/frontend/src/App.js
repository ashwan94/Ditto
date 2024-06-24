  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import Main from "./main";
  import FreeBoard from "./pages/community/freeBoard/list";
  import FreeBoardView from "./pages/community/freeBoard/view";
  import FreeBoardAdd from "./pages/community/freeBoard/add";
  import FreeBoardUpdate from "./pages/community/freeBoard/update";
  import RelayBoard from "./pages/community/relayBoard/list";
  // import NoticeView from "./pages/community/noticeBoard/view";
  // import NoticeAdd from "./pages/community/noticeBoard/add";
  import Podcast from "./pages/community/podcast/list";
  import Header from "./pages/common/header";
  import Footer from "./pages/common/footer";
  import SignIn from "./pages/common/signIn";
  import SignUp from "./pages/common/signUp";
  import PodcastList from "./pages/community/podcast/list";
  import SeatList from  "./pages/seat/list"
  import BookList from "./pages/book/list";
  import BookView from "./pages/book/view";
  import Mypage from "./pages/common/mypage";
  import BookWarn from "./pages/book/warn";
  import KaKaoTalk from "./pages/common/kakaoTalk";
  import Membership from "./pages/introduce/membership";
  import Faq from "./pages/introduce/faq";
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
              <Route path="/book/warn" element={<BookWarn />} />
              <Route path="/seat/list" element={<SeatList />} />
              <Route path="/book/list" element={<BookList/>}/>
              <Route path="/membershipInfo" element={<Membership />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/book/view" element={<BookView/>}/>
              <Route path="/faq" element={<Faq />} />
              <Route path="/community/podcast/list" element={<PodcastList />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
  export default App;