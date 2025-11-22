from fastapi import APIRouter, HTTPException
from typing import List
from models.user import User
from database import db, get_next_id

router = APIRouter(prefix="/users", tags=["Usuarios"])

@router.get("/", response_model=List[User])
async def get_users():
    users = await db.users.find().to_list(200)

    clean = []
    for u in users:
        u.pop("_id", None)
        clean.append(u)

    return clean


@router.post("/", response_model=User)
async def create_user(user: User):
    existing = await db.users.find_one({"email": user.email})
    if existing:
        raise HTTPException(status_code=400, detail="El usuario ya existe")

    # 🔥 Obtener un ID autoincremental seguro
    user.userID = await get_next_id("users")

    new_user = user.model_dump()
    await db.users.insert_one(new_user)

    return new_user
