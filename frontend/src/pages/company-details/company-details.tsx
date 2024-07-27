import React, { useState } from 'react';
import { Layout, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { MapComponent, LocationList, Location } from '../../components';
import { location as locations } from './locations-mock-data';
import './company-details.css';

const { Sider, Content } = Layout;

export const CompanyDetails: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [drawerVisible, setDrawerVisible] = useState(false);

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
      >
        <LocationList locations={locations} onSelectLocation={handleSelectLocation} />
      </Sider>
      <Layout>
        <Content className='map-content'>
          <Button
            className='menu-button'
            type='primary'
            icon={<MenuOutlined />}
            onClick={showDrawer}
          />
          <MapComponent locations={locations} selectedLocation={selectedLocation} />
          <Drawer
            title='Locations'
            placement='left'
            closable={true}
            onClose={closeDrawer}
            open={drawerVisible}
          >
            <LocationList locations={locations} onSelectLocation={handleSelectLocation} />
          </Drawer>
        </Content>
      </Layout>
    </Layout>
  );
};
