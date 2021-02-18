import React from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

const CloseBtnBlock = styled.button`
  padding: 8px 16px;
  background-color: #222;
  font-size: 14px;
  font-weight: 600px;
  border-radius: 8px;
  color: white;
  border: 0;
  cursor: pointer;
  transition-duration: 0.2s;
  &:active {
    transform: scale(0.95);
  }

  ${(props) =>
    props.carouselModal &&
    css`
      &:hover {
        background-color: rgb(219, 214, 214);
      }
      background-color: rgb(231, 227, 227);
      color: black;
      svg {
        vertical-align: middle;
      }
    `}
`;

const CloseBtn = (props) => {
  return (
    <CloseBtnBlock {...props}>
      {props.carouselModal ? (
        <>
          <AiOutlineClose />
          <span>닫기</span>
        </>
      ) : (
        '닫기'
      )}
    </CloseBtnBlock>
  );
};

export default CloseBtn;
