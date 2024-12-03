import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
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
import MediInfo from "./components/MediInfo";
import Symptom from "./components/Symptom";
import Cough from "./components/Cough";
import Rush from "./components/Rush";
import Fever from "./components/Fever";
import Muscle_pain from "./components/Muscle_pain";
import Insomnia from "./components/Insomnia";
import Constipation from "./components/Constipation";
<<<<<<< HEAD
=======
import HealthNews from "./components/HealthNews";
import Chatbot from "./components/Chatbot";
<<<<<<< HEAD
import Service from "./components/Service";
=======
>>>>>>> acb42de921121ade2b84ba5ac5f7210ffee94cfa
>>>>>>> 6c396afcf8e87354a0b8d3600c8fb05d1c1bb9da

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
            <Route path="/mediinfo" element={<MediInfo />} />
            <Route path="/symptom" element={<Symptom />} />   
            <Route path="/cough" element={<Cough />} />
            <Route path="/rash" element={<Rush />} />
            <Route path="/fever" element={<Fever />} />      
            <Route path="/muscle_pain" element={<Muscle_pain  />} />   
            <Route path="/insomnia" element={<Insomnia  />} />  
            <Route path="/constipation" element={<Constipation  />} />
<<<<<<< HEAD
=======
            <Route path="/healthnews" element={<HealthNews />} />
            <Route path="/chatbot" element={<Chatbot />} />
<<<<<<< HEAD
            <Route path="/service" element={<Service />} />
=======
>>>>>>> acb42de921121ade2b84ba5ac5f7210ffee94cfa
>>>>>>> 6c396afcf8e87354a0b8d3600c8fb05d1c1bb9da
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
