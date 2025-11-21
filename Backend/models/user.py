from pydantic import BaseModel, EmailStr

class User(BaseModel):
    userID: str
    name: str
    email: EmailStr
    role: str = "estudiante"
