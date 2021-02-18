import React from 'react';
import './LocationSearchInput.css';
import { useLoadScript } from '@react-google-maps/api';
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
import { useDispatch, useSelector } from 'react-redux';
import { locationInput, destinationInput } from '../../../../modules/search';

const libraries = ['places'];

// app 전체 컴포넌트
const LocationSearchInput = ({ SearchTypeHandler, moveFocusNext }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC9pRTw-7zb847DyWLD-fUujKxvlG01s08',
    libraries,
  });

  if (loadError) return '';
  if (!isLoaded) return '';

  return (
    <div className="location-search-input-outer-container">
      <Search
        SearchTypeHandler={SearchTypeHandler}
        moveFocusNext={moveFocusNext}
      />
    </div>
  );
};

function Search({ panTo, SearchTypeHandler, moveFocusNext }) {
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

  const dispatch = useDispatch();
  const destinationName = useSelector(({ search }) => search.destinationName);
  const { latitude } = useSelector(
    ({ search }) => search.searchReq.locationSearch,
  );

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
            console.log(results[0]);
            const { lat, lng } = await getLatLng(results[0]); // 결과에서 lat과 lng정보를 추출
            dispatch(
              // 좌표값 store로 전달
              locationInput({
                latitude: lat,
                longitude: lng,
                latitudeMax: results[0].geometry.bounds.Va.j,
                latitudeMin: results[0].geometry.bounds.Va.i,
                longitudeMax: results[0].geometry.bounds.Qa.j,
                longitudeMin: results[0].geometry.bounds.Qa.i,
              }),
            );
            moveFocusNext('location');

            console.log('ㅇㅇ', results[0]);
          } catch (error) {
            console.error('error');
          }
        }}
      >
        <ComboboxInput
          select
          change
          value={destinationName}
          onChange={(e) => {
            setValue(e.target.value);
            dispatch(destinationInput(e.target.value)); // DestinationName 변경
            console.log(e.target.value); // 여기서 dispatch로 스토어 상태 업데이트 하자.
          }}
          disabled={!ready} // 아직 준비되지않으면 사용할수 없음.
          placeholder="어디로 여행가세요?"
          className="combo-box-input"
          id="locationInput"
          onClick={(e) => {
            SearchTypeHandler('location');
          }}
          autoComplete="off"
          selectOnClick={true}
        />
        {!latitude && ( // locationSearch에 값이 하나라도 들어가면 입력된 것이므로 팝업 띄우지 않는다.
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
                      onKeyDown={(e) => {
                        if (e.key !== 'Enter') {
                          e.preventDefault();
                          return;
                        }
                      }}
                    />
                  </div>
                ))}
            </ComboboxList>
          </ComboboxPopover>
        )}
      </Combobox>
    </>
  );
}

export default LocationSearchInput;

// function onlyKorean(str) {
//   return str.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi, '');
// }
