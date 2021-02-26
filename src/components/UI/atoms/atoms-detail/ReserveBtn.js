import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import LoaderIcon from 'react-loader-icon';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
// import detail from '../../../../modules/detail';
import qs from 'query-string';

const ReservationBtn = styled.button`
  background: #d70466;
  color: white;
  min-width: 110px;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: none;
  text-align: center;
  line-height: 20px;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 24px;
  white-space: nowrap;
  transition: 0.3s;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:active {
    transform: scale(0.95);
  }

  &:active {
    transform: scale(0.95);
  }

  ${(props) =>
    props.half &&
    css`
      width: fit-content;
    `}
`;

const ReserveBtn = ({
  modal,
  half,
  setModal,
  setFormState,
  DetailHeaderRef,
  bookingInfoRef,
  setIsCalendarOpen,
  isGuestOpen,
  setIsGuestOpen,
  // moveToReserve,
  // NoBookingDate,
}) => {
  const [showLoadingIcon, setShowLoadingIcon] = useState(false);
  const { startDate, endDate, numOfAdult, numOfKid, numOfInfant } = useSelector(
    (state) => state.detail,
  );
  const history = useHistory();
  const match = useRouteMatch();

  const queryObj = qs.parse(history.location.search);
  const pathName = qs.parse(history.location.pathname);
  const roomId = match.params.roomId;

  console.log(queryObj);
  const makeUserHasDates = () => {
    if (half) bookingInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsCalendarOpen(true);
  }; // 날짜를 선택하도록 날짜 모달을 켜주는 함수

  const makeUserHasAudultGuest = () => {
    if (half) bookingInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsGuestOpen(true);
  };

  const makeUserLoggedIn = () => {
    localStorage.setItem('roomId', roomId);
    localStorage.setItem('startDate', queryObj.check_in);
    localStorage.setItem('endDate', queryObj.check_out);
    localStorage.setItem('numOfAdult', queryObj.adults);
    localStorage.setItem('numOfKid', queryObj.children);
    localStorage.setItem('numOfInfant', queryObj.infants);
    setModal(true);
    setFormState('login');
    localStorage.setItem(
      'LFT',
      `/reserve?roomId=${roomId}&check_in=${startDate}&check_out=${endDate}&adults=${numOfAdult}&children=${numOfKid}&infants=${numOfInfant}`,
    );
    localStorage.setItem('DGR', true);
  }; // 로그인 모달창을 띄워준다.

  const moveUserToReserve = () => {
    if (!startDate || !endDate) {
      makeUserHasDates(); // 날짜 선택하게 함.
      return;
    }
    if (numOfAdult === 0) {
      makeUserHasAudultGuest();
      return;
    } //guest 인원의 성인이 선택되지 않았을시에 선택하게 함.

    if (!localStorage.getItem('token')) {
      makeUserLoggedIn(); // 로그인 하게 함.
      return;
    }
    history.push(
      `/reserve?roomId=${roomId}&check_in=${startDate}&check_out=${endDate}&adults=${numOfAdult}&children=${numOfKid}&infants=${numOfInfant}`,
    );
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (modal) setShowLoadingIcon(true);

    return () => {
      setShowLoadingIcon(false);
    };
  }, [modal]);

  return (
    <ReservationBtn
      half={half}
      ref={DetailHeaderRef}
      onClick={moveUserToReserve}
    >
      {showLoadingIcon ? (
        <LoaderIcon type={'bubbles'} size={26} color={'white'} />
      ) : !startDate || !endDate ? (
        '예약 가능 여부 보기'
      ) : (
        '예약하기'
      )}
    </ReservationBtn>
  );
};
export default ReserveBtn;
