// import axios from "axios";
import { ColumnsType } from "../../components";
import { companiesData } from "./mock-data";

const createColumns = (companyData: any[]): ColumnsType[] => {
  const columns: ColumnsType[] = [];
  const firstObject = companyData[0] || {};
  for (const key in firstObject) {
    const col = {
      title: key,
      dataIndex: key,
    };
    columns.push(col);
  }

  return columns;
};

export const getCompanyDataAndColumns = async (setCompanyData: Function, setColumns: Function) => {
  try {
    // const response = await axios.get("https://dummyjson.com/quotes");
    const companyData = companiesData;
    setCompanyData(companyData);
    const columns: ColumnsType[] = createColumns(companyData);
    setColumns(columns);
  } catch (err) {
    console.log("error");
  }
};
