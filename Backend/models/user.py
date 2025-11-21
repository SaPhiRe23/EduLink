# models/user.py
from pydantic import BaseModel

class User(BaseModel):
    userID: int
    name: str
    email: str
    password: str
    role: str
