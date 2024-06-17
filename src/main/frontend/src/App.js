import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main";
import Header from "./pages/common/Header";
import Footer from "./pages/common/Footer";
import SignIn from "./pages/common/SignIn";
import SignUp from "./pages/common/SignUp";
import SeatList from  "./pages/seat/list"
import PodcastList from "./pages/podcast/list";
import BookList from "./pages/book/list";
import Intro from "./pages/introduce/intro";
import BookView from "./pages/book/view";
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
          <Route path="/seat/list" element={<SeatList />} />
          <Route path="/podcast/list" element={<PodcastList />} />
            <Route path="/book/list" element={<BookList/>}/>
            <Route path="/book/view" element={<BookView/>}/>
            <Route path="/intro" element={<Intro/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;