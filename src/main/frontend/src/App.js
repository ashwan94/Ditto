  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import Main from "./main";
  import Header from "./pages/common/Header";
  import Footer from "./pages/common/Footer";
  import SignIn from "./pages/common/SignIn";
  import SignUp from "./pages/common/SignUp";
  import FreeBoard from "./pages/community/freeboard/list";
  import FreeBoardView from "./pages/community/freeboard/view";
  import RelayBoard from "./pages/community/relayBoard/list";
  import Notice from "./pages/community/notice/list";
  import Podcast from "./pages/community/podcast/list";
  // import Book from "./pages/book/list";
  // import Seat from "./pages/seat/list";
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
            {/*<Route path="/book/list" element={<Book />} />*/}
            {/*<Route path="/seat/list" element={<Seat />} />*/}
            <Route path="/community/freeBoard/list" element={<FreeBoard />}/>
            <Route path="/community/freeBoard/view/:freeBoardNo" element={<FreeBoardView />}/>
            <Route path="/community/notice/list" element={<Notice />}/>
            <Route path="/community/relayBoard/list" element={<RelayBoard />}/>
            <Route path="/community/podcast/list" element={<Podcast />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }

  export default App;
