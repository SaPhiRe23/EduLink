import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import TutorList from "./components/TutorList.jsx";
import TutorGrid from "./components/TutorGrid.jsx"; // ✅ nuevo componente para el home
import "./index.css";

function Home() {
  return (
    <div className="page-container">
      <TutorGrid /> {/* ✅ se muestra la lista de tutores como landing page */}
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
