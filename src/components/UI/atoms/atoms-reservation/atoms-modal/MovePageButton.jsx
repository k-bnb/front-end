import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  // 기본 설정
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;

  ${(props) =>
    props.reviewNext &&
    css`
      background: #008489;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      padding: 15px 25px;
      border-radius: 5px;
      opacity: 0.9;

      &:hover {
        opacity: 1;
      }
    `}

  ${(props) =>
    props.reviewPrev &&
    css`
      position: absolute;
      top: 15px;
      left: 13px;
      display: flex;
      align-items: center;
      border-radius: 50%;
      color: rgb(34, 34, 34);
      padding: 10px;

      &:hover {
        background: rgb(243, 243, 243);
      }

      svg {
        width: 16px;
        height: 16px;
        font-weight: bold;
      }
    `}
`;

const MovePageButton = ({
  children,
  name,
  moveNextComponent,
  backButtonRef,
  ...rest
}) => {
  return (
    <StyledButton
      name={name}
      {...rest}
      onClick={moveNextComponent}
      ref={backButtonRef}
    >
      {children}
    </StyledButton>
  );
};

export default MovePageButton;
