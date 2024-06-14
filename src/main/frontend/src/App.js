import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main";
import Header from "./pages/common/Header";
import Footer from "./pages/common/Footer";
import SignIn from "./pages/common/SignIn";
import SignUp from "./pages/common/SignUp";
import "./css/style.css";
import BookList from "./pages/book/list";
import Intro from "./pages/introduce/intro";
import BookView from "./pages/book/view";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/book/list" element={<BookList />} />
          <Route path="/book/view/:bookNo" element={<BookView />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
