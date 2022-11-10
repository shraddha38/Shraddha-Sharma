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
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import Learning from "./Learning";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumeDoc />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
