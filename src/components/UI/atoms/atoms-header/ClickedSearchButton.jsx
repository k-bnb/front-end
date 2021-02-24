import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import SearchButton from './SearchButton';

const shortened = keyframes`
  0%{
    width: 90px;
  }
  100%{
    width: 48px;
    background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  }
`;

const ClickedSearchButtonBlock = styled.button`
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  width: 90px;
  height: 48px;
  border-radius: 23px;
  border: 0;
  line-height: 48px;
  cursor: pointer;
  svg {
    vertical-align: sub;
    color: white;
    font-size: 18px;
  }
  .search-button-text {
    font-size: 16px;
    font-weight: 600;
    color: white;
  }
  ${(props) =>
    props.disappear &&
    css`
      animation: ${shortened} 0.3s cubic-bezier(0.575, 1.19, 0.885, 0.99)
        forwards;

      .search-button-text {
        display: none;
      }
    `}
`;

const ClickedSearchButton = ({
  isModalOpen,
  SearchTypeHandler,
  locationSearch,
  history,
}) => {
  const [localIsModalOpen, setLocalIsModalOpen] = useState(isModalOpen);
  const [displayAnimation, setDisplayAnimation] = useState(false);

  useEffect(() => {
    if (localIsModalOpen && !isModalOpen) {
      setDisplayAnimation(true);
      setTimeout(() => {
        setDisplayAnimation(false);
      }, 400);
    }
    setLocalIsModalOpen(isModalOpen);
  }, [localIsModalOpen, isModalOpen]);

  if (!localIsModalOpen && !displayAnimation)
    return (
      <SearchButton
        className="search-button-unit"
        onClick={() => {
          // 위치정보값이 비어있을 경우는, 위치정보 모달창을 띄워주고 검색이 되는것을 막는다.
          if (!locationSearch.latitude) {
            SearchTypeHandler('location');
            return;
          }
          history.push('/rooms');
        }}
      />
    );
  return (
    <ClickedSearchButtonBlock
      className="search-button-unit"
      disappear={!isModalOpen}
      onClick={() => {
        // 위치정보값이 비어있을 경우는, 위치정보 모달창을 띄워주고 검색이 되는것을 막는다.
        if (!locationSearch.latitude) {
          SearchTypeHandler('location');
          return;
        }
        history.push('/rooms');
      }}
    >
      <BiSearch className="search-button-unit" />
      <span
        className="search-button-text search-button-unit"
        disappear={!isModalOpen}
      >
        {' '}
        검색
      </span>
    </ClickedSearchButtonBlock>
  );
};

export default ClickedSearchButton;
