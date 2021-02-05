import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import * as API from '../lib/api/auth';
import createRequestSaga from '../lib/createRequestSaga';
// import { action } from '../../node_modules/commander/typings/index';

//action type
const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const INITIALIZE_INPUT = 'auth/INITIALIZE';
const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';
const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
const LOGOUT = 'auth/LOGOUT';

//action creators
export const changeInput = createAction(CHANGE_INPUT, (form, name, value) => ({
  form,
  name,
  value,
}));
export const initialzeInput = createAction(INITIALIZE_INPUT, (form) => ({
  form,
}));
export const register = createAction(
  REGISTER,
  ({ name, birth, registerEmail, registerPassword }) => ({
    name,
    birth,
    email: registerEmail,
    password: registerPassword,
  }),
);
export const login = createAction(
  LOGIN,
  ({ loginEmail: email, loginPassword: password }) => ({
    email,
    password,
  }),
);
export const logout = createAction(LOGOUT);

//initial State
const initialState = {
  register: {
    name: '',
    birth: '',
    email: '',
    password: '',
  },
  login: {
    email: '',
    password: '',
  },
  token: null,
  registerError: null,
  loginError: null,
};

//saga
const registerSaga = createRequestSaga(REGISTER, API.register);
const loginSaga = createRequestSaga(LOGIN, API.login);

//authSaga
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

//Reducer
const auth = handleActions(
  {
    //[change_input]: (state,action.type)=>{}
    [CHANGE_INPUT]: (state, { payload: { form, name, value } }) =>
      produce(state, (draft) => {
        draft[form][name] = value;
      }),

    [INITIALIZE_INPUT]: (state, { payload: { form } }) => ({
      ...state,
      [form]: initialState,
    }),
    // 성공시 response.data
    [REGISTER_SUCCESS]: (_, { payload: { accessToken } }) => {
      // 토큰을 스토리지에 저장
      localStorage.setItem('token', accessToken);
      return { ...initialState, token: accessToken };
    },
    // [REGISTER_FAILURE]: (state, action) => {
    //   console.log(action);
    //   return {
    //     ...state,
    //     registerError: action.payload.error,
    //   };
    // },

    [REGISTER_FAILURE]: (_, { payload: { error } }) => ({
      ...initialState,
      registerError: error,
    }),

    [LOGIN_SUCCESS]: (_, { payload: { accessToken } }) => {
      localStorage.setItem('token', accessToken);
      return { ...initialState, token: accessToken };
    },

    [LOGIN_FAILURE]: (_, { payload: { error } }) => ({
      ...initialState,
      loginError: error,
    }),

    [LOGOUT]: () => {
      localStorage.removeItem('token');
      return { ...initialState };
    },
  },
  initialState,
);

export default auth;
