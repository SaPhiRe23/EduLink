import { Link } from "react-router-dom";

const tutores = [
  { id: 1, nombre: "Laura Martínez", especialidad: "Matemáticas", tarifa: 40000 },
  { id: 2, nombre: "Carlos Pérez", especialidad: "Inglés", tarifa: 35000 },
  { id: 3, nombre: "María Gómez", especialidad: "Física", tarifa: 45000 },
];

export default function Tutores() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Tutores disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tutores.map((tutor) => (
          <div
            key={tutor.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{tutor.nombre}</h2>
            <p>Especialidad: {tutor.especialidad}</p>
            <p>Tarifa: ${tutor.tarifa.toLocaleString()} / hora</p>
            <Link
              to={`/reservar/${tutor.id}`}
              className="mt-3 inline-block bg-green-600 text-white px-3 py-1 rounded"
            >
              Reservar sesión
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
