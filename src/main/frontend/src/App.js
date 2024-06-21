import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main";
import Header from "./pages/common/header";
import Footer from "./pages/common/footer";
import SignIn from "./pages/common/signIn";
import SignUp from "./pages/common/signUp";
import SeatList from  "./pages/seat/list"
import "./css/style.css";
import PodcastList from "./pages/podcast/list";
import BookList from "./pages/book/list";
import BookView from "./pages/book/view";
import Mypage from "./pages/common/mypage";
import BookWarn from "./pages/book/warn";
import KaKaoTalk from "./pages/common/kakaoTalk";
import Membership from "./pages/introduce/membership";
import Faq from "./pages/introduce/faq";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/book/warn" element={<BookWarn />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/seat/list" element={<SeatList />} />
          <Route path="/podcast/list" element={<PodcastList />} />
          <Route path="/book/list" element={<BookList/>}/>
          <Route path="/book/view" element={<BookView/>}/>
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/membershipInfo" element={<Membership />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
        <KaKaoTalk />
      </BrowserRouter>
    </>
  );
}

export default App;