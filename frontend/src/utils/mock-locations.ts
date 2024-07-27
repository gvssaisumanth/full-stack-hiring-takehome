import { Location } from "./interfaces";

export const mockLocations: Location[] = [
  {
    location_id: 1,
    company_id: 101,
    name: "Location 1",
    address: "123 Main St",
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    location_id: 2,
    company_id: 102,
    name: "Location 2",
    address: "456 Elm St",
    latitude: 34.0522,
    longitude: -118.2437,
  },
  { location_id: 3, company_id: 103, name: "Location 3", latitude: 37.7749, longitude: -122.4194 },
];
