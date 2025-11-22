import React, { useState } from "react";
import api from "../services/api";
import "./Login.css";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  // Campos extras SOLO si el usuario es tutor
  const [subject, setSubject] = useState("");
  const [bio, setBio] = useState("");
  const [schedules, setSchedules] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        name,
        email,
        password,
        role,
      };

      // Si es tutor, agregar los extras
      if (role === "tutor") {
        userData.subject = subject;
        userData.bio = bio;
        userData.schedules = schedules.split(",").map((item) => item.trim());
      }

      const newUser = await api.createUser(userData);

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

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Estudiante</option>
          <option value="tutor">Tutor</option>
        </select>

        {/* FORMS EXTRAS SI ES TUTOR */}
        {role === "tutor" && (
          <div className="tutor-extra-fields">
            <input
              type="text"
              placeholder="Materia que enseñas"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />

            <textarea
              placeholder="Escribe una breve bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Horarios (separados por comas)"
              value={schedules}
              onChange={(e) => setSchedules(e.target.value)}
              required
            />
          </div>
        )}

        <button type="submit">Registrarme</button>
      </form>
    </div>
  );
}
