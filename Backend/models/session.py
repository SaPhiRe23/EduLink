from pydantic import BaseModel

class Session(BaseModel):
    tutor: str
    student: str
    topic: str
    date: str
