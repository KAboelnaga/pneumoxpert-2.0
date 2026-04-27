import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import UploadXray from './Pages/UploadXray.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import LoginSignup from './Pages/Login-Signup.jsx';
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/UploadXray" element={<UploadXray />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/LoginSignup" element={<LoginSignup />} />
        </Routes>
    </div>
  );
}