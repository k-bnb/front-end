import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/atoms-list/Button';

const PageStyle = styled.div`
  min-width: 547px;

  text-align: center;
  padding: 40px;
  border-top: 1px solid rgba(170,170,170,0.5);
`

const PageNation = ({totalPage,pageNationClick,currentButton,setCurrentButton}) => {
  let numberOfPages = [];
  
  Array.from({length: totalPage.totalPages}, (_,i) => {
    return numberOfPages.push(i);
  });

  return(
    <PageStyle className="PageNation">
      <div className="pagination-container">
        <Button
          size = 'number'
          className={`${currentButton === 0 ? 'disabled' : ''}`}
          onClick={() => setCurrentButton(prev => prev <= 0 ? prev : prev - 1)}
        >
          &#60;
        </Button>

        {numberOfPages.map(((page) => {
          return <Button
            size ='number'
            name ={page}
            className={`${currentButton === page ? 'active' : ''}`}
            onClick={pageNationClick}
          >
            {page}
          </Button>
        }))}

        <Button
          size='number'
          className={`${currentButton === numberOfPages.length-1 ? 'disabled' : ''}`}
          onClick={() => setCurrentButton(prev => prev >= numberOfPages.length ? prev : prev + 1)}
        >
          &#62;
        </Button>
      </div>
    </PageStyle>
  );
};

export default PageNation;
