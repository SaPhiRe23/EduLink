# models/session.py
from pydantic import BaseModel

class Session(BaseModel):
    sessionID: int
    tutorID: int
    userID: int
    topic: str
    date: str
