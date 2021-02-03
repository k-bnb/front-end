import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

const SearchButtonBlock = styled.button`
  background: rgb(255, 56, 92);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 0;
  svg {
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

const SearchButton = ({ isClicked }) => {
  return (
    <div>
      <SearchButtonBlock>
        <BiSearch />
      </SearchButtonBlock>
    </div>
  );
};

export default SearchButton;
