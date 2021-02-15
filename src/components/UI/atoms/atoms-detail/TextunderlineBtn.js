import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

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
  font-size: 18px;
`;
const FilledHeartEmoticon = styled(AiFillHeart)`
  font-size: 18px;

  color: red;
`;

const TextunderlineBtn = () => (
  <UnderlineBtn>
    <HeartEmoticon />
    저장 목록
  </UnderlineBtn>
);

export default TextunderlineBtn;
