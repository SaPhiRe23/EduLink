from fastapi import APIRouter
from models.session import Session
from typing import List
from database import db

router = APIRouter(prefix="/sessions", tags=["Sesiones"])

@router.get("/", response_model=List[Session])
async def get_sessions():
    sessions = await db.sessions.find().to_list(100)
    for s in sessions:
        s["_id"] = str(s["_id"])
    return sessions

@router.post("/", response_model=Session)
async def create_session(session: Session):
    new_session = session.model_dump()
    result = await db.sessions.insert_one(new_session)

    new_session["_id"] = str(result.inserted_id)
    return new_session
