from fastapi import APIRouter, HTTPException
from typing import List
from models.user import User
from models.tutor import Tutor
from database import db, get_next_id

router = APIRouter(prefix="/users", tags=["Usuarios"])


@router.get("/", response_model=List[User])
async def get_users():
    users = await db.users.find().to_list(200)

    for u in users:
        if "_id" in u:
            del u["_id"]

    return users


@router.post("/", response_model=User)
async def create_user(user: User):
    # Verifica email único
    existing = await db.users.find_one({"email": user.email})
    if existing:
        raise HTTPException(status_code=400, detail="El usuario ya existe")

    # Crear userID autoincremental
    user.userID = await get_next_id("users")

    user_data = user.model_dump()
    await db.users.insert_one(user_data)

    # ======================
    # SI ES TUTOR, CREAR TUTOR
    # ======================
    if user.role == "tutor":

        tutor_data = Tutor(
            tutorID=await get_next_id("tutors"),
            userID=user.userID,
            name=user.name,
            email=user.email,
            subject="",
            bio="",
            rating=0.0,
            schedules=""
        ).model_dump()

        await db.tutors.insert_one(tutor_data)

    return user_data
