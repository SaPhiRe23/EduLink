from pydantic import BaseModel

class Session(BaseModel):
    sessionID: str
    tutor: str
    student: str
    topic: str
    date: str
