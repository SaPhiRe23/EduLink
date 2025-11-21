from fastapi import APIRouter, HTTPException
from models.user import User
from typing import List
from database import db

router = APIRouter(prefix="/users", tags=["Usuarios"])

# Obtener todos los usuarios
@router.get("/", response_model=List[User])
async def get_users():
    users = await db.users.find().to_list(100)
    for u in users:
        u["_id"] = str(u["_id"])  # Convertir ObjectId a string
    return users

# Crear usuario
@router.post("/", response_model=User)
async def create_user(user: User):
    # Verificar si ya existe
    existing = await db.users.find_one({"email": user.email})
    if existing:
        raise HTTPException(status_code=400, detail="El usuario ya existe")

    new_user = user.model_dump()
    result = await db.users.insert_one(new_user)

    new_user["_id"] = str(result.inserted_id)
    return new_user
