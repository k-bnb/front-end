import React from 'react';
import styled from 'styled-components';
// import Button from '../../atoms/atoms-list/Button';
// import Pagination from 'react-pagination-library';
import ReactPaginate from 'react-paginate';

const PageStyle = styled.div`
  a:focus{
    width:30px;
    height:30px;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 2px #222;
    padding-top: 5px;
  }
  min-width: 547px;
  text-align: center;
  padding: 40px;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    font-size: 1.5rem;
    li {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      vertical-align: sub;
      a {
        outline: none;
      }
      &.active {
        background-color: #000;
        color: #eee;
        border-radius: 50%;
      }
    }
  }
  /* button {
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
  } */
`;

const PageNation = ({
  totalPage,

  changeCurrentPage,
}) => {
  // console.log(numberOfPages);

  // if (numberOfPages.length > 6) {
  //   const newArr1 = numberOfPages.slice(0, 4);

  //   const newArr2 = numberOfPages.slice(
  //     numberOfPages.length - 4,
  //     numberOfPages.length,
  //   );
  //   numberOfPages = [...newArr1, '...', ...newArr2];
  // }
  // console.log(numberOfPages);

  return (
    <PageStyle className="PageNation">
      {/* <Pagination
        currentPage={pageNationState.currentPage}
        totalPage={totalPage.totalPages}
        changeCurrentPage={changeCurrentPage}
        theme="circle"
      /> */}
      <ReactPaginate
        pageCount={totalPage.totalPages}
        previousLabel={'<'}
        nextLabel={'>'}
        activeClassName={'active'}
        onPageChange={changeCurrentPage}
        initialPage={0}
      />
      {/* <Button
        size="number"
        onClick={() =>
          setCurrentButton((prev) => (prev === 0 ? prev : prev - 1))
        }
      >
        &#60;
      </Button>

      {numberOfPages &&
        numberOfPages.map((page) => {
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
      </Button> */}
    </PageStyle>
  );
};

export default PageNation;
