import React, { useState } from "react";
import API from "../services/api";
import "./Login.css";

export default function Login() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users", {
        nombre,
        correo,
        rol: "estudiante",
        password: "1234",
      });
      alert("Usuario registrado correctamente");
      setNombre("");
      setCorreo("");
    } catch (error) {
      alert(error.response?.data?.detail || "Error al registrar el usuario");
    }
  };

  return (
    <div className="login-container">
      <h2>Registro EduLink</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
