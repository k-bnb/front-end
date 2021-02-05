import React, { useState } from 'react';
import './LocationSearchInput.css';
import Portal from '@reach/portal';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { formatRelative } from 'date-fns'; // date 사용.
import '@reach/combobox/styles.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import { KmlLayer, getDefaultViewport, getDraggable } from 'react-google-maps';
import { Rectangle, LatLnggetBounds } from 'react-google-maps';

const libraries = ['places'];
const mapContainerStyle = {
  // 지도 크기 설정.
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 43.653225,
  lng: -79.383186,
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

// app 전체 컴포넌트
const LocationSearchInput = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDi2VswS8ZRJ3Vk6aDl0Mx3RbxI27GeXbQ',
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null); // 선택한 marker의 lat, lng를 저장

  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      // current는 현재 marker, 객체는 새롭게 찍은 곳의 marker
      ...current,
      {
        lat: e.latLng.lat(), // lat는 lat를 구하는 메서드
        lng: e.latLng.lng(), // lng는 lng를 구하는 메서드
        time: new Date(), // key값에 사용하기 위해 등록된 시간을 key로 전달
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    // 이 함수는 검색 결과 표시하는 곳에서 전달받은 lat, lng를 가지고 맵의 위치를 이동시켜주고 확대 시켜줌.
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div className="location-search-input-outer-container">
      <Search panTo={panTo} />
      {/* <Locate panTo={panTo} /> // 현재 내 위치 정보 */}
      {/* <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
        onBoundsChanged={() => {
          console.log('hi');
          console.log('bound', mapRef.current.getBounds()); // 현재 화면의 범위 반환
          // console.log('current', mapRef.current.getCurrentPosition());
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: '/skateboarding.svg', // public 폴더 기준 경로
              scaledSize: new window.google.maps.Size(30, 30), // 30 x 30 pixel
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15), // icon 사이즈의 절반으로 하면 중앙에 위치
            }}
            draggable={true}
            onClick={() => {
              setSelected(marker);
            }}
            label={'hellddsdssdo'}
            title={'hh'}
          />
        ))}
        {selected ? (
          // selected가 있으면 infoWindow를 띄워준다.
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>Bear Spotted!</h2>
              <p>Spotted {formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap> */}
    </div>
  );
};

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log(position); // 현위치 반환
            panTo({
              // 현재 위치로 지도를 이동시켜줌.
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          }, // 성공시 콜백함수
          () => null, // 실패시 콜백함수, 따로 처리 안해줘서 null 반환
          options,
        );
      }}
    >
      <img
        src="skateboarding.svg"
        alt="skateboarding locate me"
        width="30"
        height="30"
      />
    </button>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value, // value는 사용자가 input에 검색한 값
    suggestions: { status, data }, // suggestions은 구글 api가 제안해주는 값, status상태와 data를 준다.
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => 43.653225,
        lng: () => -79.383186,
      }, // user가 현재 검색한 위치
      radius: 200 * 1000, // 1000을 곱해준 이유는 미터가 기본값이라서 km로 바꿔주기 위해서 이다. 200km반경을 검색해줌,
    },
  }); // {} 안에 옵션 넣어서 전달

  return (
    <>
      <Combobox
        className="combo-box"
        onSelect={async (address) => {
          setValue(address, false); // 유저가 무슨 address를 정햇는지 알아서 이제는 false로 돌려줌
          clearSuggestions(); // 제안사항 보여주는 창을 닫아버림. 이제 필요없으니까. 따라서 선택하면 창이 닫아짐.

          // address는 유저가 선택한 제안 값
          try {
            const results = await getGeocode({ address }); // 유저가 검색한 address를 인수로 전달하여 promise를 반환받음.
            const { lat, lng } = await getLatLng(results[0]); // 결과에서 lat과 lng정보를 추출
            console.log(results);
            console.log(lat, lng);
            panTo({ lat, lng });
          } catch (error) {
            console.error('error');
          }
        }}
      >
        <label className="combo-box-label">
          <ComboboxInput
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              console.log(e.target.value); // 여기서 dispatch로 스토어 상태 업데이트 하자.
            }}
            disabled={!ready} // 아직 준비되지않으면 사용할수 없음.
            placeholder="어디로 여행가세요?"
            className="combo-box-input"
          />
        </label>
        <ComboboxPopover className="combo-box-pop-over">
          <ComboboxList className="combo-box-list">
            {status === 'OK' &&
              data.map(({ id, description }) => (
                <div className="combo-box-options-container">
                  <div className="combo-box-marker-container">
                    <FaMapMarkerAlt className="gray-marker" />
                  </div>
                  <ComboboxOption
                    className="combo-box-options"
                    key={id}
                    value={description}
                  />
                </div>
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </>
  );
}

export default LocationSearchInput;
