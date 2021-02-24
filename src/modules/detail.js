import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as API from '../lib/api/detail';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
// Action Type
const SEARCH_TO_DETAIL = 'detail/SEARCH_TO_DETAIL';
const DATE_CHANGE_DETAIL = 'detail/DATE_CHANGE_DETAIL';
const GUEST_CHANGE_DETAIL = 'detail/GUEST_CHANGE_DETAIL';
const ROOM_ID_DETAIL = 'detail/ROOM_ID_DETAIL';
const REQUEST_DETAIL = 'detail/REQUEST_DETAIL';
const REQUEST_DETAIL_SUCCESS = 'detail/REQUEST_DETAIL_SUCCESS';
const REQUEST_DETAIL_FAILURE = 'detail/REQUEST_DETAIL_FAILURE';
const CLEAR_GUEST_DETAIL = 'detail/CLEAR_GUEST_DETAIL';
const CLEAR_CHECKDATE_DETAIL = 'detail/CLEAR_CHECKDATE_DETAIL';
const GET_TOTAL_PRICE = 'detail/GET_TOTAL_PRICE';
const GET_CANCELLABLE_DATE = 'detail/GET_CANCELLABLE_DATE';
const GET_ROOM_AVERAGE_SCORE = 'detail/GET_ROOM_AVERAGE_SCORE';
const GET_ROOM_AVERAGE_SCORE_SUCCESS = 'detail/GET_ROOM_AVERAGE_SCORE_SUCCESS';

// 예약하기 페이지에서 게스트, 달력 수정했을 경우 게스트, 달력 값 변경하는 액션
const GUEST_INPUT = 'detail/GUEST_INPUT';
// const DATE_INPUT = 'detail/DATE_INPUT';

// Action Creator
export const searchToDetail = createAction(
  SEARCH_TO_DETAIL,
  (startDate, endDate, numOfAdult, numOfKid, numOfInfant) => ({
    startDate,
    endDate,
    numOfAdult,
    numOfKid,
    numOfInfant,
  }),
);
export const dateChangeDetail = createAction(
  DATE_CHANGE_DETAIL,
  (input, date, checkDate) => ({ input, date, checkDate }),
);
export const guestChangeDetail = createAction(
  GUEST_CHANGE_DETAIL,
  (input, guest, guestNum) => ({ input, guest, guestNum }),
);
export const requestDetail = createAction(REQUEST_DETAIL, (id) => id);
export const clearGuestDetail = createAction(CLEAR_GUEST_DETAIL);
export const clearCheckDateDtail = createAction(CLEAR_CHECKDATE_DETAIL);
export const getTotalPrice = createAction(
  // total 숙박비용
  GET_TOTAL_PRICE,
  (totalCost) => totalCost,
);
export const getCancellableDate = createAction(
  GET_CANCELLABLE_DATE,
  (month, day) => ({ month, day }),
); // 예약취소 가능한 날짜
export const getRoomAverageScore = createAction(
  GET_ROOM_AVERAGE_SCORE,
  (roomId) => roomId,
);

// 예약하기 페이지에서 게스트 수정했을 경우 게스트 값 변경하는 액션 생성자 함수
export const guestInput = createAction(GUEST_INPUT, (name, value) => ({
  name,
  value,
})); // form -> guestinput, name -> numOfAdult, value ->

// 예약하기 페이지에서 달력을 수정했을 경우 달력 값 변경하는 액션 생성자 함수
// export const dateInput = createAction(DATE_INPUT, (form, value) => ({
//   form,
//   value,
// })); //checkDateSearch 객체.

// saga
const requestDetailSaga = createRequestSaga(
  REQUEST_DETAIL,
  API.detailInformation,
);
const requestCommentSaga = createRequestSaga(
  GET_ROOM_AVERAGE_SCORE,
  API.requestComments,
);

export function* detailSaga() {
  yield takeLatest(REQUEST_DETAIL, requestDetailSaga);
  yield takeLatest(GET_ROOM_AVERAGE_SCORE, requestCommentSaga);
}

