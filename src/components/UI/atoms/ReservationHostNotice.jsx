import React from 'react';
import styled, { css } from 'styled-components';

const StyledP = styled.p`
  margin: 0;

  ${props =>
    props.host &&
    css`
      min-height: 2rem;
      font-size: 1.4rem;
      line-height: 18px;
      color: rgb(113, 113, 113);
    `}
`;

const ReservationHostNotice = ({ children, ...rest }) => {
  return <StyledP {...rest}>{children}</StyledP>;
};

export default ReservationHostNotice;
