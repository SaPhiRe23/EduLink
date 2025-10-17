from fastapi import APIRouter
from models.tutor import Tutor
from typing import List

router = APIRouter(prefix="/tutors", tags=["Tutores"])

fake_tutors_db = []

@router.get("/", response_model=List[Tutor])
def get_tutors():
    return fake_tutors_db

@router.post("/", response_model=Tutor)
def create_tutor(tutor: Tutor):
    fake_tutors_db.append(tutor)
    return tutor
