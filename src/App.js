import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./main";  // 파일명 대소문자 확인!
import About from "./About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;