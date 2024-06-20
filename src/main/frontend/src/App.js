import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main";
import Header from "./pages/common/Header";
import Footer from "./pages/common/Footer";
import SignIn from "./pages/common/SignIn";
import SignUp from "./pages/common/SignUp";
import SeatList from  "./pages/seat/list"
import "./css/style.css";
import PodcastList from "./pages/podcast/list";
import BookList from "./pages/book/list";
import BookView from "./pages/book/view";
import Introduction from "./pages/introduce/Introduction";
import Mypage from "./pages/common/Mypage";
import BookWarn from "./pages/book/warn";
import KaKaoTalk from "./pages/common/KakaoTalk";
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
          <Route path="/introduction" element={<Introduction/>}/>
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
        <Footer />
        <KaKaoTalk />
      </BrowserRouter>
    </>
  );
}

export default App;