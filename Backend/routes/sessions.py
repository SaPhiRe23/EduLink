from fastapi import APIRouter
from models.session import Session
from typing import List
from database import db, get_next_id

router = APIRouter(prefix="/sessions", tags=["Sesiones"])

@router.get("/", response_model=List[Session])
async def get_sessions():
    data = await db.sessions.find().to_list(200)
    for s in data:
        s.pop("_id", None)
    return data


@router.post("/", response_model=Session)
async def create_session(session: Session):

    session.sessionID = await get_next_id("sessions")

    new_s = session.model_dump()
    await db.sessions.insert_one(new_s)
    return new_s
