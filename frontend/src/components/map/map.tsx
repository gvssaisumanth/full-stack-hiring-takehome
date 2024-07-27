import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { LatLngBoundsExpression, LatLngExpression } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';

import { Location } from '../../utils/interfaces';

import './map.css';

interface MapComponentProps {
  locations: Location[];
  selectedLocation: Location | null;
}

const UpdateMapBounds: React.FC<{ locations: Location[]; selectedLocation: Location | null }> = ({
  locations,
  selectedLocation,
}) => {
  const map = useMap();

  useEffect(() => {
    if (selectedLocation) {
      map.setView([selectedLocation.latitude, selectedLocation.longitude], 15);
    } else if (locations.length > 0) {
      const bounds: LatLngBoundsExpression = locations.map(
        (location) => [location.latitude, location.longitude] as [number, number],
      );
      map.fitBounds(bounds);

      const latitudes = locations.map((location) => location.latitude);
      const longitudes = locations.map((location) => location.longitude);
      const centroid: LatLngExpression = [
        latitudes.reduce((a, b) => a + b, 0) / latitudes.length,
        longitudes.reduce((a, b) => a + b, 0) / longitudes.length,
      ];

      let zoomLevel = map.getBoundsZoom(bounds);

      const width = window.innerWidth;
      if (locations.length === 1) {
        zoomLevel = 15;
      } else {
        if (width < 600) {
          zoomLevel = Math.min(zoomLevel, 8);
        } else if (width < 1200) {
          zoomLevel = Math.min(zoomLevel, 9);
        } else {
          zoomLevel = Math.min(zoomLevel, 10);
        }
      }

      map.setView(centroid, zoomLevel);
    }
  }, [locations, map, selectedLocation]);

  return null;
};

export const MapComponent: React.FC<MapComponentProps> = ({ locations, selectedLocation }) => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={1}
      maxZoom={18}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup>
        {locations.map((location) => (
          <Marker
            key={location.location_id}
            // icon={customIcon}
            position={[location.latitude, location.longitude]}
          >
            <Popup>
              <strong>Company: {location.name}</strong>
              <br />
              Location: {location.address}
              <br />
              Company ID: {location.company_id}
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
      <UpdateMapBounds locations={locations} selectedLocation={selectedLocation} />
    </MapContainer>
  );
};
