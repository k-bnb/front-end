import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from 'redux-saga/effects';
import search, { searchSaga } from './search';
import reserve, { reserveSaga } from './reserve';
import detail from './detail';
import person from './person';
import user, { userSaga } from './user';
// 이곳은 모듈을 합치는 곳입니다
const rootReducer = combineReducers({
  auth,
  loading,
  search,
  reserve,
  detail,
  person,
  user,
});

export function* rootSaga() {
  yield all([authSaga(), searchSaga(), reserveSaga(), userSaga()]);
}

export default rootReducer;
