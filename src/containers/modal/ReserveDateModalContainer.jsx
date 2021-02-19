import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditDateModalOrganism from '../../components/UI/organisms/organisms-reservation/organisms-modal/EditDateModalOrganism';
import { extractDay } from '../../lib/extractMonthDate';
import { initialDate } from '../../modules/reserve';

const ReserveDateModalContainer = ({
  manageDateModal,
  checkDate,
  saveDate,
}) => {
  const dispatch = useDispatch();

  // 침대, 욕실 개수
  const { bedNum, bathRoomNum } = useSelector(({ reserve }) => reserve.infoRes);
  console.log(bedNum, bathRoomNum);

  // 숙박일 계산하는 함수
  const day = extractDay(checkDate.startDate, checkDate.endDate);

  // 날짜 지우기 버튼 함수
  const deleteDate = () => {
    dispatch(initialDate('checkDateSearch'));
  };

  return (
    <EditDateModalOrganism
      manageDateModal={manageDateModal}
      checkDate={checkDate}
      saveDate={saveDate}
      day={day}
      bedNum={bedNum}
      bathRoomNum={bathRoomNum}
      deleteDate={deleteDate}
    />
  );
};

export default ReserveDateModalContainer;
