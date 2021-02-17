import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  margin: 0;
  font-size: 1.4rem;
`;

const CommonParagraph = ({ children, ...rest }) => {
  return <StyledP {...rest}>{children}</StyledP>;
};

export default CommonParagraph;
