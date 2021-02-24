import React from 'react';
import styled from 'styled-components';
import CommonButton from '../../../atoms/atoms-reservation/atoms-modal/CommonButton';
import CommonButtonDisabled from '../../../atoms/atoms-reservation/atoms-modal/CommonButtonDisabled';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  & :last-child {
    margin-left: 16px;
  }
`;
function ScheduleControlMolecule({ saveDate, deleteDate }) {
  return (
    <Container>
      <CommonButton dateDelete deleteDate={deleteDate}>
        날짜 지우기
      </CommonButton>
      <CommonButtonDisabled dateSave saveDate={saveDate}>
        저장하기
      </CommonButtonDisabled>
    </Container>
  );
}

export default ScheduleControlMolecule;
