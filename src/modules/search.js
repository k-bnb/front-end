import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "../lib/createRequestSaga";
import * as API from "../lib/api/search";
import { takeLatest } from "redux-saga/effects";

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
export const destinationInput = createAction(DESTINATION_INPUT, destinationName => destinationName) //destinationName 문자열.
export const locationInput = createAction(LOCATION_INPUT, locationSearch=>locationSearch) //locationSearch 객체.
export const dateInput = createAction(DATE_INPUT,checkDateSearch => checkDateSearch) //checkDateSearch 객체.
export const guestInput = createAction(GUEST_INPUT, guestSearch => guestSearch) //guestSearch 객체.
export const searching = createAction(SEARCHING, ({locationSearch,checkDateSearch,guestSearch}) => ({
  locationSearch,
  checkDateSearch,
  guestSearch
}));

//initial State
const initialState = {
  destinationName:'',
  locationSearch:{
    latitude: null,
    longitude: null,
    latitudeMax:null,
    latitudeMin:null,
    longitudeMax:null,
    longitudeMin: null,
  },
  checkDateSearch:{
    startDate:'',
    endDate:'',
  },
  guestSearch:{
    numOfAdult:0,
    numOfKid:0,
    numOfInfant:0,
  },
  searchError:null,
}
//saga
const searchingSaga = createRequestSaga(SEARCHING, API.search);

//seachSaga
export function* searchSaga(){
  yield takeLatest(SEARCHING, searchingSaga);
}

//Reducer
const search = handleActions(
  {
    [DESTINATION_INPUT]: (state, {payload:destinationName})=>({
      ...state,
      destinationName,
    }),

    [LOCATION_INPUT] : (state, {payload:{ locationSearch }}) => ({
      ...state,
      locationSearch,
    }),

    [DATE_INPUT] : (state, {payload:{checkDateSearch}})=>({
      ...state,
      checkDateSearch,
      // checkDateSearch: action.payload.checkDateSearch
    }),
    [GUEST_INPUT] : (state, {payload:{guestSearch}}) => ({
      ...state,
      guestSearch,
    }),
    
    [SEARCHING_SUCCESS] : (state, {payload:{_embedded:{roomDtoList}}})=>({
      ...state,
      room:{roomDtoList}
    }), //_embedded:{roomDtoList} 는 방 이름.
    [SEARCHING_FAILURE] : (_, {payload:{error}})=>({
      ...initialState,
      searchError:error,
    })
  }, initialState
)

export default search;