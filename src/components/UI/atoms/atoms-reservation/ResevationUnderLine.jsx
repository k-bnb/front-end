import React from 'react';
import styled, { css } from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  height: 0.1rem;
  margin: 2.4rem 0;
  background: rgb(221, 221, 221);

  ${(props) =>
    props.reviewLine &&
    css`
      margin: 1rem 0;
    `}
`;

const ReservationUnderLine = ({ ...rest }) => {
  return <StyledDiv {...rest} />;
};

export default ReservationUnderLine;
