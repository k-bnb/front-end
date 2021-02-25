import React, { useEffect } from 'react';
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

const detailRes = JSON.parse(sessionStorage.getItem('detailRes')) || {
  id: '',
  name: '',
  roomCost: 0,
  cleaningCost: 0,
  tax: 0,
  peopleLimit: 0,
  description: 0,
  bedNum: 0,
  bathRoomNum: 0,
  grade: 0,
  hostName: '',
  hostImgURL: '',
  commentCount: 0,
  roomImgUrlList: [],
  locationDetail: {},
};

const {
  id,
  name,
  roomCost,
  cleaningCost,
  tax,
  peopleLimit,
  description,
  bedNum,
  bathRoomNum,
  grade,
  hostName,
  hostImgURL,
  commentCount,
  roomImgUrlList,
  locationDetail,
} = detailRes;

// console.log(hostName, hostImgURL, commentCount);

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
    search: {
      destinationName: JSON.parse(sessionStorage.getItem('destination')) || '',
      searchReq: {
        locationSearch: JSON.parse(sessionStorage.getItem('location')) || {},
        checkDateSearch: {
          startDate: '',
          endDate: '',
        },
        guestSearch: {
          numOfAdult: sessionStorage.getItem('numOfAdult'),
          numOfKid: sessionStorage.getItem('numOfKid'),
          numOfInfant: sessionStorage.getItem('numOfInfant'),
        },
        costSearch: {
          minCost: 10000,
          maxCost: 1000000,
        },
        roomType: 'Shared room',
        bedNum: 0,
        bedRoomNum: 0,
        bathRoomNum: 0,
      },
      searchRes: JSON.parse(sessionStorage.getItem('searchres')) || [],
      totalPage: JSON.parse(sessionStorage.getItem('totalPage')) || {},
      searchError: null,
    },

    detail: {
      startDate: '',
      endDate: '',
      numOfAdult: '',
      numOfKid: '',
      numOfInfant: '',
      infoRes: {
        id,
        name,
        roomType: '',
        roomCost,
        cleaningCost,
        tax,
        peopleLimit,
        description: '',
        checkOutTime: '13:00:00',
        checkInTime: '15:00:00',
        isSmoking: false,
        isParking: false,
        bedRoomNum: 0,
        bedNum,
        bathRoomNum,
        grade,
        hostName,
        hostImgURL,
        commentCount: 0,
        locationDetail: {
          country: null,
          city: locationDetail.city,
          borough: '',
          neighborhood: locationDetail.neighborhood,
          detailAddress: null,
          latitude: 0,
          longitude: 0,
        },
        commentList: [],
        roomImgUrlList: roomImgUrlList,
      },
      detailError: null,
    },
    reserve: {
      message: '',
      checkDateSearch: {
        startDate: '',
        endDate: '',
      },
      guestSearch: {
        numOfAdult: 0,
        numOfKid: 0,
        numOfInfant: 0,
      },
      infoRes: {
        id,
        name,
        roomCost,
        cleaningCost,
        tax,
        peopleLimit,
        description,
        bedNum,
        bathRoomNum,
        grade,
        hostName,
        hostImgURL,
        commentCount,
      },
      roomImgUrlList,
      locationDetail: {
        city: '',
        borough: '',
      },
      reserveError: null,
    },
    user: {
      userRes: JSON.parse(sessionStorage.getItem('userInfo')),
      reserveRes: JSON.parse(sessionStorage.getItem('userInfoConFirm')) || [],
      reserveReviewReq: {
        description: '',
      },
      reserveReiewRes: [],
      reserveReviewError: null,
      userInfoError: null,
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
