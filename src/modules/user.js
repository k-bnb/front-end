import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga from '../lib/createRequestSaga';
import * as API from '../lib/api/auth';
import { takeLatest } from 'redux-saga/effects';

const RESERVE_CONFIRM = 'user/RESERVE_CONFIRM';
const RESERVE_CONFIRM_SUCCESS = 'user/RESERVE_CONFIRM_SUCCESS';
const RESERVE_CONFIRM_FAILURE = 'user/RESERVE_CONFIRM_FAILURE';

// 유저 정보

const USER_INFO = 'user/USER_INFO';
const USER_INFO_SUCCESS = 'user/USER_INFO_SUCCESS';

const CHANGE_INPUT_PERSON = 'person/CHANGE_INPUT_PERSON';

export const userInfo = createAction(USER_INFO, (token) => token);

export const reserveConfirm = createAction(RESERVE_CONFIRM, ({ token }) => ({
  token,
}));

export const changeInputPerson = createAction(
  CHANGE_INPUT_PERSON,
  (name, value) => ({
    name,
    value,
  }),
);

const initialState = {
  userRes: {
    name: '',
    email: '',
    birth: '',
    imageUrl: '',
  },
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
    [USER_INFO_SUCCESS]: (state, { payload }) => {
      sessionStorage.setItem('userInfo', JSON.stringify(payload));
      return produce(state, (draft) => {
        draft.userRes = payload;
      });
    },
    [CHANGE_INPUT_PERSON]: (state, { payload }) => {
      console.log(payload);
      return produce(state, (draft) => {
        draft.userRes[payload.name] = payload.value;
      });
    },
  },
  initialState,
);

export default user;

// saga

const reserveConfirmSaga = createRequestSaga(RESERVE_CONFIRM, (token) =>
  API.userReservation(token),
);

const userConfirmSaga = createRequestSaga(USER_INFO, (token) =>
  API.userMe(token),
);

export function* userSaga() {
  yield takeLatest(RESERVE_CONFIRM, reserveConfirmSaga);
  yield takeLatest(USER_INFO, userConfirmSaga);
}
