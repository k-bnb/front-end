import React from 'react';
import styled from 'styled-components';
import Container from './ReservationCommonContainer';

// const StyledDiv = styled.div`
//   width: 42px;
//   height: 42px;
//   border-radius: 50%;
//   overflow: hidden;
// `;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ReservationHostImg = ({ img, alt }) => {
  return <StyledImg src={img} alt={alt} />;
};

export default ReservationHostImg;
