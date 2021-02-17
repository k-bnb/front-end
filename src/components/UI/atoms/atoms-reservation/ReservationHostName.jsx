import React from 'react';
import styled, { css } from 'styled-components';

const StyledSpan = styled.span`
  ${props =>
    props.host &&
    css`
      display: block;
      font-size: 1.6rem;
      font-weight: 600;
      color: rgb(113, 113, 113);
    `}
`;

const ReservationHostName = ({ children, ...rest }) => {
  return <StyledSpan {...rest}>{children}</StyledSpan>;
};

export default ReservationHostName;
