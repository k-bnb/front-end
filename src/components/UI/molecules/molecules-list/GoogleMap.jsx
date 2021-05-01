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
import { useDispatch, useSelector } from 'react-redux';
import { locationInput, searching } from '../../../../modules/search';
import { BiWon } from 'react-icons/bi';
import { BsHeartFill } from 'react-icons/bs';
import { moneyfilter } from '../../../../lib/moneyfilter';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScoreText from './Score-Text';
import { useHistory } from 'react-router-dom';

Geocode.setApiKey('AIzaSyDi2VswS8ZRJ3Vk6aDl0Mx3RbxI27GeXbQ');

const MarkerStyle = styled.div`
  display: flex;
  background: white;
  border: 1px solid #ccc;
  border-radius: 50px;
  width: 100%;
  .intoCost {
    cursor: pointer;
    border-radius: 50px;
    padding: 0 10px;
    width: 100%;
    line-height: 30px;
    margin: 0 auto;
    text-align: center;
    font-weight: 800;
    font-size: 15px;
    &:hover {
      border: none;
      outline: none;
      z-index: 9999;
      background-color: #000;
      border: 1px solid #000;
      color: #fff;
      border-radius: 30px;
      padding: 0 5px;
      transform: scale(1.12, 1.12);
    }
    &:focus {
      border: none;
      outline: none;
      z-index: 9999;
      background-color: #000;
      border: 1px solid #000;
      color: #fff;
      border-radius: 30px;
      padding: 0 5px;
      transform: scale(1.12, 1.12);
    }
  }
`;

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
    right: 15px;
    top: 15px;
    font-size: 20px;
  }
  .heartimg {
    fill: rgba(0, 0, 0, 0.5);
    stroke: white;
    stroke-width: 1;
    overflow: visible;
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 200px;
  }
  .slide-group {
    position: relative;
    .slide {
      width: 100%;
      .slideDiv {
        .slick-slider {
          .slick-arrow {
            z-index: 1;
          }
          .slick-prev {
            color: white;
            position: absolute;
            left: 0;
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
          .slick-next {
            color: white;
            position: absolute;
            right: 0;
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
          .slick-dots {
            li {
              border: 0;
              display: inline !important;
              margin-bottom: 10px;
              justify-content: flex-end;
              height: 30px;
              cursor: default;

              &:nth-child(1) {
                position: absolute;
                bottom: 10px;
                left: 100px;
              }
              &:nth-child(2) {
                position: absolute;
                bottom: 10px;
                left: 110px;
              }
              &:nth-child(3) {
                position: absolute;
                bottom: 10px;
                left: 120px;
              }
              &:nth-child(4) {
                position: absolute;
                bottom: 10px;
                left: 130px;
              }
              &:nth-child(5) {
                position: absolute;
                bottom: 10px;
                left: 140px;
              }
            }
          }
          .slick-list {
            display: flex;
            flex-direction: column;
            border-radius: 10px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            .slick-track {
              display: flex;
              .slick-slide {
                display: flex;
                div {
                  display: flex;
                  img {
                  }
                }
              }
            }
          }
        }
      }
    }
    .btn-group {
      button {
        bottom: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 0;
        outline: none;
        cursor: pointer;
        &:hover {
          width: 35px;
          height: 35px;
        }
      }
      .next {
        position: absolute;
        right: 10px;
      }
      .prev {
        position: absolute;
        left: 10px;
      }
    }
  }
  .textAllWrap {
    //지도 팝업 글
    margin-top: 15px;
    padding-left: 15px;
    cursor: pointer;
  }
  div {
    overflow: hidden;
    .roomTypeclass {
      padding: 0;
      color: rgba(0, 0, 0, 0.4);
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

const GoogleMapUse = ({
  roomMap,
  roomType,
  bathRoomNum,
  bedRoomNum,
  bedNum,
  locationSearch,
  checkDateSearch,
  guestSearch,
  costSearch,
  roomImgUrlList,
  id,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [selectedSample, setSelectedSample] = useState(null);

  const [locate, setLocate] = useState({
    address: '',
    city: '',
    area: '',
    state: '',
    zoom: 8,
    height: '',
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
  const { startDate, endDate } = useSelector(
    (state) => state.search.searchReq.checkDateSearch,
  );
  const { numOfAdult, numOfInfant, numOfKid } = useSelector(
    (state) => state.search.searchReq.guestSearch,
  );
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
  const history = useHistory();
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => {
      return (
        <>
          <GoogleMap
            ref={mapRef}
            defaultZoom={20}
            zoom={zoom}
            defaultCenter={{
              lat: +locationSearch.latitude,
              lng: +locationSearch.longitude,
            }}
            onClick={() => {
              setSelectedSample(null);
            }}
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
                  icon={
                    'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
                  }
                ></Marker>
                <OverlayView
                  position={{ lat: sample.latitude, lng: sample.longitude }}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                  getPixelPositionOffset={getPixelPositionOffset}
                >
                  <MarkerStyle
                    className="toTop"
                    tabIndex="-1"
                    name={sample.cost}
                    ref={mapCost}
                    onClick={(e) => {
                      setSelectedSample(sample);
                      console.log('overlayviewText', e.nativeEvent);
                      console.log('path1', e.nativeEvent.path[1]);
                      const path13 = e.nativeEvent.path[13].childNodes[0];
                      console.log('path13', path13);
                    }}
                  >
                    <p className="intoCost" tabIndex="0">
                      <BiWon />
                      {moneyfilter(sample.cost)}
                    </p>
                  </MarkerStyle>
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
                  {/* <img src={selectedSample.roomImgUrlList[0]} alt="" /> */}
                  <div className="slide-group">
                    <div className="slide">
                      <div className="slideDiv">
                        <Slider {...settings}>
                          {/* <img src={selectedSample.roomImgUrlList[0]} alt="" /> */}
                          {selectedSample.roomImgUrlList.map(
                            (src, i, arr, alt) => (
                              <>
                                <img
                                  // carousalImg
                                  src={src}
                                  alt={alt}
                                />
                              </>
                            ),
                          )}
                        </Slider>
                      </div>
                    </div>
                  </div>
                  <div
                    className="textAllWrap"
                    onClick={(e) => {
                      if (e.target.matches('.heart')) return;

                      history.push(
                        `/detail/${selectedSample.id}?check_in=${startDate}&check_out=${endDate}&adults=${numOfAdult}&children=${numOfKid}&infants=${numOfInfant}`,
                      );
                    }}
                  >
                    <ScoreText
                      grade={selectedSample.grade}
                      commentCount={selectedSample.commentCount}
                    />
                    <div className="roomTypeclass">
                      {selectedSample.roomType}
                    </div>
                    <h2>{selectedSample.name}</h2>
                    <p>
                      <BiWon />
                      {moneyfilter(selectedSample.cost)} <span>/ 1박</span>
                    </p>
                  </div>
                  <Bookmark Mobileheart className="heart">
                    <BsHeartFill className="heartimg" />
                  </Bookmark>
                </GoogleMarkerStyle>
              </InfoWindow>
            )}
          </GoogleMap>
        </>
      );
    }),
  );
  console.log('selectedSample', selectedSample);
  return (
    <>
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCPfYVXBU0msr6iNjHJzWbk4b1yatfh-eg&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </>
  );
};

export default GoogleMapUse;
