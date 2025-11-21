from fastapi import APIRouter
from models.tutor import Tutor
from typing import List
from database import db

router = APIRouter(prefix="/tutors", tags=["Tutores"])

@router.get("/", response_model=List[Tutor])
async def get_tutors():
    tutors = await db.tutors.find().to_list(100)
    for t in tutors:
        t["_id"] = str(t["_id"])
    return tutors

@router.post("/", response_model=Tutor)
async def create_tutor(tutor: Tutor):
    new_tutor = tutor.model_dump()
    result = await db.tutors.insert_one(new_tutor)

    new_tutor["_id"] = str(result.inserted_id)
    return new_tutor
