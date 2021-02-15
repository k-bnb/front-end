import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/atoms-list/Button';

const PageStyle = styled.div`
  min-width: 547px;

  text-align: center;
  padding: 40px;
  border-top: 1px solid rgba(170,170,170,0.5);
`

const PageNation = ({totalPage,pageNationClick,currentButton,setCurrentButton,arrOfCurrButtons,setArrOfCurrButtons}) => {
  let numberOfPages = [];
  
  Array.from({length: totalPage.totalPages}, (_,i) => {
    return numberOfPages.push(i);
  });
  console.log(arrOfCurrButtons)
  useEffect(()=>{
    let tempNumberOfPages = [...arrOfCurrButtons];

    let dotsInitial = '...';
    let dotsLeft = '... ';
    let dotsRight = ' ...';

    if(numberOfPages.length > 6){  //[0, 1, 2, 3, "...", 22]
      const newArr1 = numberOfPages.slice(0,4);
      tempNumberOfPages = [...newArr1, dotsInitial, numberOfPages.length-1];
    }

    else if(currentButton > 4 && currentButton < numberOfPages.length-2){ //[0, "...", 21, 22, "...", 23] && [0, "...", 19, 21, 22, "...", 23]
      const newArr1 = numberOfPages.slice(0,1);
      const newArr2 = numberOfPages.slice(currentButton-2, currentButton);
      const newArr3 = numberOfPages.slice(currentButton,currentButton+1);
      tempNumberOfPages = [...newArr1, dotsLeft, ...newArr2, ...newArr3, dotsRight, numberOfPages.length-1]
    }

    else if(currentButton > numberOfPages.length -3 ){ //[0, "...", 19, 20, 21, 22]
      const newArr1 = numberOfPages.slice(0,1);
      const newArr2 = numberOfPages.slice(numberOfPages.length-4, numberOfPages.length-1);
      tempNumberOfPages = [...newArr1, dotsLeft, ...newArr2]
    }
    else if(currentButton === dotsInitial){
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length-3]+1);
    }
    else if (currentButton === dotsRight) {
      setCurrentButton(arrOfCurrButtons[3] + 2);
    }
    else if (currentButton === dotsLeft) {
      setCurrentButton(arrOfCurrButtons[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfPages);
  },[currentButton])

  return(
    <PageStyle className="PageNation">
      <div className="pagination-container">
        <button
          className={`${currentButton === 0 ? 'disabled' : ''}`}
          onClick={() => setCurrentButton(prev => prev <= 0 ? prev : prev - 1)}
        >
          &#60;
        </button>

        {arrOfCurrButtons.map(((page) => {
          return <button
            className={`${currentButton === page ? 'active' : ''}`}
            onClick={pageNationClick}
          >
            {page}
          </button>
        }))}

        <button
          className={`${currentButton === numberOfPages.length-1 ? 'disabled' : ''}`}
          onClick={() => setCurrentButton(prev => prev >= numberOfPages.length ? prev : prev + 1)}
        >
          &#62;
        </button>
      </div>
    </PageStyle>
  );
};

export default PageNation;
