import React from 'react';
import styled, { css } from 'styled-components';

const SearchModalStyle = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 300px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  z-index: 1;
  background-color: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1), 5px 5px 5px rgba(0, 0, 0, 0.1);
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

const SearchModal = React.memo(({ children, ...rest }) => {
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
});

export default SearchModal;
