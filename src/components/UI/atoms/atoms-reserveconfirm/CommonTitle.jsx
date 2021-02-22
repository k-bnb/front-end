import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  margin: 0;
  font-size: 26px;
  color: #484848;
`;

const CommonTitle = ({ children, ...rest }) => {
  return <StyledTitle {...rest}>{children}</StyledTitle>;
};

export default CommonTitle;
