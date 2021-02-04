import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  margin: 0;
  color: #999;
  padding: 1rem 0 2rem 0;
`;

const MainInfoParagraph = ({ children }) => {
  return <StyledP>{children}</StyledP>;
};

export default MainInfoParagraph;
