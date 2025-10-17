import React, { useState } from "react";
import API from "../services/api";
import "./Login.css";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users", { name: name, email: email, role: "estudiante", password: "1234" });
      alert("Usuario registrado correctamente");
      setName("");
      setEmail("");
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
