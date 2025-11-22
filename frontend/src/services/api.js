// src/services/api.js
const API_URL = "https://edulink-ast6.onrender.com";

async function getTutors() {
  const response = await fetch(`${API_URL}/tutors`);
  return await response.json();
}

async function createUser(userData) {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return await response.json();
}

export default { getTutors, createUser };
