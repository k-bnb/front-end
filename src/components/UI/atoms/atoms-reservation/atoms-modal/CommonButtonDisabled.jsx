import React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

const StyledCommonButtonDisabled = styled.button`
  // 기본 설정
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;

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
    props.disabled &&
    css`
      background: lightgray;
      cursor: not-allowed;
      &:hover {
        background: lightgray;
        cursor: not-allowed;
      }
    `}
`;

function CommonButtonDisabled({
  children,
  manageDateModal,
  manageGuestModal,
  saveDate,
  clearGuest,
  saveGuest,
  deleteDate,
  cancelModalButton,
  roomId,
  review,
  moveNextComponent,
  name,
  ...rest
}) {
  const { startDate, endDate } = useSelector(
    (state) => state.reserve.checkDateSearch,
  );

  const disabledChecker = () => {
    return !startDate || !endDate ? true : false;
  };
  return (
    <StyledCommonButtonDisabled
      onClick={saveDate}
      name={name}
      {...rest}
      disabled={disabledChecker()}
    >
      {children}
    </StyledCommonButtonDisabled>
  );
}

export default CommonButtonDisabled;
