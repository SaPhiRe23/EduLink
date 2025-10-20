import React, { useEffect, useState } from "react";
import api from "../services/api";
import "./TutorGrid.css";

export default function TutorGrid() {
  const [tutors, setTutors] = useState([]);
  const [selectedTutor, setSelectedTutor] = useState(null);

  // Cargar tutores desde el backend
  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const data = await api.getTutors();
        setTutors(data);
      } catch (error) {
        console.error("Error al obtener tutores:", error);
        alert("Error al obtener tutores");
      }
    };

    fetchTutors();
  }, []);

  // Manejar selección de tarjeta
  const handleCardClick = (id) => {
    setSelectedTutor(selectedTutor === id ? null : id);
  };

  // Mostrar alerta cuando se confirma selección
  const handleConfirmClick = (tutor) => {
    alert(`Has seleccionado a ${tutor.name}, materia: ${tutor.subject}`);
  };

  return (
    <div className="tutor-grid-container">
      <h2 className="tutor-title">Nuestros Tutores</h2>
      <div className="tutor-grid">
        {tutors.map((tutor) => (
          <div
            key={tutor.id}
            className={`tutor-card ${selectedTutor === tutor.id ? "expanded" : ""}`}
            onClick={() => handleCardClick(tutor.id)}
          >
            <h3>{tutor.name}</h3>
            <p>{tutor.subject}</p>

            {selectedTutor === tutor.id && (
              <div className="tutor-info">
                <hr />
                <p><strong>Correo:</strong> {tutor.email}</p>
                <p><strong>Materia:</strong> {tutor.subject}</p>
                <button
                  className="select-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // evita que cierre el card al hacer clic
                    handleConfirmClick(tutor);
                  }}
                >
                  Seleccionar Tutor
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
