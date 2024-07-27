import pandas as pd
from exceptions.custom_exceptions import LocationNotFoundException

locations_df = pd.read_csv("data/locations.csv")


def get_locations_by_company_id(company_id: int):
    locations = locations_df[locations_df["company_id"] == company_id]
    if locations.empty:
        raise LocationNotFoundException(company_id)
    return locations.to_dict(orient="records")
