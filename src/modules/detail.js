import {} from 'module';
import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as API from '../lib/api/search';
import { takeLatest } from 'redux-saga/effects';

// Action Type
const DETAIL = 'detail/DETAIL';
const DETAIL_SUCCESS = 'detail/DETAIL_SUCCESS';
const DETAIL_FAILURE = 'detail/DETAIL_FAIL';

// Action Creator
export const detail = createAction(DETAIL, (roomId) => roomId);

// initial state
const initialStates = {
  id: '',
  name: '',
  roomType: '',
  roomCost: 0,
  cleaningCost: 0,
  tax: 0,
  peopleLimit: 0,
  description: '',
  checkOutTime: '',
  checkInTime: '',
  isSmoking: '',
  isParking: '',
  bedRoomNum: 0,
  bedNum: 0,
  bathRoomNum: 0,
  grade: '',
  commentCount: 0,
  locationDtial: {
    country: '',
    city: '',
    borough: '',
    neighborhood: '',
    detailAddress: '',
    latitude: '',
    longtitue: '',
  },
  rommImgUrlList: [],
  commentList: [
    {
      id: '',
      description: '',
      userName: '',
      date: '',
      userImgUrl: '',
    },
  ],
  isChecked: '',
};

// reducer
const detail= handleActions(
  {
    [DETAIL_SUCCESS]: (state, {payload: {roomId}}) => (),
    // roomId 를 받아오는 것이니까 해당 id가 key가 되어 전체 방 정보를 담고 있게 받아야 하는것 아닌가?
    // search= payload: {_embedded: { roomDtoList }},
    // payload: {roomId: }
    [DETAIL_FAILURE]: (_, {payload: {error}}) => ({
      ...initialState, 
      detailError: error,
    })

  }, initialStates
)

export default detail;

// detail saga
const detailInfoSaga = createRequestSaga(DETAIL, API.detail)

export function* detailSaga() {
  yield takeLatest (DETAIL,detailInfoSaga)
}
