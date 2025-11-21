from fastapi import APIRouter
from models.tutor import Tutor
from database import db

router = APIRouter(prefix="/tutors", tags=["Tutores"])

default_tutors = [
    {"name": "Carlos Pérez", "subject": "Matemáticas", "email": "carlos@edulink.com", "bio": "Tutor con 10 años de experiencia", "rating": 4.8, "schedules": ["Lunes 2pm"]},
    {"name": "Laura Gómez", "subject": "Inglés", "email": "laura@edulink.com", "bio": "Especialista en idiomas", "rating": 4.7, "schedules": ["Martes 3pm"]},
    {"name": "Andrés Silva", "subject": "Física", "email": "andres@edulink.com", "bio": "Ingeniero Físico", "rating": 4.9, "schedules": ["Miércoles 4pm"]},
    {"name": "María Torres", "subject": "Programación", "email": "maria@edulink.com", "bio": "Desarrolladora Full Stack", "rating": 4.8, "schedules": ["Jueves 10am"]},
]

@router.get("/")
async def get_tutors():
    tutors = await db.tutors.find().to_list(100)

    # Si no hay tutores, insertamos los predeterminados
    if len(tutors) == 0:
        await db.tutors.insert_many(default_tutors)
        tutors = await db.tutors.find().to_list(100)

    # Convertir ID
    for t in tutors:
        t["_id"] = str(t["_id"])

    return tutors
