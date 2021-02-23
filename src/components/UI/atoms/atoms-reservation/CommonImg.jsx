import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

const CommonImg = ({ RoomTablePhotoImgURL }) => {
  return <StyledImg src={RoomTablePhotoImgURL} alt="Room Table Photo Img" />;
};

export default CommonImg;
