from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import ReturnDocument

MONGO_URI = "mongodb+srv://aserranomendoza_db_user:jIZjqMyc2Ty0XIgp@cluster0.sbz0opo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = AsyncIOMotorClient(MONGO_URI)
db = client["Edu-Link"]  # nombre de tu base de datos


# ================================
#  GENERADOR DE IDs AUTOINCREMENTALES
# ================================
async def get_next_id(collection_name: str):
    counter = await db["counters"].find_one_and_update(
        {"_id": collection_name},
        {"$inc": {"seq": 1}},
        upsert=True,
        return_document=ReturnDocument.AFTER
    )

    return counter["seq"]
