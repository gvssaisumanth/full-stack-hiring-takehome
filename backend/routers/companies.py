from fastapi import APIRouter, HTTPException
from services.company_service import get_all_companies, get_company_by_id
from exceptions.custom_exceptions import CompanyNotFoundException

router = APIRouter()


@router.get("/companies")
def read_companies():
    return get_all_companies()


@router.get("/companies/{company_id}")
def read_company(company_id: int):
    try:
        return get_company_by_id(company_id)
    except CompanyNotFoundException as e:
        raise HTTPException(status_code=404, detail=f"Company with ID {e.company_id} not found")
