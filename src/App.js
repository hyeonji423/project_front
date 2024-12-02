import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Features from "./components/Features";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Mypage from "./components/Mypage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
