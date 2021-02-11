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
    props.guestCancelModal &&
    css`
      position: absolute;
      top: 15px;
      left: 12px;
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

    ${(props) =>
    props.guestSave &&
    css`
      padding: 14px 24px;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.9);
      line-height: 18px;

      &:hover {
        background: rgb(0, 0, 0);
      }
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
    props.guestDelete &&
    css`
      /* padding: 8px; */
      font-size: 16px;
      font-weight: 600;
      text-decoration: underline;
      border-radius: 8px;
      color: rgba(34, 34, 34, 0.8);
      line-height: 18px;

      &:hover {
        color: rgba(34, 34, 34, 1);
      }
    `}
`;

function CommonButton({
  children,
  manageDateModal,
  manageGuestModal,
  saveDate,
  clearGuest,
  saveGuest,
  ...rest
}) {
  return (
    <StyledCommonButton
      {...rest}
      onClick={
        manageDateModal ||
        manageGuestModal ||
        saveDate ||
        clearGuest ||
        saveGuest
      }
    >
      {children}
    </StyledCommonButton>
  );
}

export default CommonButton;
