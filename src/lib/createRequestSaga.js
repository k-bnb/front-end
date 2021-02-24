import { call, put, delay } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

//  request : 백엔드 api
export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type)); // 로딩 시작, type: 요청 작업 종류
    try {
      // yield put(pendingLoading(type));
      const response = yield call(request, action.payload);
      console.log(response);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error.response.data,
      });
    }
    yield put(finishLoading(type)); // 로딩 종료, type: 요청 작업 종류
  };
}
