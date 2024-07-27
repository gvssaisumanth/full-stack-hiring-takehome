import { apiClient } from "./api";

export interface Company {
  id: number;
  name: string;
  industry: string;
  description?: string;
}

export interface Location {
  location_id: number;
  company_id: number;
  name: string;
  address?: string;
  latitude: number;
  longitude: number;
}

export const getAllCompanies = async (): Promise<Company[]> => {
  const response = await apiClient.get("/companies");
  return response.data;
};

export const getCompanyById = async (companyId: number): Promise<Company> => {
  const response = await apiClient.get<Company>(`/companies/${companyId}`);
  return response.data;
};

export const getCompanyLocations = async (companyId: number): Promise<Location[]> => {
  console.log("company_id", companyId);
  const response = await apiClient.get<Location[]>(`/companies/${companyId}/locations`);
  console.log("data", response);
  return response.data;
};
