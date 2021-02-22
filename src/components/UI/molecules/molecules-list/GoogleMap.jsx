import React, { useRef, useCallback, useEffect, useState } from 'react';
import './GoogleMapst.css';
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  OverlayView,
} from 'react-google-maps';
import Geocode from 'react-geocode';
import styled from 'styled-components';
import Bookmark from '../../atoms/atoms-list/BookMark';
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { locationInput, searching } from '../../../../modules/search';
import { BiWon } from 'react-icons/bi';
import { moneyfilter } from '../../../../lib/moneyfilter';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    top: 0px;
    right: 15px;
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
    //지도 팝업

    overflow: hidden;
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
      padding-left: 20px;
    }
    p {
      font-weight: 700;
      padding-left: 20px;
      span {
        font-weight: 400;
        padding-left: 20px;
      }
    }
  }
`;

function GoogleMapUse({
  roomMap,
  roomType,
  bathRoomNum,
  bedRoomNum,
  bedNum,
  locationSearch,
  checkDateSearch,
  guestSearch,
  costSearch,
}) {
  const [selectedSample, setSelectedSample] = useState(null);

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
  }); //TODO : 알아내기 : 재랜더링이 두번.-> \

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
  const [zoom, setZoom] = useState(12);
  const mapRef = useRef();
  const mapMarker = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  const onMarkLoad = useCallback((map) => {
    mapMarker.current = map;
  }, []);
  const handleZoomChanged = () => {
    setZoom(mapRef.current.getZoom());
  };

  const mapCost = useRef();

  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => {
      return (
        <GoogleMap
          // scrollwheel={false}
          ref={mapRef}
          // defaultZoom={12}
          zoom={zoom}
          defaultCenter={{
            lat: locationSearch.latitude,
            lng: locationSearch.longitude,
          }}
          onClick={() => {
            setSelectedSample(null);
          }}
          options={{ scrollwheel: true }}
          onLoad={onMapLoad}
          onDragEnd={dragMark}
          onZoomChanged={handleZoomChanged}
          options={{ scrollwheel: true }} // 마우스휠옵션.
        >
          {roomMap.map((sample) => (
            <>
              <Marker
                key={sample.id}
                onLoad={onMarkLoad}
                opacity={0}
                labelClass="map-price-container"
                labelContent={`<div class="map-price-marker"><span>$${sample.cost}</span></div>`}
                onDragStart={(e) => {}}
                position={{ lat: sample.latitude, lng: sample.longitude }}
                draggable={true}
                // onDragEnd={onMarkerDragEnd}
                icon={
                  'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
                }
              ></Marker>
              <OverlayView
                position={{ lat: sample.latitude, lng: sample.longitude }}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                getPixelPositionOffset={getPixelPositionOffset}
              >
                <div
                  className={sample.id}
                  name={sample.cost}
                  ref={mapCost}
                  onClick={(e) => {
                    setSelectedSample(sample);
                    console.log(
                      'overlayviewText',
                      e.nativeEvent.path[1].className,
                    );
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: `white`,
                    border: `1px solid #ccc`,
                    backGround: 'white',
                    cursor: 'pointer',
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
                    <BiWon />
                    {moneyfilter(sample.cost)}
                  </p>
                </div>
              </OverlayView>
            </>
          ))}
          {selectedSample && (
            <InfoWindow
              onClick={(e) => {}}
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
                {/* <div className="slide-group">
                  <div className="slide">
                    <div className="slideDiv">
                      <Slider {...settings}>
                      <img src={selectedSample.roomImgUrlList[0]} alt="" />
                      </Slider>
                    </div>
                  </div>
                </div> */}

                <div>
                  <div className="roomTypeclass">{selectedSample.roomType}</div>
                  <h2>{selectedSample.name}</h2>
                  <p>
                    <BiWon />
                    {selectedSample.cost} <span>/ 1박</span>
                  </p>
                </div>
                <Bookmark className="heart" heart>
                  <AiOutlineHeart />
                </Bookmark>
              </GoogleMarkerStyle>
            </InfoWindow>
          )}
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
