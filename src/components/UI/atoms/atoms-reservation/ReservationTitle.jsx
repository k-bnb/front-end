import React from 'react';
import styled, { css } from 'styled-components';

const StyledH2 = styled.h2`
  margin: 0;
  font-weight: bold;
  ${(props) =>
    props.main &&
    css`
      font-size: 3.2rem;
    `}

  ${(props) =>
    props.sub &&
    css`
      font-size: 2.2rem;
    `}
`;

const ReservationTitle = ({ children, ...rest }) => {
  return <StyledH2 {...rest}>{children}</StyledH2>;
};

export default ReservationTitle;
