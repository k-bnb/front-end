// import { Map, GoogleApiWrapper }from 'google-maps-react'
// import React from "react";

// // const MapRender = () => {
// //   const mapStyles = {
// //     width: '100%',
// //     height: '100%',
// //   };
// //   return(
// //     <Map
// //       google={this.props.google}
// //       zoom={15}
// //       style={mapStyles}
// //       initialCenter={{lat:0,lng:0}}
// //     />
// //   );
// // };

// // export default GoogleApiWrapper({
// //   apiKey: 'AIzaSyCRuYHIxEItMlR_NLX2bhph3N-mcG7DFs0'
// // })(MapRender);

// class FindAddressPresenter extends React.Component {
//   render() {
//     return (
//       <div className={"FindAddressPresenter"}>
//         <Map google={this.props.google} zoom={14}>
//           {/* <Marker name={"Current location"} /> */}
//           {/* <InfoWindow>
//             <div>
//               <h1>test</h1>
//             </div>
//           </InfoWindow> */}
//         </Map>
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCRuYHIxEItMlR_NLX2bhph3N-mcG7DFs0'
// })(FindAddressPresenter);

/* const FakeBox = () => {
  return(
    <div className="FakeBox">
      <h1>지도가 들어갈 자리입니다.</h1>
    </div>
  )
}

export default FakeBox; */

import { useEffect, useState } from './react';
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from './react-google-maps';
import Geocode from './react-geocode';
import AutoComplete from './react-google-autocomplete';
import Filedata from './Filedatacomponent';
// Geocode.setApiKey('AIzaSyCRuYHIxEItMlR_NLX2bhph3N-mcG7DFs0');
function App() {
  const [locate, setLocate] = useState({
    address: '',
    city: '',
    area: '',
    state: '',
    zoom: 15,
    height: 400,
    mapPosition: {
      lat: 0,
      lng: 0,
    },
    markerPosition: {
      lat: 0,
      lng: 0,
    },
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // 위치와 이 위치 이후에 현재 위치를 가져올 수 있다. 위도와 경도를 사용하므로 이 값을 먼저 입력한다.
        setLocate(
          {
            mapPosition: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            markerPosition: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          },
          async () => {
            const res = await Geocode.fromLatLng(
              position.coords.latitude,
              position.coords.longitude,
            );
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
            });
          },
        );
      });
    }
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
  const onPlaceSelected = (place) => {
    console.log(place);
    const address = place.formatted_address,
      addressArray = place.address_components,
      city = getCity(addressArray),
      area = getArea(addressArray),
      state = getState(addressArray),
      newLat = place.geomety.location.lat(),
      newLng = place.geomety.location.lng();
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
  };
  const ok = 'dalu';
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{
          lat: locate.mapPosition.lat,
          lng: locate.mapPosition.lng,
        }}
      >
        <Marker
          draggable={true}
          // onDragEnd={onMarkerDragEnd}
          label="dsgsdg"
          position={{
            lat: locate.markerPosition.lat,
            lng: locate.markerPosition.lng,
          }}
          icon={{
            // url: '/2531376.svg',
            scaledSize: new window.google.maps.Size(25, 25),
          }}
        >
          <InfoWindow>
            <div>hello</div>
          </InfoWindow>
        </Marker>
        <Marker
          draggable={true}
          label={ok}
          position={{
            lat: locate.markerPosition.lat,
            lng: locate.markerPosition.lng,
          }}
          icon={{
            // url: '/2531376.svg',
            scaledSize: new window.google.maps.Size(25, 25),
          }}
        >
          <InfoWindow>
            <div>hello</div>
          </InfoWindow>
        </Marker>
        {/* <AutoComplete
					style={{ width: '100%', height: '40px', paddingLeft: 16, marginTop: 2, marginBottom: '2rem' }}
					// onPlaceSelected={onPlaceSelected}
				/> */}
      </GoogleMap>
    )),
  );
  return (
    <>
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9pRTw-7zb847DyWLD-fUujKxvlG01s08&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <Filedata />
    </>
  );
}
export default App;
