from fastapi import APIRouter, HTTPException
from models.user import User
from typing import List
from database import db

router = APIRouter(prefix="/users", tags=["Usuarios"])

@router.get("/", response_model=List[User])
async def get_users():
    users = await db.users.find().to_list(100)

    clean_users = []
    for u in users:
        u["id"] = str(u["_id"])
        del u["_id"]
        clean_users.append(u)

    return clean_users

@router.post("/", response_model=User)
async def create_user(user: User):
    existing = await db.users.find_one({"email": user.email})
    if existing:
        raise HTTPException(status_code=400, detail="El usuario ya existe")

    new_user = user.model_dump(exclude={"id"})
    result = await db.users.insert_one(new_user)

    new_user["id"] = str(result.inserted_id)

    return new_user
