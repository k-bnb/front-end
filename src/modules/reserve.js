import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
// import bootPayRequestSaga from '../lib/bootPayRequestSaga';
import * as API from '../lib/api/reserve';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';

// action type
const CLIENT_MESSAGE_CHANGE = 'reserve/CLIENT_MESSAGE_CHANGE';
// calendar change action type
const CHANGE_DATE = 'reserve/CHANGE_DATE';
const INITIAL_DATE = 'reserve/INITIAL_DATE';
const CLEAR_END_DATE = 'reserve/CLEAR_END_DATE';
// guest number change action type
const CHANGE_GUEST = 'reserve/CHANGE_GUEST';
const INITIAL_GUEST = 'reserve/INITIAL_GUEST';
// detail page date, guest state 받아오기
const DETAIL_TO_RESERVE_DATE = 'reserve/DETAIL_TO_RESERVE_DATE';
const DETAIL_TO_RESERVE_GUEST = 'reserve/DETAIL_TO_RESERVE_GUEST';
const DETAIL_TO_RESERVE_ROOM = 'reserve/DETAIL_TO_RESERVE_ROOM';
const DETAIL_TO_RESERVE_LOCATION = 'reserve/DETAIL_TO_RESERVE_LOCATION';
// const DETAIL_TO_RESERVE_IMG = 'reserve/DETAIL_TO_RESERVE_IMG';

// 비동기 action type
const RESERVING = 'reserve/RESERVING';
const RESERVING_FAILURE = 'reserve/RESERVING_FAILURE';

// action creator function
export const clientMessageChange = createAction(
  CLIENT_MESSAGE_CHANGE,
  (value) => value,
);

// calendar change action function
export const changeDate = createAction(
  CHANGE_DATE,
  (form, checkDateSearch) => ({
    form,
    checkDateSearch,
  }),
);

export const initialDate = createAction(INITIAL_DATE, (form) => form);

export const clearEndDate = createAction(CLEAR_END_DATE);

// guest number change action function
export const changeGuest = createAction(CHANGE_GUEST, (form, name, value) => ({
  form,
  name,
  value,
}));

export const initialGuest = createAction(INITIAL_GUEST, (form) => form);

// detail page date state => reserve page date state
export const detailToReserveDate = createAction(
  DETAIL_TO_RESERVE_DATE,
  ({ startDate, endDate }) => ({
    startDate,
    endDate,
  }),
);

// detail page guest state => reserve page guest state
export const detailToReserveGuest = createAction(
  DETAIL_TO_RESERVE_GUEST,
  ({ numOfAdult, numOfKid, numOfInfant }) => ({
    numOfAdult,
    numOfKid,
    numOfInfant,
  }),
);

export const detailToReserveRoom = createAction(
  DETAIL_TO_RESERVE_ROOM,
  (
    id,
    name,
    roomCost,
    cleaningCost,
    tax,
    peopleLimit,
    description,
    bedNum,
    bathRoomNum,
    grade,
    hostName,
    hostImgURL,
    commentCount,
    roomImgUrlList,
    checkDateSearch,
  ) => ({
    id,
    name,
    roomCost,
    cleaningCost,
    tax,
    peopleLimit,
    description,
    bedNum,
    bathRoomNum,
    grade,
    hostName,
    hostImgURL,
    commentCount,
    roomImgUrlList,
    checkDateSearch,
  }),
);

export const detailToReserveLocation = createAction(
  DETAIL_TO_RESERVE_LOCATION,
  ({ city, neighborhood }) => ({
    city,
    neighborhood,
  }),
);

// saga action function
export const reserving = createAction(
  RESERVING,
  (
    roomId,
    checkIn,
    checkOut,
    guestNumber,
    infantNumber,
    totalCost,
    message,
    token,
    price,
    receipt_id,
  ) => ({
    roomId,
    checkIn,
    checkOut,
    guestNumber,
    infantNumber,
    totalCost,
    message,
    token,
    price,
    receipt_id,
  }),
);

// initialState
const initialState = {
  totalCost: null,
  message: '',
  checkDateSearch: {
    startDate: '',
    endDate: '',
  },
  guestSearch: {
    numOfAdult: 0,
    numOfKid: 0,
    numOfInfant: 0,
  },
  infoRes: {
    id: '',
    name: '',
    roomCost: 0,
    cleaningCost: 0,
    tax: 0,
    peopleLimit: 0,
    description: '',
    bedNum: 0,
    bathRoomNum: 0,
    grade: 0,
    hostName: '',
    hostImgURL: '',
    commentCount: 0,
  },
  roomImgUrlList: '',
  locationDetail: {
    city: '',
    neighborhood: '',
  },
  reserveError: null,
};

// reducer
const reserve = handleActions(
  {
    [CLIENT_MESSAGE_CHANGE]: (state, { payload: value }) => ({
      ...state,
      message: value,
    }),

    [CHANGE_DATE]: (state, { payload: { form, checkDateSearch } }) =>
      produce(state, (draft) => {
        draft.checkDateSearch[form] = checkDateSearch;
      }),

    [INITIAL_DATE]: (state, { payload: form }) =>
      produce(state, (draft) => {
        draft[form] = initialState[form];
      }),

    [CLEAR_END_DATE]: (state, _) => ({
      ...state,
      checkDateSearch: { ...state.checkDateSearch, endDate: '' },
    }),

    [CHANGE_GUEST]: (state, { payload: { form, name, value } }) =>
      produce(state, (draft) => {
        draft[form][name] = value;
      }),

    [INITIAL_GUEST]: (state, { payload: form }) =>
      produce(state, (draft) => {
        draft[form] = initialState[form]; // 선택한 form 초기화.
      }),

    [DETAIL_TO_RESERVE_DATE]: (state, { payload: remenberDate }) => {
      console.log(remenberDate);
      return {
        ...state,

        checkDateSearch: remenberDate,
      };
    },

    [DETAIL_TO_RESERVE_GUEST]: (state, { payload: guestSearch }) => ({
      ...state,
      guestSearch,
    }),

    [DETAIL_TO_RESERVE_ROOM]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.infoRes = payload;
        draft.roomImgUrlList = payload.roomImgUrlList[0];
        draft.checkDateSearch = payload.checkDateSearch;
        // draft.guestSearch = payload.guestSearch;
      }),

    [DETAIL_TO_RESERVE_LOCATION]: (state, { payload: locationDetail }) => ({
      ...state,
      locationDetail,
    }),

    [RESERVING_FAILURE]: (state, { payload: error }) => ({
      ...state,
      reserveError: error,
    }),
  },
  initialState,
);

// saga
const reservingSaga = createRequestSaga(RESERVING, API.reserve);

export function* reserveSaga() {
  yield takeLatest(RESERVING, reservingSaga);
}

export default reserve;
