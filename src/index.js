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

const store = createStore(
  rootReducer,
  {
    // 초기 상태
    auth: {
      // reducer-> state.auth
      register: {
        name: '',
        year: '', // 생년
        month: '', // 월
        day: '', // 일
        email: '',
        password: '', // 패스워드 확인 없음.
      },
      login: {
        email: '',
        password: '',
      },
      token: localStorage.getItem('token'),
      registerError: null, // 회원가입 에러
      loginError: null, // 로그인 에러}
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
