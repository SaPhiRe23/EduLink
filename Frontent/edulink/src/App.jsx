import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        EduLink – Plataforma de Tutorías
      </h1>
      <div className="space-x-4">
        <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Iniciar sesión
        </Link>
        <Link to="/tutores" className="bg-green-600 text-white px-4 py-2 rounded-lg">
          Ver tutores
        </Link>
      </div>
    </div>
  );
}
