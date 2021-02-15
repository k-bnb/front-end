import React from 'react';
import styled from 'styled-components';
import CommonButton from '../../../atoms/atoms-reservation/atoms-modal/CommonButton';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  & :last-child {
    margin-left: 16px;
  }
`;
function ScheduleControlMolecule({ saveDate }) {
  return (
    <Container>
      <CommonButton dateDelete>날짜 지우기</CommonButton>
      <CommonButton dateSave saveDate={saveDate}>
        저장하기
      </CommonButton>
    </Container>
  );
}

export default ScheduleControlMolecule;
