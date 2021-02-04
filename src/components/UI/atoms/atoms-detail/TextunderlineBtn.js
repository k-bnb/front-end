import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';

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
    border: none;
    background: rgb(247, 247, 247);
    color: #000;
  }
`;

const TextunderlineBtn = () => (
  <UnderlineBtn>
    <AiOutlineHeart font-size="18px" /> 저장 목록
  </UnderlineBtn>
);

export default TextunderlineBtn;
