from pydantic import BaseModel


class Location(BaseModel):
    location_id: int
    company_id: int
    name: str
    address: str
    latitude: float
    longitude: float
