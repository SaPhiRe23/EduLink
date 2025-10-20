from fastapi import APIRouter
from models.tutor import Tutor

router = APIRouter(prefix="/tutors", tags=["Tutores"])


tutors = [
    {"id": 1, "name": "Carlos Pérez", "subject": "Matemáticas", "email": "carlos@edulink.com"},
    {"id": 2, "name": "Laura Gómez", "subject": "Inglés", "email": "laura@edulink.com"},
    {"id": 3, "name": "Andrés Silva", "subject": "Física", "email": "andres@edulink.com"},
    {"id": 4, "name": "María Torres", "subject": "Programación", "email": "maria@edulink.com"},
]

@router.get("/")
def get_tutors():
    return tutors
