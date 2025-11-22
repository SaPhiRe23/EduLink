import React, { useEffect, useState } from "react";
import api from "../services/api";
import "./TutorList.css";

export default function TutorList() {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const data = await api.getTutors();

        const formatted = data.map(t => ({
          ...t,
          id: t._id || t.id
        }));

        setTutors(formatted);
      } catch (error) {
        console.error("Error al obtener tutores:", error);
        alert("Error al obtener tutores");
      }
    };

    fetchTutors();
  }, []);

  return (
    <div className="tutor-list-container">
      <h2>Lista de Tutores</h2>
      <ul>
        {tutors.map((tutor) => (
          <li key={tutor.id}>
            <strong>{tutor.name}</strong> - {tutor.subject} ({tutor.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
