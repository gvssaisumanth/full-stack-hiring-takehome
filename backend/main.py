from fastapi import FastAPI
from routers import companies, locations
from utils.logger import logger

app = FastAPI()

app.include_router(companies.router)
app.include_router(locations.router)


@app.on_event("startup")
async def startup_event():
    logger.info("Starting up the application...")


@app.on_event("shutdown")
async def shutdown_event():
    logger.info("Shutting down the application...")
