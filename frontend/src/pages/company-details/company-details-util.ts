import { companyApi } from "../../services";

export const getLocationData = async (companyId: string, setCompanyLocations: Function) => {
  try {
    console.log("location data function being called", companyId);
    const companyLocations = await companyApi.getCompanyLocations(Number(companyId));
    setCompanyLocations(companyLocations);
  } catch (error) {
    console.error("Error fetching company details");
  }
};
