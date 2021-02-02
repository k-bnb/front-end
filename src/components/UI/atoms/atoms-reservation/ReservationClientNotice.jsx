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

const ReservationClientNotice = () => {
  return (
    <Container clientText>
      <StyledTextArea rows='5'></StyledTextArea>
    </Container>
  );
};

export default ReservationClientNotice;
