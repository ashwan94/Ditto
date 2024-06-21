import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main";
import Header from "./pages/common/Header";
import Footer from "./pages/common/Footer";
import SignIn from "./pages/common/SignIn";
import SignUp from "./pages/common/SignUp";
import SeatList from  "./pages/seat/list"
import PodcastList from "./pages/community/podcast/list";
import BookList from "./pages/book/list";
import Intro from "./pages/introduce/intro";
import BookView from "./pages/book/view";
import Mypage from "./pages/common/Mypage";
import BookWarn from "./pages/book/warn";

import "./css/style.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/book/list" element={<BookList />} />
          <Route path="/book/view" element={<BookView />} />
          <Route path="/book/warn" element={<BookWarn />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/community/podcast/list" element={<PodcastList />} />
          <Route path="/seat/list" element={<SeatList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;