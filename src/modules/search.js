import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as API from '../lib/api/search';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';

//action type
//비동기x
const DESTINATION_INPUT = 'search/DESTINATION_INPUT';
const LOCATION_INPUT = 'search/LOCATION_INPUT';
const DATE_INPUT = 'search/DATE_INPUT';
const GUEST_INPUT = 'search/GUEST_INPUT';
const SPECIFIC_INPUT_CLEAR = 'search/SPECIFIC_INPUT_CLEAR';

// Detail Filter

const ROOMTYPE_INPUT = 'search/ROOMTYPE_INPUT';
const COST_INPUT = 'search/COST_INPUT';
const ROOMNUM_INPUT = 'search/ROOMNUM_INPUT';

//search action type
//비동기
const SEARCHING = 'search/SEARCHING';
const SEARCHING_SUCCESS = 'search/SEARCHING_SUCCESS';
const SEARCHING_FAILURE = 'search/SEARCHING_FAILURE';

//action create
export const destinationInput = createAction(
  DESTINATION_INPUT,
  (destinationName) => destinationName,
); //destinationName 문자열.
export const locationInput = createAction(
  LOCATION_INPUT,
  (locationSearch) => locationSearch,
); //locationSearch 객체.
export const dateInput = createAction(DATE_INPUT, (form, checkDateSearch) => ({
  form,
  checkDateSearch,
})); //checkDateSearch 객체.
export const guestInput = createAction(GUEST_INPUT, (form, name, value) => ({
  form,
  name,
  value,
})); // form -> guestinput, name -> numOfAdult, value ->
export const specificInputClear = createAction(
  SPECIFIC_INPUT_CLEAR,
  (form) => form,
); // form: 초기화할 정보(위치, 날짜, 인원)
export const searching = createAction(
  SEARCHING,
  ({
    locationSearch,
    checkDateSearch,
    guestSearch,
    costSearch,
    roomType,
    bedNum,
    bedRoomNum,
    bathRoomNum,
  }) => ({
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
// detaile action

export const roomTypeInput = createAction(
  ROOMTYPE_INPUT,
  (roomType) => roomType,
);
export const costInput = createAction(COST_INPUT, (name, value) => ({
  name,
  value,
}));
export const roomnumInput = createAction(ROOMNUM_INPUT, (name, value) => ({
  name,
  value,
}));

//initial State
const initialState = {
  destinationName: '',
  searchReq: {
    locationSearch: {
      latitude: 37.5451891,
      longitude: 127.0574869,
      latitudeMax: 37.5851891,
      latitudeMin: 37.5051891,
      longitudeMax: 127.1374869,
      longitudeMin: 126.9774869,
    },
    checkDateSearch: {
      startDate: '',
      endDate: '',
    },
    guestSearch: {
      numOfAdult: 0,
      numOfKid: 0,
      numOfInfant: 0,
    },
    costSearch: {
      minCost: 10000,
      maxCost: 1000000,
    },
    roomType: '',
    bedNum: 0,
    bedRoomNum: 0,
    bathRoomNum: 0,
  },
  searchRes: [],
  searchError: null,
};

//saga
const searchingSaga = createRequestSaga(SEARCHING, API.search);

//seachSaga
export function* searchSaga() {
  yield takeLatest(SEARCHING, searchingSaga);
}

//Reducer
const search = handleActions(
  {
    [DESTINATION_INPUT]: (state, { payload: destinationName }) => ({
      ...state,
      destinationName,
    }),

    [LOCATION_INPUT]: (state, { payload: locationSearch }) =>
      produce(state, (draft) => {
        draft.searchReq.locationSearch = locationSearch;
      }),

    [DATE_INPUT]: (state, { payload: { form, checkDateSearch } }) =>
      produce(state, (draft) => {
        draft.searchReq.checkDateSearch[form] = checkDateSearch;
      }),

    [GUEST_INPUT]: (state, { payload: { form, name, value } }) =>
      produce(state, (draft) => {
        draft.searchReq[form][name] = value; // draft.searchReq.guestSearch.numOfAdult = value
      }),
    [SPECIFIC_INPUT_CLEAR]: (state, { payload: form }) =>
      produce(state, (draft) => {
        draft.searchReq[form] = initialState.searchReq[form]; // 선택한 form 초기화.
      }),
    [SEARCHING_SUCCESS]: (
      state,
      {
        payload: {
          _embedded: { roomDtoList },
        },
      },
    ) =>
      produce(state, (draft) => {
        draft.searchRes = roomDtoList;
      }), //_embedded:{roomDtoList} 는 방 정보를 가진 배열.

    // [SEARCHING_SUCCESS]: (state, action) => {
    //   console.log(action);
    //   return produce(state, (draft) => {
    //     draft.searchRes = action;
    //   });
    // },

    [SEARCHING_FAILURE]: (state, { payload: { error } }) => ({
      ...state,
      searchError: error,
    }),
    [ROOMTYPE_INPUT]: (state, { payload: { roomType } }) => {
      console.log(roomType);
      return produce(state, (draft) => {
        draft.searchReq.roomType = roomType;
      });
    },
    [COST_INPUT]: (state, { payload: { name, value } }) =>
      produce(state, (draft) => {
        draft.searchReq.costSearch[name] = value;
      }),
    [ROOMNUM_INPUT]: (state, { payload: { name, value } }) =>
      produce(state, (draft) => {
        draft.searchReq[name] = value;
      }),
  },
  initialState,
);

export default search;
