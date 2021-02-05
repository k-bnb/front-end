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

//search action type
//비동기
const SEARCHING = 'search/SEARCHING';
const SEARCHING_SUCCESS = 'search/SEARCHING_SUCCESS';
const SEARCHING_FAILURE = 'search/SEARCHINGSEARCHING_FAILURE';

//action create
export const destinationInput = createAction(
  DESTINATION_INPUT,
  (destinationName) => destinationName,
); //destinationName 문자열.
export const locationInput = createAction(
  LOCATION_INPUT,
  (locationSearch) => locationSearch,
); //locationSearch 객체.
export const dateInput = createAction(
  DATE_INPUT,
  (checkDateSearch) => checkDateSearch,
); //checkDateSearch 객체.
export const guestInput = createAction(
  GUEST_INPUT,
  (guestSearch) => guestSearch,
); //guestSearch 객체.
export const searching = createAction(
  SEARCHING,
  ({ locationSearch, checkDateSearch, guestSearch }) => ({
    locationSearch,
    checkDateSearch,
    guestSearch,
  }),
);

//initial State
const initialState = {
  destinationName: '',
  searchReq: {
    locationSearch: {
      latitude: null,
      longitude: null,
      latitudeMax: null,
      latitudeMin: null,
      longitudeMax: null,
      longitudeMin: null,
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

    [LOCATION_INPUT]: (state, { payload: { locationSearch } }) =>
      produce(state, (draft) => {
        draft.searchReq.locationSearch = locationSearch;
      }),

    [DATE_INPUT]: (state, { payload: { checkDateSearch } }) =>
      produce(state, (draft) => {
        draft.searchReq.checkDateSearch = checkDateSearch;
      }),

    [GUEST_INPUT]: (state, { payload: { guestSearch } }) =>
      produce(state, (draft) => {
        draft.searchReq.guestSearch = guestSearch;
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

    [SEARCHING_FAILURE]: (_, { payload: { error } }) => ({
      ...initialState,
      searchError: error,
    }),
  },
  initialState,
);

export default search;
