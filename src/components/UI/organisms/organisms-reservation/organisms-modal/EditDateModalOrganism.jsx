import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import EditCalendar from '../../../../../calendar/EditCalendar';
import CommonButton from '../../../atoms/atoms-reservation/atoms-modal/CommonButton';
import CommonBg from '../../../atoms/atoms-reservation/atoms-modal/CommonBg';
import CommonText from '../../../atoms/atoms-reservation/atoms-modal/CommonText';
import CommonTemp from '../../../atoms/atoms-reservation/atoms-modal/CommonTemp';
import ScheduleInfoMolecule from '../../../molecules/molecules-reservation/molecules-modal/ScheduleInfoMolecule';
import ScheduleControlMolecule from '../../../molecules/molecules-reservation/molecules-modal/ScheduleControlMolecule';

// // cancel 버튼 layout 로직
const CancelButtonContainer = styled.div``;

// schedule 정보 관련 molecule layout 로직
const ScheduleInfoContainer = styled.div`
  // 임시 크기
  width: 100%;
  display: flex;
  margin-top: 20px;
`;

const ScheduleDayContainer = styled.div`
  flex: 1 0 0% !important;
`;

const ScheduleSelectContainer = styled.div`
  box-shadow: rgb(176, 176, 176) 0px 0px 0px 1px inset;
  display: flex;
  border-radius: 8px;
  flex: 1 0 0% !important;
  margin-left: 50px;
`;

const CalendarContainer = styled.div`
  min-height: 370px;
  position: relative;
`;

function EditDateModalOrganism({ manageModal, checkDate, saveDate }) {
  const checkChildren = {
    checkIn: '체크인',
    checkOut: '체크아웃',
  };

  const { startDate, endDate } = checkDate;

  return (
    <CommonBg modalBg>
      <CommonTemp modal>
        <CancelButtonContainer>
          <CommonButton cancelModal manageModal={manageModal}>
            <AiOutlineClose />
          </CommonButton>
        </CancelButtonContainer>
        <ScheduleInfoContainer>
          <ScheduleDayContainer>
            <CommonText day>1박</CommonText>
          </ScheduleDayContainer>
          <ScheduleSelectContainer>
            <ScheduleInfoMolecule
              children={checkChildren.checkIn}
              scheduleDate={startDate}
            />
            <ScheduleInfoMolecule
              children={checkChildren.checkOut}
              scheduleDate={endDate}
            />
          </ScheduleSelectContainer>
        </ScheduleInfoContainer>
        <CalendarContainer>
          <EditCalendar />
        </CalendarContainer>
        <div>
          <ScheduleControlMolecule saveDate={saveDate} />
        </div>
      </CommonTemp>
    </CommonBg>
  );
}

export default EditDateModalOrganism;
