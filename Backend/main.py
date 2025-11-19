from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import users, tutors, sessions

app = FastAPI(title="EduLink API")

# Configuración CORS para conectar con el frontend (React/Vite)
origins = [
    "http://localhost:5173",
    "https://edu-link-kappa.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,     # ✅ ahora sí se usa la lista correcta
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir las rutas
app.include_router(users.router)
app.include_router(tutors.router)
app.include_router(sessions.router)

@app.get("/")
def root():
    return {"message": "Bienvenido a EduLink API"}
