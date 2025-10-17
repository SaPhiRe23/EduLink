from dotenv import load_dotenv
import os
from pymongo import MongoClient

load_dotenv()  # Carga el .env
MONGO_URL = os.getenv("MONGO_URL")  # Obtiene el valor del archivo .env
client = MongoClient(MONGO_URL)
db = client["edulink_db"]
