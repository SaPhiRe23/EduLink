import React, { useState } from "react";
import api from "../services/api";
import "./Login.css";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newUser = await api.createUser({ name, email });
      localStorage.setItem("user", JSON.stringify(newUser));
      alert(`Bienvenido, ${newUser.name}!`);
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      alert("Error al registrar usuario");
    }
  };

  return (
    <div className="login-container">
      <h2>Registro</h2>
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
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Registrarme</button>
      </form>
    </div>
  );
}
