from fastapi import APIRouter, HTTPException
from services.location_service import get_locations_by_company_id
from exceptions.custom_exceptions import LocationNotFoundException

router = APIRouter()


@router.get("/companies/{company_id}/locations")
def read_locations(company_id: int):
    try:
        return get_locations_by_company_id(company_id)
    except LocationNotFoundException as e:
        raise HTTPException(status_code=404, detail=f"Locations for Company ID {e.company_id} not found")
