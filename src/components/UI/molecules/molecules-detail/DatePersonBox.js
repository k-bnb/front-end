import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import GuestNumberModal from '../../../templates/templates-header/GuestNumberModal';
import CalendarDetail from '../../../../calendar/CalendarDetail';
import Text from '../../atoms/atoms-detail/DetailText';

const BookingBox = styled.div`
  position: relative;
  margin-bottom: 16px;
  border: 1px solid rgb(176, 176, 176);
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
`;

const CheckDate = styled.div`
  height: 56px;
  width: 100%;
  position: relative;
  display: flex;
  flex: 1 1 0%;

  ${(props) =>
    props.borderThick &&
    css`
      border-radius: 8px;
      border: solid 2px black;
    `}
`;
const Personnel = styled.div`
  height: 56px;
  width: 100%;
  border-top: 2px solid rgb(176, 176, 176);
  position: relative;
  display: flex;

  ${(props) =>
    props.borderThick &&
    css`
      border-radius: 8px;
      border: solid 2px black;
    `}
`;

const CheckInAndOut = styled.div`
  position: relative;
  flex: 1 1 0%;
  overflow: hidden;

  & + & {
    border-left: 1px solid rgb(176, 176, 176);
  }
`;

export const CheckTxt = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  font-size: 10px;
  font-weight: 800;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 12px;
  color: rgb(34, 34, 34);
`;

const SelectionDate = styled.div`
  height: 56px;
  padding: 26px 12px 10px;
  line-height: 18px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
`;

const SelectionInfo = ({ text, date }) => (
  <CheckInAndOut>
    <CheckTxt>{text}</CheckTxt>
    <SelectionDate>{date}</SelectionDate>
  </CheckInAndOut>
);

const SelectinoGuest = styled(SelectionDate)`
  padding: 26px 36px 10px 12px;
`;

const GuestBtn = styled.div`
  position: absolute;
  right: 0px;
  display: flex;
  align-items: center;
  height: 100%;
  min-width: 36px;
  max-width: 50%;
  padding-right: 12px;
`;

const AddDate = (
  <Text gray noPadding>
    날짜 추가
  </Text>
);

const DatePersonBox = ({
  detailObj,
  infoRes,
  setNavModalState,
  isCalendarOpen,
  setIsCalendarOpen,
  isOpen,
  setIsOpen,
}) => {
  // const [isOpen, setIsOpen] = useState(false); // detail page에서 모달창 열고닫기 기능구현
  const [isDateBorderThick, setIsDateBorderThick] = useState(false);
  const [isGuestBorderThick, setGuestIsBorderThick] = useState(false);

  return (
    <BookingBox>
      <CheckDate
        onClick={() => {
          setTimeout(() => {
            setIsCalendarOpen(true);
          }, 300);
          setIsDateBorderThick(true);
        }}
        borderThick={isDateBorderThick}
      >
        <SelectionInfo
          text="체크인"
          date={detailObj.startDate ? detailObj.startDate : AddDate}
        />
        <SelectionInfo
          className="divider"
          text="체크아웃"
          date={detailObj.endDate ? detailObj.endDate : AddDate}
        />
        {isCalendarOpen && (
          <CalendarDetail
            setIsCalendarOpen={setIsCalendarOpen}
            setIsDateBorderThick={setIsDateBorderThick}
          />
        )}
      </CheckDate>
      <Personnel
        onClick={() => {
          setIsOpen(true);
          setGuestIsBorderThick(true);
        }}
        borderThick={isGuestBorderThick}
      >
        <CheckTxt>인원</CheckTxt>
        <SelectinoGuest>{`게스트 ${
          detailObj.numOfAdult + detailObj.numOfKid
        } 명`}</SelectinoGuest>
        <GuestBtn>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</GuestBtn>
        {isOpen && (
          <GuestNumberModal
            detailPage={true}
            setIsOpen={setIsOpen}
            infoRes={infoRes}
            setGuestIsBorderThick={setGuestIsBorderThick}
            setNavModalState={setNavModalState}
          />
        )}
      </Personnel>
    </BookingBox>
  );
};

export default DatePersonBox;
