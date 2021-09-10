import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Main from '../components/templates/templates-main/Main';
import { clearCheckDateDtail } from '../modules/detail';
import { specificInputClear } from '../modules/search';
import HeaderContainer from './header-containers/HeaderContainer';

const imgs = [
  {
    src: './imgs/3.jpg',
    alt: '서울 지역 숙소',
    name: '서울',
    coords: { lat: 37.541, lng: 126.986 },
  },
  {
    src: './imgs/2.jpg',
    alt: '인천 지역 숙소',
    name: '인천',
    coords: { lat: 37.45639, lng: 126.70528 },
  },
  {
    src: './imgs/1.jpg',
    alt: '부천시 지역 숙소',
    name: '부천시',
    coords: {
      lat: 37.5,
      lng: 126.77,
    },
  },
  {
    src: './imgs/4.jpg',
    alt: '안산시 지역 숙소',
    name: '안산시',
    coords: { lat: 37.3218778, lng: 126.8308848 },
  },
  {
    src: './imgs/5.jpg',
    alt: '의정부시 지역 숙소',
    name: '의정부시',
    coords: { lat: 37.73889, lng: 127.03444 },
  },
  {
    src: './imgs/6.jpg',
    alt: '대전 지역 숙소',
    name: '대전',
    coords: { lat: 36.35111, lng: 127.385 },
  },
  {
    src: './imgs/7.jpg',
    alt: '수원시 지역 숙소',
    name: '수원시',
    coords: { lat: 37.26389, lng: 127.02861 },
  },
  {
    src: './imgs/8.jpg',
    alt: '성남시 지역 숙소',
    name: '성남시',
    coords: { lat: 37.44722, lng: 127.1375 },
  },
];

const sectionImg = [
  { src: './imgs/house.jpg', alt: '집 전체', name: '집 전체' },
  { src: './imgs/human.jpg', alt: '온수 욕조', name: '온수 욕조' },
  { src: './imgs/nanlo.jpg', alt: '캠핑 및 글램핑', name: '캠핑 및 글램핑' },
  { src: './imgs/tent.jpg', alt: '독특한 공간', name: '독특한 공간' },
];

const sloganImg = [
  {
    src: './imgs/house.jpg',
    alt: '온라인 체험',
    name: '온라인 체험',
    subtitle: '집에서 즐기는 랜선 세계 여행',
  },
  {
    src: './imgs/human.jpg',
    alt: '체험',
    name: '체험',
    subtitle: '어디에서든 즐길 수 있는 체험',
  },
  {
    src: './imgs/nanlo.jpg',
    alt: '어드벤처',
    name: '어드벤처',
    subtitle: '숙박과 식사가 포함된 며칠 일정의 여행 입니다.',
  },
];

const section3Img = [
  { src: './imgs/house.jpg', alt: '집 전체', name: '숙소 호스트 되기' },
  { src: './imgs/human.jpg', alt: '온수 욕조', name: '온라인 체험 호스팅하기' },
  { src: './imgs/nanlo.jpg', alt: '캠핑 및 글램핑', name: '체험 호스팅하기' },
];

const MainContainer = () => {
  const [formState, setFormState] = useState(null); // 초기값은 null, 로그인 버튼 누르면 login으로, 회원가입 누르면 'register'
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (history.location.pathname === '/') {
      sessionStorage.removeItem('destination');
      sessionStorage.removeItem('location');
      sessionStorage.removeItem('searchres');
      sessionStorage.removeItem('totalPage');
    }
    dispatch(specificInputClear('checkDateSearch'));
    dispatch(specificInputClear('guestSearch'));
    dispatch(clearCheckDateDtail());
  }, [history.location.pathname, dispatch]);

  return (
    <>
      <HeaderContainer formState={formState} setFormState={setFormState} />
      <Main
        imgs={imgs}
        section3Img={section3Img}
        sectionImg={sectionImg}
        sloganImg={sloganImg}
      />
    </>
  );
};

export default MainContainer;
