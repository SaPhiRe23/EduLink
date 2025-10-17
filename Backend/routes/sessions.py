from fastapi import APIRouter
from models.session import Session
from typing import List

router = APIRouter(prefix="/sessions", tags=["Sesiones"])

fake_sessions_db = []

@router.get("/", response_model=List[Session])
def get_sessions():
    return fake_sessions_db

@router.post("/", response_model=Session)
def create_session(session: Session):
    fake_sessions_db.append(session)
    return session
