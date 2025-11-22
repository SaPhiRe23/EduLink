from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import users, tutors, sessions

app = FastAPI(title="EduLink API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir las rutas
app.include_router(users.router)
app.include_router(tutors.router)
app.include_router(sessions.router)

@app.get("/")
def root():
    return {"message": "Bienvenido a EduLink API"}
