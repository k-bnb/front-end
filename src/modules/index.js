import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from 'redux-saga/effects';

// 이곳은 모듈을 합치는 곳입니다
const rootReducer = combineReducers({ auth, loading });

export function* rootSaga() {
  yield all([authSaga()]);
}

export default rootReducer;
