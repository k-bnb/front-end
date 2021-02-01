import React from 'react';
import ReservationTitle from '../atoms/ReservationTitle';
import ReservationUnderLine from '../atoms/ResevationUnderLine';
import ReservationInfoMolecule from '../molecules/ReservationInfoMolecule';

const ReservationInfoOrganism = () => {
  const dateChildren = {
    title: '날짜',
    content: '2020. 2. 3-2020. 2. 5',
  };

  const guistChildren = {
    title: '게스트',
    content: '게스트 3명',
  };

  return (
    <>
      <ReservationUnderLine />
      <ReservationTitle sub children='예약 정보' />
      <ReservationInfoMolecule children={dateChildren} />
      <ReservationInfoMolecule children={guistChildren} />
      <ReservationUnderLine />
    </>
  );
};

export default ReservationInfoOrganism;
