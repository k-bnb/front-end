import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as API from '../lib/api/reserve';
import { takeLatest } from 'redux-saga/effects';

// action type
const CLIENT_MESSAGE_CHANGE = 'reserve/CLIENT_MESSAGE_CHANGE';

// 비동기 action type
const RESERVING = 'reserve/RESERVING';
const RESERVING_FAILURE = 'reserve/RESERVING_FAILURE';

// action creator function
export const clientMessageChange = createAction(
  CLIENT_MESSAGE_CHANGE,
  (value) => value,
);

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
  checkIn: '2021-02-01',
  checkOut: '2021-02-02',
  guestNumber: 2,
  infantNumber: 2,
  totalCost: 3000,
  message: '',
  reserveError: null,
};

// reducer
const reserve = handleActions(
  {
    [CLIENT_MESSAGE_CHANGE]: (state, { payload: value }) => ({
      ...state,
      message: value,
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
