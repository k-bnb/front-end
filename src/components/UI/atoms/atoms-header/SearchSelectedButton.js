import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BiSearch } from 'react-icons/bi';

const growLeft = keyframes`
  0% {
    width: 48px;
    padding: 0;
  } 100%{
    width: 110px;
    padding: 0 10px 0 10px;
  }
`;

const SearchSelectedButtonBlock = styled.button`
  background: rgb(255, 56, 92);
  white-space: nowrap;
  animation: ${growLeft} 0.1s ease-in-out backwards;
  height: 48px;
  /* width: 100px; */
  border-radius: 25px;
  border: 0;
  color: white;
  margin-top: 8px;
  margin-right: 30px;
  font-size: 16px;
  font-weight: bold;
  padding: 0 15px;
  svg {
    font-weight: bold;
    font-size: 14px;
    position: relative;
    top: 4px;
    color: white;
    font-size: 18px;
  }
  &:hover {
    background: linear-gradient(
      to right,
      rgb(230, 30, 77) 0%,
      rgb(227, 28, 95) 50%,
      rgb(215, 4, 102) 100%
    );
  }
`;

const SearchSelectedButton = () => {
  return (
    <SearchSelectedButtonBlock>
      <BiSearch /> 검색
    </SearchSelectedButtonBlock>
  );
};

export default SearchSelectedButton;
