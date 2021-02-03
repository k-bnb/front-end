import React from 'react';
import styled, { css } from 'styled-components';

const StyledSpan = styled.span`
  ${(props) =>
    props.blackSmall &&
    css`
      font-size: 1.2rem;
    `}

  ${(props) =>
    props.graySmall &&
    css`
      font-size: 1.2rem;
      color: rgb(113, 113, 113);
    `}

  ${(props) =>
    props.star &&
    css`
      font-size: 1.5rem;
      color: red;

      svg {
        margin-top: 0.2rem;
        margin-right: 0.5rem;
      }
    `}

  ${(props) =>
    props.blackMiddleBold &&
    css`
      vertical-align: top;
      font-size: 1.4rem;
      font-weight: 500;
    `}
`;

const CommonSpan = ({ children, ...rest }) => {
  return <StyledSpan {...rest}>{children}</StyledSpan>;
};

export default CommonSpan;
