import React from 'react';
import styled, { css } from 'styled-components';

const StyledCommonButton = styled.button`
  // 기본 설정
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;

  ${(props) =>
    props.cancelModal &&
    css`
      position: relative;
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

  ${(props) =>
    props.cancelDate &&
    css`
      position: absolute;
      top: 22px;
      left: 110px;
    `}

  ${(props) =>
    props.dateDelete &&
    css`
      padding: 8px;
      font-size: 14px;
      font-weight: 600;
      text-decoration: underline;
      border-radius: 8px;
      color: rgb(34, 34, 34);
      line-height: 18px;

      &:hover {
        background: rgb(243, 243, 243);
      }
    `}

  ${(props) =>
    props.dateSave &&
    css`
      padding: 8px 16px;
      font-size: 14px;
      font-weight: 600;
      color: #fff;
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.9);
      line-height: 18px;

      &:hover {
        background: rgb(0, 0, 0);
      }
    `}
`;

function CommonButton({ children, manageModal, ...rest }) {
  return (
    <StyledCommonButton {...rest} onClick={manageModal}>
      {children}
    </StyledCommonButton>
  );
}

export default CommonButton;
