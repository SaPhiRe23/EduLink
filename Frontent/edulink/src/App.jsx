import Navbar from "./components/Navbar";
import Login from "./components/Login";
import TutorList from "./components/TutorList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Login />
      <TutorList />
    </div>
  );
}

export default App;
