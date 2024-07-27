import pandas as pd
from models.company import Company
from exceptions.custom_exceptions import CompanyNotFoundException

companies_df = pd.read_csv("data/companies.csv")


def get_all_companies():
    return companies_df.to_dict(orient="records")


def get_company_by_id(company_id: int):
    company = companies_df[companies_df["company_id"] == company_id]
    if company.empty:
        raise CompanyNotFoundException(company_id)
    return company.to_dict(orient="records")[0]
