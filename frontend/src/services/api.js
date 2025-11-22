const API_URL = "https://edulink-ast6.onrender.com";

// -----------------------------
// Obtener lista de tutores
// -----------------------------
async function getTutors() {
  const response = await fetch(`${API_URL}/tutors/`);
  if (!response.ok) throw new Error("Error al obtener tutores");
  return await response.json();
}

// -----------------------------
// Obtener lista de usuarios
// -----------------------------
async function getUsers() {
  const response = await fetch(`${API_URL}/users/`);
  if (!response.ok) throw new Error("Error al obtener usuarios");
  return await response.json();
}

// -----------------------------
// Crear usuario (estudiante o tutor)
// -----------------------------
async function createUser(userData) {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!response.ok) throw new Error("Error al crear usuario");

  const newUser = await response.json();

  if (userData.role === "tutor") {
    const tutorPayload = {
      userID: newUser.userID,
      name: newUser.name,
      email: newUser.email,
      subject: userData.subject,
      bio: userData.bio,
      schedules: userData.schedules,
      rating: 0,
    };

    await createTutor(tutorPayload);
  }

  return newUser;
}

// -----------------------------
// Crear tutor individual
// -----------------------------
async function createTutor(tutorData) {
  const response = await fetch(`${API_URL}/tutors`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tutorData),
  });

  if (!response.ok) throw new Error("Error al crear tutor");
  return await response.json();
}

export default { 
  getTutors,
  createUser,
  createTutor,
  getUsers
};
