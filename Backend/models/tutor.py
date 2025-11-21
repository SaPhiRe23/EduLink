from pydantic import BaseModel, EmailStr

class Tutor(BaseModel):
    tutorID: str
    userID: str
    name: str
    email: EmailStr
    subject: list[str]
    bio: str
    rating: float
    TutorDays: dict[str, list[str]]  # e.g., {"Monday": ["10:00-12:00", "14:00-16:00"]}
