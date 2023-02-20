import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chatbot from "./Chatbot.js";
import Home from "./Home.js";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot/:name" element={<Chatbot />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
