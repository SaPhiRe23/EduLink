import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Tutores from "./pages/Tutores";
import Reservar from "./pages/Reservar";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tutores" element={<Tutores />} />
      <Route path="/reservar/:id" element={<Reservar />} />
    </Routes>
  </BrowserRouter>
);
