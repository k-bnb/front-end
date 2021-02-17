import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

const CommonImg = () => {
  return <StyledImg src="/imgs/2.jpg" alt="room img" />;
};

export default CommonImg;
