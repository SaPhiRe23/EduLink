from fastapi import APIRouter
from models.tutor import Tutor
from typing import List
from database import db, get_next_id

router = APIRouter(prefix="/tutors", tags=["Tutores"])

@router.get("/", response_model=List[Tutor])
async def get_tutors():
    data = await db.tutors.find().to_list(200)
    for t in data:
        t.pop("_id", None)
    return data


@router.post("/", response_model=Tutor)
async def create_tutor(tutor: Tutor):

    tutor.tutorID = await get_next_id("tutors")

    new_tutor = tutor.model_dump()
    await db.tutors.insert_one(new_tutor)
    return new_tutor
