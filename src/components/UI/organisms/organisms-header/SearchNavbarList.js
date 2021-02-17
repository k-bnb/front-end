import React from 'react';
import styled, { css } from 'styled-components';
import SearchButtonUnit from '../../molecules/molecules-header/SearchButtonUnit';
// import CheckDateUnit from '../../molecule/CheckDateUnit';
// import GuestNumber from '../../molecule/GuestNumber';
// import SearchUnit from '../../molecule/SearchUnit';

const SearchNavbarDetailBlock = styled.nav`
  width: fit-content;
  overflow: hidden;
  border-radius: 30px;
  background: white;
  margin: 20px auto 0;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  transition-duration: 0.2s;
  text-align: left;
  .start-search-text {
    display: inline-block;
    width: auto;
    line-height: 46px;
  }
`;

const SearchNavbarDetail = ({ isScrolled, children }) => {
  return (
    <SearchNavbarDetailBlock isScrolled={isScrolled}>
      <SearchButtonUnit />
      <span className="start-search-text">{children}</span>
    </SearchNavbarDetailBlock>
  );
};

export default SearchNavbarDetail;
