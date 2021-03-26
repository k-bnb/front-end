import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const heartFilling = keyframes`
  0%{
    transform:scale(0);
  }
  50%{
    transform:scale(1.2);
  }
  100%{
    transform:scale(1);
  }
`;

const UnderlineBtn = styled.button`
  color: #000;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: inline-block;
  text-decoration: underline;
  &:hover {
    background: rgb(247, 247, 247);
  }
`;

const HeartEmoticon = styled(AiOutlineHeart)`
  vertical-align: sub;
  font-size: 18px;
`;
const FilledHeartEmoticon = styled(AiFillHeart)`
  font-size: 18px;
  vertical-align: sub;
  color: red;
  animation: ${heartFilling} 0.4s ease;
`;

const TextunderlineBtn = ({ isChecked, onClick }) => (
  <UnderlineBtn onClick={onClick}>
    {isChecked ? <FilledHeartEmoticon /> : <HeartEmoticon />}
    저장 목록
  </UnderlineBtn>
);

export default TextunderlineBtn;
