import React from 'react';
import { List } from 'antd';
import './location-list.css';

export interface Location {
  location_id: number;
  company_id: number;
  name: string;
  address?: string;
  latitude: number;
  longitude: number;
}

interface LocationListProps {
  locations: Location[];
  onSelectLocation: (location: Location) => void;
}

export const LocationList: React.FC<LocationListProps> = ({ locations, onSelectLocation }) => {
  return (
    <div className='location-list'>
      <h3>Locations</h3>
      <List
        dataSource={locations}
        renderItem={(location) => (
          <>
            <List.Item onClick={() => onSelectLocation(location)}>
              {location.name}
              <br />
              {location.address}
            </List.Item>
          </>
        )}
      />
    </div>
  );
};
