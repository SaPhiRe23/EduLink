# models/tutor.py
from pydantic import BaseModel

class Tutor(BaseModel):
    tutorID: int
    userID: int
    name: str
    email: str
    subject: str
    bio: str
    rating: float
    schedules: str
