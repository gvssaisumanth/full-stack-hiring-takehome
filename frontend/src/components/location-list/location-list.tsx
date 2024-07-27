import React from 'react';
import { List } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { Location } from '../../utils/interfaces';
import './location-list.css';

interface LocationListProps {
  locations: Location[];
  onSelectLocation: (location: Location) => void;
}

export const LocationList: React.FC<LocationListProps> = ({ locations, onSelectLocation }) => {
  const navigate = useNavigate();

  return (
    <div className='location-list'>
      <div className='back-button' onClick={() => navigate('/')}>
        <ArrowLeftOutlined /> <span>Back</span>
      </div>
      {/* <h3>All Available locations for {locations && locations[0].name}</h3> */}
      <List
        dataSource={locations}
        renderItem={(location) => (
          <List.Item onClick={() => onSelectLocation(location)}>
            <List.Item.Meta
              className='location-list'
              title={location.name}
              description={location.address || 'No address available'}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
