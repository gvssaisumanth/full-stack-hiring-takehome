import React, { useEffect, useState } from 'react';
import { Layout, Drawer, Button } from 'antd';
import { useParams } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

import { MapComponent, LocationList } from '../../components';
import { Location } from '../../utils/interfaces';

import { location as locations } from './locations-mock-data';
import { getLocationData } from './company-details-util';
import './company-details.css';

const { Sider, Content } = Layout;

export const CompanyDetails: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [companyLocations, setCompanyLocations] = useState<Location[]>([]);

  useEffect(() => {
    if (companyId) getLocationData(companyId, setCompanyLocations);
  }, []);

  const handleSelectLocation = (location: Location) => {
    setSelectedLocation(location);
    setDrawerVisible(false);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <Layout className='company-details'>
      <Sider
        width={300}
        className='location-list-sider'
        breakpoint='lg'
        collapsedWidth='0'
        onBreakpoint={(broken) => {
          if (broken) {
            setDrawerVisible(false);
          }
        }}
        trigger={null}
        collapsible
      >
        <LocationList locations={companyLocations} onSelectLocation={handleSelectLocation} />
      </Sider>
      <Layout>
        <Content className='map-content'>
          <Button
            className='menu-button'
            type='primary'
            icon={<MenuOutlined />}
            onClick={showDrawer}
          />
          <MapComponent locations={companyLocations} selectedLocation={selectedLocation} />
          <Drawer
            title='Locations'
            placement='left'
            closable={true}
            onClose={closeDrawer}
            open={drawerVisible}
            styles={{
              body: { padding: 0 },
            }}
          >
            <LocationList locations={locations} onSelectLocation={handleSelectLocation} />
          </Drawer>
        </Content>
      </Layout>
    </Layout>
  );
};
