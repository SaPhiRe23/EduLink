from fastapi import FastAPI
from routes import users, tutors, sessions
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="EduLink API")

# CORS para conectar con el frontend React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Cambia "*" por la URL de Vercel si quieres seguridad
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rutas
app.include_router(users.router)
app.include_router(tutors.router)
app.include_router(sessions.router)

@app.get("/")
def root():
    return {"message": "Bienvenido a EduLink API"}
