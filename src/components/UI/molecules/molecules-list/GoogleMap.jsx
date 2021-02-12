import React, { useRef, useCallback, useEffect, useState } from 'react';
import './GoogleMapst.css';
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from 'react-google-maps';
import { Marker } from 'react-google-maps';
import Geocode from 'react-geocode';
import { OverlayView } from 'react-google-maps';
import styled from 'styled-components';
import Bookmark from '../../atoms/atoms-list/BookMark';
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { locationInput, searching } from '../../../../modules/search';
// import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";
// import AutoComplete from 'react-google-autocomplete';

// Geocode.setApiKey=('AIzaSyC6KyJE5Cb_kVrW02y-mkWEDGlrUfodq6E'); '='이 표시가 들어가면 안됨... 이거 찾는데 24시간 걸렸다^-^.. 최대적===오타ㅜㅜㅜ
Geocode.setApiKey('AIzaSyC9pRTw-7zb847DyWLD-fUujKxvlG01s08');

const GoogleMarkerStyle = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  height: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
  .heart {
    position: absolute;
    top: -10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background: none;
    }
    svg {
    }
  }
  img {
    width: 100%;
    height: 200px;
  }
  div {
    padding: 20px 0 0 20px;
    .roomTypeclass {
      padding: 0;
      color: rgba(0, 0, 0, 0.4);
      margin-bottom: 10px;
    }
    h2 {
      color: #000;
      font-size: 1.8rem;
      font-weight: 400;
      margin: 0;
      padding: 0;
    }
    p {
      font-weight: 700;
      span {
        font-weight: 400;
      }
    }
  }
