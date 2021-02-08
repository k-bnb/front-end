import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

const SearchModalStyle = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 300px;
  border-radius: 20px;

  z-index: 1;
  background-color: #ffffff;
  padding: 20px 0 0 0;
  ${(props) =>
    props.room &&
    css`
      width: 350px;
    `}
  ${(props) =>
    props.cash &&
    css`
      width: 330px;
    `}
  ${(props) =>
    props.bedroom &&
    css`
      width: 450px;
    `}
`;

const SearchModal = ({ children, ...rest }) => {
  // const clickClose = (e) => {
  //   console.log(e.target);
  //   if (e.target.matches('.bg > div') || e.target.matches('.bg')) {
  //     return;
  //   } else if (e.target.closest('div')) {
  //     return;
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener('click', clickClose);
  //   return () => {
  //     window.removeEventListener('click', clickClose);
  //   };
  // }, []);
  return (
    <SearchModalStyle className="bg" {...rest}>
      {children}
    </SearchModalStyle>
  );
};

export default SearchModal;
