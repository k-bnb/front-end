import React from 'react';
import ReservationTitle from '../../atoms/atoms-reservation/ReservationTitle';
import ReservationUnderLine from '../../atoms/atoms-reservation/ResevationUnderLine';
import ReservationInfoMolecule from '../../molecules/molecules-reservation/ReservationInfoMolecule';

const ReservationInfoOrganism = ({
  dateModal,
  manageDateModal,
  guestModal,
  manageGuestModal,
  setGuestModal,
  checkDateSearch,
  guestSearch,
  checkDate,
  saveDate,
}) => {
  // 예약하기 페이지 날짜 정보 가져오기
  const { startDate, endDate } = checkDateSearch;

  // 예약하기 페이지 게스터 정보 가져오기
  const { numOfAdult, numOfKid, numOfInfant } = guestSearch;

  const dateChildren = {
    title: '날짜',
    content: `${startDate}-${endDate}`,
  };

  //  게스트 수
  const totalGuestNum = numOfAdult + numOfKid + numOfInfant;
  const guestNum = `게스트 ${totalGuestNum - numOfInfant}명`;
  const infantNum = numOfInfant ? `, 유아 ${numOfInfant}명` : '';

  const guistChildren = {
    title: '게스트',
    content: guestNum + infantNum,
  };

  return (
    <>
      <ReservationUnderLine />
      <ReservationTitle sub children="예약 정보" />
      <ReservationInfoMolecule
        children={dateChildren}
        modal={dateModal}
        manageModal={manageDateModal}
        checkDate={checkDate}
        saveDate={saveDate}
      />
      <ReservationInfoMolecule
        children={guistChildren}
        modal={guestModal}
        manageModal={manageGuestModal}
        setGuestModal={setGuestModal}
        checkDate={checkDate}
        saveDate={saveDate}
      />
      <ReservationUnderLine />
    </>
  );
};

export default ReservationInfoOrganism;
