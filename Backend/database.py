from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URI = "mongodb+srv://aserranomendoza_db_user:jIZjqMyc2Ty0XIgp@cluster0.sbz0opo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = AsyncIOMotorClient(MONGO_URI)
db = client["tutorias_db"]  # nombre de tu base de datos
