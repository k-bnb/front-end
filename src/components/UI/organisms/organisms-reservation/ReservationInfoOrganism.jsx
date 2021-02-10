import React from 'react';
import ReservationTitle from '../../atoms/atoms-reservation/ReservationTitle';
import ReservationUnderLine from '../../atoms/atoms-reservation/ResevationUnderLine';
import ReservationInfoMolecule from '../../molecules/molecules-reservation/ReservationInfoMolecule';

const ReservationInfoOrganism = ({ manageModal, modal }) => {
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
      <ReservationTitle sub children="예약 정보" />
      <ReservationInfoMolecule
        children={dateChildren}
        manageModal={manageModal}
        modal={modal}
      />
      <ReservationInfoMolecule
        children={guistChildren}
        manageModal={manageModal}
        modal={modal}
      />
      <ReservationUnderLine />
    </>
  );
};

export default ReservationInfoOrganism;
