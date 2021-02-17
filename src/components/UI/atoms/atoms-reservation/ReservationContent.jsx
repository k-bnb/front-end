import React from 'react';
import styled, { css } from 'styled-components';

const StyledDiv = styled.div`
  color: #000;
  ${(props) =>
    props.bold &&
    css`
      font-size: 1.6rem;
      font-weight: bold;
      color: #000;
    `}

  ${(props) =>
    props.normal &&
    css`
      font-size: 1.6rem;
      font-weight: 400;
      color: rgb(113, 113, 113);
    `}
`;

const ReservationContent = ({ children, ...rest }) => {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
};

export default ReservationContent;
