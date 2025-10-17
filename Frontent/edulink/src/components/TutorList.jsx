import API from "../services/api";

export default function TutorList() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    API.get("/users").then((res) => setUsuarios(res.data));
  }, []);

  return (
    <div className="p-4 w-80 mx-auto">
      <h2 className="text-lg font-bold mb-3">Usuarios registrados</h2>
      {usuarios.map((u) => (
        <div key={u._id} className="border rounded p-2 mb-2 bg-gray-50">
          <p>{u.nombre} — {u.correo}</p>
        </div>
      ))}
    </div>
  );
}
