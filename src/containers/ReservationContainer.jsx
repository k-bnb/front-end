import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Reservation from '../components/templates/templates-reservation/Reservation';
import {
  clientMessageChange,
  detailToReserveLocation,
  detailToReserveRoom,
  detailToReserveDate,
  detailToReserveGuest,
  reserving,
  changeDate,
  changeGuest,
} from '../modules/reserve';
import { dateInput, specificInputClear } from '../modules/search';
import { clearCheckDateDtail, dateChangeDetail } from '../modules/detail';
import BootPay from 'bootpay-js';
import { useHistory } from 'react-router-dom';
import qs from 'query-string';

const ReservationContainer = () => {
  // store 에서 관리하는 state
  const dispatch = useDispatch();
  const history = useHistory();

  const token = useSelector((state) => state.auth.token);

  // detail redux에서 reserve 페이지에 보여지는 상태 가져 오기
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
  } = useSelector(({ detail }) => detail.infoRes);

  const { startDate, endDate, numOfAdult, numOfKid, numOfInfant } = useSelector(
    ({ detail }) => detail,
  );

  // detail redux에서 날짜, 게스트 인원 받아 오기
  const guestSearch = {
    numOfAdult: parseInt(numOfAdult),
    numOfKid: parseInt(numOfKid),
    numOfInfant: parseInt(numOfInfant),
  };

  // reserve redux에서 모달에서 사용하는 날짜, 게스트 인원 받아오기
  const { message, checkDateSearch: checkDate } = useSelector(
    (state) => state.reserve,
  );

  const totalCost = 2000;

  const {
    numOfAdult: adult,
    numOfKid: kid,
    numOfInfant: infantNumber,
  } = useSelector(({ reserve }) => reserve.guestSearch);

  const { id: roomId, roomCost: reserveRoomCost, name: testName } = useSelector(
    ({ reserve }) => reserve.infoRes,
  );

  const { infoRes, reserveError } = useSelector(({ reserve }) => reserve);

  const { locationDetail } = useSelector(({ detail }) => detail.infoRes);

  const { locationDetail: reserveLocationDetail } = useSelector(
    (state) => state.reserve,
  );

  const { roomImgUrlList: RoomTablePhotoImgURL } = useSelector(
    ({ reserve }) => reserve,
  );

  const checkDateSearch = { startDate, endDate };

  // console.log(checkDateSearch);

  // search 날짜 상태
  const { startDate: checkIn, endDate: checkOut } = checkDate;

  //  성인 + 어린이 수
  const guestNumber = adult + kid;

  //  리펙토링시 객체로 묶기
  const [dateModal, setDateModal] = useState(false);
  const [guestModal, setGuestModal] = useState(false);
  const [comfirmModal, setComfirmModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const manageDateModal = useCallback(() => {
    setDateModal(!dateModal);
  }, [dateModal]);

  const manageGuestModal = useCallback(() => {
    setGuestModal(!guestModal);
  }, [guestModal]);

  // textArea state 관리하는 event function
  const change = useCallback(
    (e) => {
      const value = e.target.value;

      dispatch(clientMessageChange(value));
    },
    [dispatch],
  );

  // 확인 button 클릭해서 예약하기 event function
  const click = useCallback(() => {
    setComfirmModal(true);

    BootPay.request({
      price: 2000, //실제 결제되는 가격
      application_id: '6024e5ee5b2948001d52037b',
      name: testName, //결제창에서 보여질 이름
      pg: 'nicepay',
      method: 'card', //결제수단, 입력하지 않으면 결제수단 선택부터 화면이 시작합니다.
      show_agree_window: 0, // 부트페이 정보 동의 창 보이기 여부
      items: [],
      user_info: {
        username: '사용자 이름',
        email: '사용자 이메일',
        addr: '사용자 주소',
        phone: '010-1234-4567',
      },
      order_id: '고유order_id_1234', //고유 주문번호로, 생성하신 값을 보내주셔야 합니다.
      params: {},
      account_expire_at: '', // 가상계좌 입금기간 제한 ( yyyy-mm-dd 포멧으로 입력해주세요. 가상계좌만 적용됩니다. )
      extra: {
        start_at: '2019-05-10', // 정기 결제 시작일 - 시작일을 지정하지 않으면 그 날 당일로부터 결제가 가능한 Billing key 지급
        end_at: '2022-05-10', // 정기결제 만료일 -  기간 없음 - 무제한
        vbank_result: 0, // 가상계좌 사용시 사용, 가상계좌 결과창을 볼지(1), 말지(0), 미설정시 봄(1)
        quota: '0', // 결제금액이 5만원 이상시 할부개월 허용범위를 설정할 수 있음, [0(일시불), 2개월, 3개월] 허용, 미설정시 12개월까지 허용,
        theme: 'purple', // [ red, purple(기본), custom ]
        custom_background: '#00a086', // [ theme가 custom 일 때 background 색상 지정 가능 ]
        custom_font_color: '#ffffff', // [ theme가 custom 일 때 font color 색상 지정 가능 ]
      },
    })
      .error((data) => console.log(data))
      .confirm(({ price, receipt_id }) => {
        try {
          dispatch(
            reserving(
              roomId,
              checkIn,
              checkOut,
              guestNumber,
              infantNumber,
              totalCost,
              message,
              token,
              price,
              receipt_id,
            ),
          );

          // history.push('/reserve');
        } catch (err) {
          console.log(err);
          // history.push('/');
        }

        BootPay.removePaymentWindow();
      });
  }, [
    // reserveRoomCost,
    dispatch,
    testName,
    roomId,
    checkIn,
    checkOut,
    guestNumber,
    infantNumber,
    totalCost,
    message,
    token,
  ]);

  const { adults, children, infants, check_in, check_out } = qs.parse(
    history.location.search,
  );

  const saveDate = useCallback(() => {
    setDateModal(!dateModal);
    dispatch(dateInput('startDate', checkIn)); // 시작일만 선택시 시작일 dispatch
    dispatch(dateInput('endDate', checkOut)); // 시작일만 선택시 시작일 dispatch
    dispatch(dateChangeDetail('startDate', checkIn)); // 시작일만 선택시 시작일 dispatch
    dispatch(dateChangeDetail('endDate', checkOut)); // 시작일만 선택시 시작일 dispatch
  }, [dispatch, dateModal, checkIn, checkOut]);

  // 모달 관련 상태 및 스토어
  const { reserveSuccess } = useSelector((state) => state.reserve);

  const [completeModalState, setCompleteModalState] = useState(false);

  const moveToHomeClick = () => {
    history.push('./');
  };

  useEffect(() => {
    if (reserveSuccess) {
      setCompleteModalState(true);
      document.body.style.overflowY = 'hidden';
    }

    dispatch(
      detailToReserveRoom(
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
      ),
    );
    dispatch(detailToReserveLocation(locationDetail));
    dispatch(detailToReserveDate(startDate, endDate));
    dispatch(detailToReserveGuest(numOfAdult, numOfKid, numOfInfant));

    dispatch(changeGuest('guestSearch', 'numOfAdult', +adults));
    dispatch(changeGuest('guestSearch', 'numOfKid', +children));
    dispatch(changeGuest('guestSearch', 'numOfInfant', +infants));
    dispatch(changeDate('startDate', check_in));
    dispatch(changeDate('endDate', check_out));

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, [
    dispatch,
    locationDetail,
    startDate,
    endDate,
    numOfAdult,
    numOfKid,
    numOfInfant,
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
    setCompleteModalState,
    reserveSuccess,
    check_in,
    check_out,
    adults,
    children,
    infants,
  ]);

  return (
    <Reservation
      change={change}
      click={click}
      dateModal={dateModal}
      manageDateModal={manageDateModal}
      guestModal={guestModal}
      manageGuestModal={manageGuestModal}
      setGuestModal={setGuestModal}
      comfirmModal={comfirmModal}
      checkDateSearch={checkDateSearch}
      guestSearch={guestSearch}
      checkDate={checkDate}
      saveDate={saveDate}
      isLoading={isLoading}
      infoRes={infoRes}
      reserveLocationDetail={reserveLocationDetail}
      RoomTablePhotoImgURL={RoomTablePhotoImgURL}
      completeModalState={completeModalState}
      moveToHomeClick={moveToHomeClick}
    />
  );
};

export default ReservationContainer;
