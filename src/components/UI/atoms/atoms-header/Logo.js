import React from 'react';
import { SiAirbnb } from 'react-icons/si';
import styled, { css } from 'styled-components';

const LogoBlock = styled.h1`
  font-family: 'Circular Std Book apple';
  font-style: normal;
  font-weight: 900;
  font-size: 2rem;
  color: white;
  svg {
    font-size: 34px;
  }
  span {
    margin-left: 5px;
    vertical-align: top;
  }

  ${props =>
    props.magenta &&
    css`
      color: rgb(255, 56, 92);
    `}
`;

const Logo = props => {
  return (
    <LogoBlock {...props}>
      <SiAirbnb />
      <span>airbnb</span>
    </LogoBlock>
  );
};

export default Logo;
