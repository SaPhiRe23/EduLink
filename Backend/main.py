# backend/main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from datetime import datetime

app = FastAPI(title="EduLink API")

# Habilitar CORS para permitir conexión desde React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----------- MODELOS -----------
class Tutor(BaseModel):
    id: int
    nombre: str
    especialidad: str
    tarifa: float

class Reserva(BaseModel):
    id: int
    tutor_id: int
    estudiante: str
    fecha: str
    hora: str

# ----------- DATOS SIMULADOS -----------
tutores = [
    Tutor(id=1, nombre="Laura Martínez", especialidad="Matemáticas", tarifa=40000),
    Tutor(id=2, nombre="Carlos Pérez", especialidad="Inglés", tarifa=35000),
    Tutor(id=3, nombre="María Gómez", especialidad="Física", tarifa=45000),
]

reservas: List[Reserva] = []

# ----------- ENDPOINTS -----------
@app.get("/")
def home():
    return {"mensaje": "API de EduLink funcionando"}

@app.get("/tutores", response_model=List[Tutor])
def obtener_tutores():
    return tutores

@app.post("/reservas", response_model=Reserva)
def crear_reserva(reserva: Reserva):
    reservas.append(reserva)
    return reserva

@app.get("/reservas", response_model=List[Reserva])
def listar_reservas():
    return reservas
