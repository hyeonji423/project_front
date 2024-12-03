import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/main/Home";
import Login from "./components/category/Login";
import Register from "./components/category/Register";
import Mypage from "./components/category/Mypage";
import NewPage from "./components/details/NewPage";
import HealthInfo from "./components/category/HealthInfo";
import Management from "./components/details/Management";
import Medidetail from "./components/details/Medidetail";
import MediInfo from "./components/category/MediInfo";
import HealthNews from "./components/details/HealthNews";
import Chatbot from "./components/category/Chatbot";
import Service from "./components/category/Service";
import HealthDetail from "./components/details/HealthDetail";
=======
import Home from "./components/main/Home";
import Features from "./components/Feature";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/category/Login";
import Register from "./components/category/Register";
import Mypage from "./components/category/Mypage";
import HealthInfo from "./components/category/HealthInfo";
import NewPage from "./components/details/detailsNewPage";
import Management from "./components/details/Management";
import Medidetail from "./components/details/Medidetail";
import MediInfo from "./components/category/MediInfo";
import HealthNews from "./components/HealthNews";
import Service from "./components/Service";
import MemberInfo from "./components/MemberInfo";
import Chatbot from "./components/category/Chatbot";
>>>>>>> 7a1bc9dda2b2c0bba64b61b57679483fa7956a0d

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/newpage" element={<NewPage />} />
            <Route path="/healthinfo" element={<HealthInfo />} />
            <Route path="/management" element={<Management />} />
            <Route path="/mediDetail" element={<Medidetail />} />
            <Route path="/mediinfo" element={<MediInfo />} />
            <Route path="/healthnews" element={<HealthNews />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/service" element={<Service />} />
<<<<<<< HEAD
            <Route path="/healthdetail/:id" element={<HealthDetail />} />
=======
            <Route path="/memberinfo" element={<MemberInfo />} />
>>>>>>> 7a1bc9dda2b2c0bba64b61b57679483fa7956a0d
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
