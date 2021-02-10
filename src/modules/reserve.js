import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as API from '../lib/api/reserve';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';

// action type
const CLIENT_MESSAGE_CHANGE = 'reserve/CLIENT_MESSAGE_CHANGE';
const CHANGE_DATE = 'reserve/CHANGE_DATE';
const INITIAL_DATE = 'reserve/INITIAL_DATE';

// 비동기 action type
const RESERVING = 'reserve/RESERVING';
const RESERVING_FAILURE = 'reserve/RESERVING_FAILURE';

// action creator function
export const clientMessageChange = createAction(
  CLIENT_MESSAGE_CHANGE,
  (value) => value,
);

export const changeDate = createAction(
  CHANGE_DATE,
  (form, checkDateSearch) => ({
    form,
    checkDateSearch,
  }),
);

export const initialDate = createAction(INITIAL_DATE);

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
