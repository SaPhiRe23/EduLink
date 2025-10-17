from fastapi import APIRouter, HTTPException
from models.user import User

router = APIRouter(prefix="/users", tags=["Usuarios"])

# Base de datos temporal (mock)
fake_users_db = []

@router.get("/")
def listar_usuarios():
    return fake_users_db

@router.post("/")
def crear_usuario(user: User):
    # Verifica si ya existe
    for u in fake_users_db:
        if u.correo == user.correo:
            raise HTTPException(status_code=400, detail="El usuario ya existe")
    fake_users_db.append(user)
    return {"message": "Usuario creado correctamente"}
