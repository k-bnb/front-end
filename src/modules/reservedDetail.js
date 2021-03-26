import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as API from '../lib/api/auth';
import { takeLatest } from 'redux-saga/effects';

const GET_RESERVED_DETAIL = 'reservedDetail/GET_RESERVED_DETAIL';
const GET_RESERVED_DETAIL_SUCCESS =
  'reservedDetail/GET_RESERVED_DETAIL_SUCCESS';
const GET_RESERVED_DETAIL_FAILURE =
  'reservedDetail/GET_RESERVED_DETAIL_FAILURE';

export const getReservedDetail = createAction(
  GET_RESERVED_DETAIL,
  (token, reservationId) => ({
    token,
    reservationId,
  }),
);

const initialState = {
  roomInfoRes: {
    roomId: null,
    roomImage: null,
    hostName: null,
    hostImage: null,
    totalCost: null,
    guestNum: 0,
    address: null,
    latitude: 0.0,
    longitude: 0.0,
    roomName: '',
    bedRoomNum: 0,
    bedNum: 0,
    bathRoomNum: 0,
    checkIn: null,
    checkOut: null,
    smoking: false,
    parking: false,
  },
  roomInfoError: null,
};

const reservedDetail = handleActions(
  {
    [GET_RESERVED_DETAIL_SUCCESS]: (state, { payload: roomInfoRes }) => {
      sessionStorage.setItem('roomInfoRes', JSON.stringify(roomInfoRes));
      return {
        ...state,
        roomInfoRes,
      };
    },

    [GET_RESERVED_DETAIL_FAILURE]: (
      state,
      { payload: { error: roomInfoError } },
    ) => ({
      ...state,
      roomInfoError,
    }),
  },
  initialState,
);

export default reservedDetail;

// saga
const getReservedDetailSaga = createRequestSaga(
  GET_RESERVED_DETAIL,
  API.getReservedRoomInfo,
);

export function* ReservedDetailSaga() {
  yield takeLatest(GET_RESERVED_DETAIL, getReservedDetailSaga);
}
