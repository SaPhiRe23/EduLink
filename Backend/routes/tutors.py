from fastapi import APIRouter
from typing import List
from models.tutor import Tutor
from database import db

router = APIRouter(prefix="/tutors", tags=["Tutores"])


@router.get("", response_model=List[Tutor])
async def get_tutors():
    tutors = await db.tutors.find().to_list(200)

    for t in tutors:
        if "_id" in t:
            del t["_id"]

    return tutors
