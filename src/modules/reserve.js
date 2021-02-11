import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as API from '../lib/api/reserve';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';

// action type
const CLIENT_MESSAGE_CHANGE = 'reserve/CLIENT_MESSAGE_CHANGE';
// calendar change action type
const CHANGE_DATE = 'reserve/CHANGE_DATE';
const INITIAL_DATE = 'reserve/INITIAL_DATE';
// guest number change action type
const CHANGE_GUEST = 'reserve/CHANGE_GUEST';
const INITIAL_GUEST = 'reserve/INITIAL_GUEST';

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

export const initialDate = createAction(INITIAL_DATE);

// guest number change action function
export const changeGuest = createAction(CHANGE_GUEST, (form, name, value) => ({
  form,
  name,
  value,
}));

export const initialGuest = createAction(INITIAL_GUEST, (form) => form);

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
  ) => ({
    roomId,
    checkIn,
    checkOut,
    guestNumber,
    infantNumber,
    totalCost,
    message,
    token,
  }),
);

// initialState
const initialState = {
  roomId: 5,
  guestNumber: 2,
  infantNumber: 2,
  totalCost: 3000,
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

    [INITIAL_DATE]: () => ({
      ...initialState,
    }),

    [CHANGE_GUEST]: (state, { payload: { form, name, value } }) =>
      produce(state, (draft) => {
        draft[form][name] = value;
      }),

    [INITIAL_GUEST]: (state, { payload: form }) =>
      produce(state, (draft) => {
        draft[form] = initialState[form]; // 선택한 form 초기화.
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
