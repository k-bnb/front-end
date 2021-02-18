import React from 'react';
import { useSelector } from 'react-redux';
import EditDateModalOrganism from '../../components/UI/organisms/organisms-reservation/organisms-modal/EditDateModalOrganism';
import { extractDay } from '../../lib/extractMonthDate';

const ReserveDateModalContainer = ({
  manageDateModal,
  checkDate,
  saveDate,
}) => {
  const { bedNum, bathRoomNum } = useSelector(({ reserve }) => reserve.infoRes);
  console.log(bedNum, bathRoomNum);

  const day = extractDay(checkDate.startDate, checkDate.endDate);

  // console.log(startDate, endDate);

  return (
    <EditDateModalOrganism
      manageDateModal={manageDateModal}
      checkDate={checkDate}
      saveDate={saveDate}
      day={day}
      bedNum={bedNum}
      bathRoomNum={bathRoomNum}
    />
  );
};

export default ReserveDateModalContainer;
