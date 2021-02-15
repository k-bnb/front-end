import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/atoms-list/Button';

const PageStyle = styled.div`
  min-width: 547px;

  text-align: center;
  padding: 40px;
  button {
    display: inline-flex;
    padding: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    border: 0;
    background: none;
    &.active {
      color: #eee;
      background-color: black;
    }

    font-size: 1.6rem;
  }
`;

const PageNation = ({
  totalPage,
  pageNationClick,
  currentButton,
  setCurrentButton,
  arrOfcurrButtons,
  setArrOfCurrButtons,
  numberOfPages,
}) => {
  console.log(numberOfPages);

  if (numberOfPages.length > 6) {
    const newArr1 = numberOfPages.slice(0, 4);

    const newArr2 = numberOfPages.slice(
      numberOfPages.length - 4,
      numberOfPages.length,
    );
    numberOfPages = [...newArr1, '...', ...newArr2];
  }
  console.log(numberOfPages);
  return (
    <PageStyle className="PageNation">
      <Button
        size="number"
        onClick={() =>
          setCurrentButton((prev) => (prev === 0 ? prev : prev - 1))
        }
      >
        &#60;
      </Button>
      {numberOfPages.map((page) => {
        return (
          <Button
            onClick={pageNationClick}
            size="number"
            name={page}
            className={currentButton === page && 'active'}
          >
            {page}
          </Button>
        );
      })}

      <Button
        size="number"
        onClick={() =>
          setCurrentButton((prev) =>
            prev === numberOfPages.length ? prev : prev + 1,
          )
        }
      >
        &#62;
      </Button>
    </PageStyle>
  );
};

export default PageNation;
