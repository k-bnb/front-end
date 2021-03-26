import GoogleMapReact from 'google-map-react';
import React, { useState } from 'react';
import styled from 'styled-components';
import '../../index.css';
const MapContainerStyle = styled.section`
  width: 60%;
  /* background-color: blue; */
  flex-grow: 6;
`;

const AnyReatComponent = ({ text }) => <div>{text}</div>;

const MapContainer = () => {
  const [center, setCenter] = useState({
    lat: 37.535984,
    lng: 126.991705,
  });
  return (
    <MapContainerStyle>
      <h1 className="readable-hidden">숙소 상세 위치</h1>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDi2VswS8ZRJ3Vk6aDl0Mx3RbxI27GeXbQ' }}
        defaultCenter={center}
        defaultZoom={18}
        hoverDistance={20}
        // style={{ backgroundColor: 'red' }}
      >
        <AnyReatComponent lat={37.535984} lng={126.991705} text="My Marker" />
      </GoogleMapReact>
    </MapContainerStyle>
  );
};

export default MapContainer;
