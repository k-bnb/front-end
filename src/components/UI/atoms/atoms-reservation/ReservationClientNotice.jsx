import React from 'react';
import styled from 'styled-components';
import Container from './ReservationCommonContainer';

const StyledTextArea = styled.textarea`
  min-width: 100%;
  max-width: 100%;
  padding: 0.8rem;
  border: none;
  outline: none;
`;

const ReservationClientNotice = ({ change, value }) => {
  console.log(value);
  return (
    <Container clientText>
      <StyledTextArea rows="5" onChange={change} value={value}></StyledTextArea>
    </Container>
  );
};

export default ReservationClientNotice;
