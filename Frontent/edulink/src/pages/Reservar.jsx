import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Reservar() {
  const { id } = useParams();
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sesión reservada con el tutor ${id} el ${fecha} a las ${hora}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Reservar sesión</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow w-80">
        <label className="block mb-2">Fecha:</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="border w-full p-2 mb-3 rounded"
        />
        <label className="block mb-2">Hora:</label>
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          className="border w-full p-2 mb-4 rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
        >
          Confirmar reserva
        </button>
      </form>
    </div>
  );
}
