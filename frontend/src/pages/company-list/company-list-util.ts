import { companyApi } from "../../services";
import { ColumnsType } from "../../components";

const createColumns = (companyData: any[]): ColumnsType[] => {
  const columns: ColumnsType[] = [];
  const firstObject = companyData[0] || {};
  for (const key in firstObject) {
    let title = key;
    if (key === "company_id") {
      title = "ID";
    }
    const col = {
      title: title,
      dataIndex: key,
    };
    columns.push(col);
  }

  return columns;
};

export const getCompanyDataAndColumns = async (setCompanyData: Function, setColumns: Function) => {
  try {
    const response = await companyApi.getAllCompanies();
    const companyData = response;
    setCompanyData(companyData);
    const columns: ColumnsType[] = createColumns(companyData);
    setColumns(columns);
  } catch (err) {
    console.error("Error fetching company Data");
  }
};
