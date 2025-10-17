import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000", // Cambia si tu backend está en otra URL
});

export default API;
