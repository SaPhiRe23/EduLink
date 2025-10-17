import React, { useEffect, useState } from "react";
import API from "../services/api";
import "./TutorList.css";

export default function TutorList() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
  API.get("/users")
    .then((res) => setUsuarios(res.data))
    .catch(() => alert("Error al obtener usuarios"));
}, []);


  return (
    <div className="tutor-list-container">
      <h2>Usuarios registrados</h2>
      {usuarios.length === 0 ? (
        <p>No hay usuarios aún.</p>
      ) : (
        <ul>
          {usuarios.map((u, i) => (
            <li key={i}>
              <strong>{u.name}</strong> — {u.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
