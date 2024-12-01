import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Features from "./components/Features";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Mypage from "./components/Mypage";
import HealthInfo from "./components/HealthInfo";
import NewPage from "./components/NewPage";
import Management from "./components/Management";
import Medidetail from "./components/Medidetail";
<<<<<<< HEAD
import MediInfo from "./components/MediInfo";
=======
import Symptom from "./components/Symptom";
>>>>>>> 71e0d05934cde821c36872b18b77613269074895

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
            <Route path="/newpage" element={<NewPage />} />
            <Route path="/healthinfo" element={<HealthInfo />} />
            <Route path="/management" element={<Management />} />
            <Route path="/mediDetail" element={<Medidetail />} />
<<<<<<< HEAD
            <Route path="/mediinfo" element={<MediInfo />} />
=======
            <Route path="/symptom" element={<Symptom />} />
>>>>>>> 71e0d05934cde821c36872b18b77613269074895
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
