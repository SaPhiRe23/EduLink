import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import TutorList from "./components/TutorList.jsx";
import "./index.css";

function Home() {
  return (
    <div className="page-container">
      <h2>Bienvenido a EduLink</h2>
      <p>Conecta estudiantes y tutores fácilmente.</p>
    </div>
  );
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Login />} />
        <Route path="/usuarios" element={<TutorList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
