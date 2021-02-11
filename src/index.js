import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './modules/index';

const sagaMiddleware = createSagaMiddleware();
console.log('거쳤다.');

const store = createStore(
  rootReducer,
  {
    // 초기 상태
    auth: {
      // reducer의 state.auth에 들어가는 초기 상태, token을 로컬 스토리지에서 get 해서 넣어준다. (auth스토어와 localStorage를 연결)
      register: {
        name: '',
        birth: '',
        registerEmail: '',
        registerPassword: '', // 패스워드 확인 없음.
      },
      login: {
        loginEmail: '',
        loginPassword: '',
      },
      token: localStorage.getItem('token'),
      registerError: null, // 회원가입 에러
      loginError: null, // 로그인 에러}
    },
    reserve: {
      // reducer의 state.reserve에 들어가는 초기 상태, checkDateSearch을 로컬 스토리지에서 get 해서 넣어준다. (reserve스토어와 localStorage를 연결)
      roomId: 5,
      guestNumber: 2,
      infantNumber: 2,
      totalCost: 3000,
      message: '',
      checkDateSearch: {
        startDate: sessionStorage.getItem('startDate'),
        endDate: sessionStorage.getItem('endDate'),
      },
      guestSearch: {
        numOfAdult: 0,
        numOfKid: 0,
        numOfInfant: 0,
      },
      reserveError: null,
    },
  },
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