// initial state
const initialStates = {
  startDate: '',
  endDate: '',
  numOfAdult: 0,
  numOfKid: 0,
  numOfInfant: 0,
  infoRes: {
    id: '',
    name: '',
    hostName: '',
    hostImgURL: '',
    roomType: '',
    roomCost: 0,
    cleaningCost: 0,
    tax: 0,
    peopleLimit: 0,
    description: '',
    checkOutTime: '13:00:00',
    checkInTime: '15:00:00',
    isSmoking: false,
    isParking: false,
    bedRoomNum: 0,
    bedNum: 0,
    bathRoomNum: 0,
    grade: 0,
    commentCount: 0,
    locationDetail: {
      country: null,
      city: '',
      borough: '',
      neighborhood: '',
      detailAddress: null,
      latitude: 0,
      longitude: 0,
    },
    commentList: [],
    roomImgUrlList: [],
  },
  roomAverageScore: {
    cleanliness: 0,
    accuracy: 0,
    communication: 0,
    locationRate: 0,
    checkIn: 0,
    priceSatisfaction: 0,
  },
  totalCost: 0,
  CancellableDate: {},
  detailError: null,
};
// reducer
const detail = handleActions(
  {
    [SEARCH_TO_DETAIL]: (
      state,
      { payload: { startDate, endDate, numOfAdult, numOfKid, numOfInfant } },
    ) => ({
      ...state,
      startDate,
      endDate,
      numOfAdult,
      numOfKid,
      numOfInfant,
    }),
    [DATE_CHANGE_DETAIL]: (state, { payload: { input, date, checkDate } }) => {
      // 날짜를 변경한 후에 새로고침을 했을 때 정보가 그대로 유지될 수 있도록
      sessionStorage.setItem(input, date);
      return { ...state, [input]: date };
    },
    [GUEST_CHANGE_DETAIL]: (state, { payload: { input, guest, guestNum } }) => {
      sessionStorage.setItem(input, guest);
      return { ...state, [input]: guest };
    },
    [ROOM_ID_DETAIL]: (state, { payload: id }) => ({ ...state, rommId: id }),
    [CLEAR_GUEST_DETAIL]: (state, _) => ({
      ...state,
      numOfAdult: 0,
      numOfKid: 0,
      numOfInfant: 0,
    }),
    [CLEAR_CHECKDATE_DETAIL]: (state, _) => ({
      ...state,
      startDate: '',
      endDate: '',
      numOfAdult: 0,
      numOfKid: 0,
      numOfInfant: 0,
    }),
    [REQUEST_DETAIL_SUCCESS]: (state, { payload: infoRes }) => {
      sessionStorage.setItem('detailRes', JSON.stringify(infoRes));
      return {
        ...state,
        infoRes,
      };
    },
    [REQUEST_DETAIL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      detailError: error,
    }),
    [GET_TOTAL_PRICE]: (state, { payload: totalCost }) => ({
      ...state,
      totalCost,
    }),
    [GET_CANCELLABLE_DATE]: (state, { payload: { month, day } }) => ({
      ...state,
      cancellableDate: { month, day },
    }),
    [GET_ROOM_AVERAGE_SCORE_SUCCESS]: (
      state,
      {
        payload: {
          accuracy,
          checkIn,
          cleanliness,
          communication,
          locationRate,
          priceSatisfaction,
        },
      },
    ) => {
      return {
        ...state,
        roomAverageScore: {
          accuracy,
          checkIn,
          cleanliness,
          communication,
          locationRate,
          priceSatisfaction,
        },
      };
    },

    [GUEST_INPUT]: (state, { payload: { name, value } }) => ({
      ...state,
      [name]: value,
    }),

    // [DATE_INPUT]: (state, { payload: { form, value } }) => {
    //   // token 처럼 초기값이 필요로 하기 때문에 sessionStorage에 저장
    //   // sessionStorage.setItem([form], checkDateSearch);

    //   return { ...state, [form]: value };
    // },
  },
  initialStates,
);
export default detail;
