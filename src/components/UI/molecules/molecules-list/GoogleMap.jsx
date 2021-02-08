import { React, useState } from 'react';
// import def from "../../../../../../../../AppData/Local/Microsoft/TypeScript/4.1/node_modules/ajv/dist/vocabularies/format/format";
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import Geocode from 'react-geocode';

Geocode.setApiKey = 'AIzaSyD_xBt2bNTPYZU5k4EbxIkTfsrsHgpZnaE';

function GoogleMapUse() {
  const [locate, setLocate] = useState({
    // const state={
    address: '',
    city: '',
    area: '',
    state: '',
    zoom: 15,
    height: '',
    mapPosition: {
      lat: 0,
      lng: 0,
    },
    markerPosition: {
      lat: 0,
      lng: 0,
    },
  });

  const getCity = (addressArray) => {
    let city = '';
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        'administrative_area_level_2' === addressArray[i].types[0]
      ) {
        city = addressArray[i].long_name;
        return city;
      }
    }
  };
  const getArea = (addressArray) => {
    let area = '';
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray.length; j++) {
          if (
            'sublocality_level_2' === addressArray[i].types[j] ||
            'locality' === addressArray[i].types[j]
          ) {
            area = addressArray[i].long_name;
            return area;
          }
        }
      }
    }
  };
  const getState = (addressArray) => {
    let state = '';
    for (let i = 0; i < addressArray.length; i++) {
      for (let i = 0; i < addressArray.length; i++) {
        if (
          addressArray[i].types[0] &&
          'administrative_area_level_1' === addressArray[i].types[0]
        ) {
          state = addressArray[i].long_name;
          return state;
        }
      }
    }
  };

  const onMarkerDragEnd = async (e) => {
    let newLat = e.latLng.lat();
    let newLng = e.latLng.lng();
    const res = await Geocode.fromLatLng(newLat, newLng);
    const address = res.results[0].formatted_address,
      addressArray = res.results[0].address_components,
      city = getCity(addressArray),
      area = getArea(addressArray),
      state = getState(addressArray);
    console.log(res);
    setLocate({
      address: address ? address : '',
      area: area ? area : '',
      city: city ? city : '',
      state: state ? state : '',
      markerPosition: {
        lat: newLat,
        lng: newLng,
      },
      mapPosition: {
        lat: newLat,
        lng: newLng,
      },
    });
    console.log('newLat', newLat);
  };

  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        // scrollwheel={false}
        minZoom={10}
        maxZoom={15}
        defaultZoom={8}
        defaultCenter={{
          lat: locate.mapPosition.lat,
          lng: locate.mapPosition.lng,
        }}
      >
        <Marker
          draggable={true}
          onDragEnd={onMarkerDragEnd}
          position={{
            lat: locate.markerPosition.lat,
            lng: locate.markerPosition.lng,
          }}
        >
          <InfoWindow>
            <div>hello</div>
          </InfoWindow>
        </Marker>
      </GoogleMap>
    )),
  );
  return (
    <>
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_xBt2bNTPYZU5k4EbxIkTfsrsHgpZnaE&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </>
  );
}

export default GoogleMapUse;
