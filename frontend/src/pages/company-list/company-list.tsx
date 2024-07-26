import React, { useEffect, useState } from 'react';

import { ColumnsType, CustomTable } from '../../components';

import { getCompanyDataAndColumns } from './company-list-util';

import './company-list.css';

export const CompanyList: React.FC = () => {
  const [companyData, setCompanyData] = useState<any[]>([]);
  const [columns, setColumns] = useState<ColumnsType[]>([]);

  useEffect(() => {
    getCompanyDataAndColumns(setCompanyData, setColumns);
  }, []);

  return (
    <div className='company-list-container'>
      <CustomTable data={companyData} columns={columns} />
    </div>
  );
};
