from pydantic import BaseModel, EmailStr

class Tutor(BaseModel):
    name: str
    email: EmailStr
    subject: str
