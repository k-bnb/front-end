import React from 'react';
import ReservationTitle from '../../atoms/atoms-reservation/ReservationTitle';
import ReservationUnderLine from '../../atoms/atoms-reservation/ResevationUnderLine';
import ReservationInfoMolecule from '../../molecules/molecules-reservation/ReservationInfoMolecule';

const ReservationInfoOrganism = ({
  dateModal,
  manageDateModal,
  guestModal,
  manageGuestModal,
  checkDateSearch,
  checkDate,
  saveDate,
}) => {
  const { startDate, endDate } = checkDateSearch;

  //  dateChildren.title
  const dateChildren = {
    title: '날짜',
    content: `${startDate}-${endDate}`,
  };

  const guistChildren = {
    title: '게스트',
    content: '게스트 3명',
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
        checkDate={checkDate}
        saveDate={saveDate}
      />
      <ReservationUnderLine />
    </>
  );
};

export default ReservationInfoOrganism;
