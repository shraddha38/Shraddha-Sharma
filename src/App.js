import React from "react";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import ResumeDoc from "./Components/Resume/ResumeDoc";

function App() {
  return (
    <Router>   
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumeDoc />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
