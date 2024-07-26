import React, { useState, useCallback, ReactNode, useEffect } from 'react';
import { Table, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash/debounce';
import './custom-table.css';

export interface ColumnsType {
  /**
   * title of the column
   */
  title: string;
  /**
   * unique accessor
   */
  dataIndex: string;
  /**
   * render function
   */
  render?: (text: any, record?: any, index?: any) => ReactNode;
}

export interface CustomTableProps {
  data: any[];
  columns: ColumnsType[];
}

export const CustomTable: React.FC<CustomTableProps> = ({
  data: initialData,
  columns: columns,
}) => {
  console.log('initialData', initialData);
  const [data, setData] = useState(initialData);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  console.log('data', data);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const handleSearch = (value: string) => {
    setSearchText(value);
    const filteredData = initialData.filter((item) =>
      Object.values(item).some((val) => String(val).toLowerCase().includes(value.toLowerCase())),
    );
    setData(filteredData);
  };

  /**
   * We debounce the input onChange events, if not it could update the state variable over and over
   */
  const debouncedSearch = useCallback(debounce(handleSearch, 300), []);

  const onRowClick = (record: any) => {
    navigate(`/details/${record.company_id}`);
  };

  return (
    <div className='custom-table-container'>
      <div className='search-container'>
        <Input
          className='custom-search-input'
          placeholder='Search...'
          value={searchText}
          onChange={(e) => debouncedSearch(e.target.value)}
        />
      </div>
      <Table
        rowKey={'company_id'}
        columns={columns}
        dataSource={data}
        onRow={(record) => ({
          onClick: () => onRowClick(record),
        })}
      />
    </div>
  );
};
