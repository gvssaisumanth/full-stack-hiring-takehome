class CompanyNotFoundException(Exception):
    def __init__(self, company_id: int):
        self.company_id = company_id


class LocationNotFoundException(Exception):
    def __init__(self, company_id: int):
        self.company_id = company_id
