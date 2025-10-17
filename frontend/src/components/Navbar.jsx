import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>EduLink</h1>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/registro">Registro</Link>
        <Link to="/usuarios">Usuarios</Link>
      </div>
    </nav>
  );
}
