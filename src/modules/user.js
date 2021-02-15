import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga from '../lib/createRequestSaga';
import * as API from '../lib/api/auth';
import { takeLatest } from 'redux-saga/effects';

const RESERVE_CONFIRM = 'user/RESERVE_CONFIRM';
const RESERVE_CONFIRM_SUCCESS = 'user/RESERVE_CONFIRM_SUCCESS';
const RESERVE_CONFIRM_FAILURE = 'user/RESERVE_CONFIRM_FAILURE';

export const reserveConfirm = createAction(RESERVE_CONFIRM, ({ token }) => ({
  token,
}));

const initialState = {
  reserveRes: [],

  reserveError: null,
};

const user = handleActions(
  {
    [RESERVE_CONFIRM_SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        draft.reserveRes =
          action.payload._embedded.reservationConfirmedResponseList;
      });
    },
    [RESERVE_CONFIRM_FAILURE]: (state, action) => ({
      ...initialState,
      reserveError: action.payload.error,
    }),
  },
  initialState,
);

export default user;

// saga

const reserveConfirmSaga = createRequestSaga(RESERVE_CONFIRM, (token) =>
  API.userReservation(token),
);

export function* userSaga() {
  yield takeLatest(RESERVE_CONFIRM, reserveConfirmSaga);
}
