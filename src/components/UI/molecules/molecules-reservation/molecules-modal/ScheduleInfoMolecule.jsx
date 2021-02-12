import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import CommonText from '../../../atoms/atoms-reservation/atoms-modal/CommonText';
import CommonInput from '../../../atoms/atoms-reservation/atoms-modal/CommonInput';
import CommonButton from '../../../atoms/atoms-reservation/atoms-modal/CommonButton';

const Container = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 56px;
  padding: 5px 10px;
  border-radius: 8px;

  &:hover {
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset;
    border-radius: 8px;
  }
`;

function ScheduleInfoMolecule({ children, scheduleDate }) {
  return (
    <Container>
      <CommonText schedule>{children}</CommonText>
      <CommonInput date scheduleDate={scheduleDate} />
      <CommonButton cancelDate>
        <AiOutlineClose />
      </CommonButton>
    </Container>
  );
}

export default ScheduleInfoMolecule;