`;

function GoogleMapUse({ roomMap }) {
  const [selectedSample, setSelectedSample] = useState(null);
  const {
    locationSearch,
    checkDateSearch,
    guestSearch,
    costSearch,
    roomType,
    bedNum,
    bedRoomNum,
    bathRoomNum,
  } = useSelector((state) => state.search.searchReq);

  const [locate, setLocate] = useState({
    address: '',
    city: '',
    area: '',
    state: '',
    zoom: 8,
    height: '',
    // gestureHandling:'greedy',
    mapPosition: {
      lat: locationSearch.latitude,
      lng: locationSearch.longitude,
    },
    markerPosition: {
      lat: 0,
      lng: 0,
    },
  });
  console.log(locationSearch.latitude);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log('position33', position);
        console.log(position);
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
            console.log('res', res);
            const address = res.results[0].formatted_address,
              addressArray = res.results[0].address_components,
              city = getCity(addressArray),
              area = getArea(addressArray),
              state = getState(addressArray);
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
  }); //TODO : 알아내기 : 재랜더링이 두번되는것같다. 왜지?....흠...

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
    console.log('res!!!', res);
    const address = res.results[0].formatted_address,
      addressArray = res.results[0].address_components,
      city = getCity(addressArray),
      area = getArea(addressArray),
      state = getState(addressArray);
    console.log('address111', address);
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
    console.log('newLat22', newLat);
  };

  const onPlaceSelected = (place) => {
    console.log(place, 'place');
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

  const getPixelPositionOffset = (width, height) => ({
    x: -(width / 2),
    y: -(height / 2),
  });
  const dispatch = useDispatch();
  const dragMark = (map) => {
    dispatch(
      locationInput({
        latitude: mapRef.current.getCenter().lat(),
        longitude: mapRef.current.getCenter().lng(),
        latitudeMax: mapRef.current.getCenter().lat() + 0.04,
        latitudeMin: mapRef.current.getCenter().lat() - 0.04,
        longitudeMax: mapRef.current.getCenter().lng() + 0.08,
        longitudeMin: mapRef.current.getCenter().lng() - 0.08,
      }),
    );
    const id = 0;
    dispatch(
      searching({
        id,
        locationSearch,
        checkDateSearch,
        guestSearch,
        costSearch,
        roomType,
        bedNum,
        bedRoomNum,
        bathRoomNum,
      }),
    );
  };

  const mapRef = useRef();
  console.log(roomMap);
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => {
      return (
        <GoogleMap
          // scrollwheel={false}
          ref={mapRef}
          defaultZoom={12}
          defaultCenter={{
            lat: locationSearch.latitude,
            lng: locationSearch.longitude,
          }}
          onLoad={onMapLoad}
          onDragEnd={dragMark}
          onBoundsChanged={() => {
            console.log('hi');
          }}
        >
          {roomMap.map((sample) => (
            <>
              <Marker
                key={sample.id}
                opacity={0}
                labelClass="map-price-container"
                labelContent={`<div class="map-price-marker"><span>$${sample.cost}</span></div>`}
                onClick={(e) => {
                  console.log(sample, e.target);
                  setSelectedSample(sample);
                  console.log('marker', e.nextElementSibling);
                }}
                onDragStart={(e) => {
                  console.log('helo', e);
                }}
                position={{ lat: sample.latitude, lng: sample.longitude }}
                draggable={true}
                // onDragEnd={onMarkerDragEnd}
                icon={
                  'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
                }
                // label={sample.cost}
              ></Marker>
              <OverlayView
                position={{ lat: sample.latitude, lng: sample.longitude }}
                onClick={(e) => {
                  console.log('overlayView', e);
                }}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                getPixelPositionOffset={getPixelPositionOffset}
              >
                <div
                  onClick={(e) => {
                    console.log('overlayviewText', e);
                  }}
                  style={{
                    background: `white`,
                    border: `1px solid #ccc`,
                    borderRadius: '50px',
                    width: '80px',
                    height: '30px',
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <p
                    style={{
                      width: '100%',
                      margin: '0 auto',
                      textAlign: 'center',
                      verticalAlign: 'center',
                      fontWeight: '800',
                      fontSize: '16px',
                    }}
                  >
                    {sample.cost}
                  </p>
                </div>
              </OverlayView>
            </>
          ))}
          {selectedSample && (
            <InfoWindow
              onClick={(e) => {
                console.log('infowindow', e);
              }}
              position={{
                lat: selectedSample.latitude,
                lng: selectedSample.longitude,
              }}
              onCloseClick={() => {
                setSelectedSample(null);
              }}
            >
              <GoogleMarkerStyle>
                <img src={selectedSample.roomImgUrlList[0]} alt="" />
                <div>
                  <div className="roomTypeclass">{selectedSample.roomType}</div>
                  <h2>{selectedSample.name}</h2>
                  <p>
                    $ {selectedSample.cost} <span>/ 1박</span>{' '}
                  </p>
                </div>
                <Bookmark className="heart" heart>
                  <AiOutlineHeart />
                </Bookmark>
              </GoogleMarkerStyle>
            </InfoWindow>
          )}

          {/* <MarkerWithLabel
				// markerWithLabel={window.MarkerWithLabel}
				icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
        draggable={true}
        onDragEnd={onMarkerDragEnd}
				// label={<div style={{cursor:'help'}}>thisisthis</div>}
				// label='labelis'
        position={{ lat: locate.markerPosition.lat, lng: locate.markerPosition.lng }}
				// opacity={0}
				labelContent={<div style={{cursor:'help'}}>thisisthis</div>}
			>
				<div>9999999940349</div>
				//<InfoWindow>
          //<div>
						//hello world!						
          //</div>
        //</InfoWindow>
      </MarkerWithLabel> */}

          {/* <AutoComplete
				style={{ width: '100%', height: '40px', paddingLeft: 16, marginTop: 2, marginBottom: '2rem' }}
				onPlaceSelected={onPlaceSelected}
			/>*/}
        </GoogleMap>
      );
    }),
  );

  return (
    <>
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6KyJE5Cb_kVrW02y-mkWEDGlrUfodq6E&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </>
  );
}

export default GoogleMapUse;
