from fastapi import APIRouter, HTTPException
from models.user import User
from typing import List

router = APIRouter(prefix="/users", tags=["Usuarios"])

# Simulación de base de datos en memoria
fake_users_db = []

@router.get("/", response_model=List[User])
def get_users():
    return fake_users_db

@router.post("/", response_model=User)
def create_user(user: User):
    for u in fake_users_db:
        if u.email == user.email:
            raise HTTPException(status_code=400, detail="El usuario ya existe")
    fake_users_db.append(user)
    return user
