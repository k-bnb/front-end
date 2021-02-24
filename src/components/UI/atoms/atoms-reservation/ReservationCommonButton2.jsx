import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { initialGuest } from '../../../../modules/reserve';
import { guestInput } from '../../../../modules/detail';
import Modal from '../../../../portal/Modal';
import ReserveGuestModalContainer from '../../../../containers/modal/ReserveGuestModalContainer';

const StyledButton = styled.button`
  border: 0;
  background: transparent;
  padding: 0;
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.edit &&
    css`
      font-size: 1.6rem;
      font-weight: 600;
      text-decoration: underline;
    `}

  ${(props) =>
    props.back &&
    css`
      position: absolute;
      top: -0.3rem;
      left: -2rem;
      width: 4.8rem;
      height: 4.8rem;
      margin-right: 1.5rem;
      svg {
        font-size: 2rem;
        padding-top: 0.2rem;
        padding-right: 0.2rem;
      }
      &:hover {
        background: hsla(0, 0%, 85.49019607843137%, 0.5);
        border-radius: 50%;
      }
    `}
`;

const ReservationEditButton2 = ({
  children,
  guestModal,
  manageGuestModal,
  setGuestModal,
  checkDate,
  saveDate,
  ...rest
}) => {
  const dispatch = useDispatch();

  const { numOfAdult, numOfKid, numOfInfant } = useSelector(
    ({ reserve }) => reserve.guestSearch,
  );

  // 지우기 button을 클릭 시 reserve guestSearch의 상태 초기화
  const clearGuest = () => {
    dispatch(initialGuest('guestSearch'));
  };

  // 저장하기 button을 통해 search reducer의 상태 변경
  // 월요일날 새로운 search reducer에 새로운 action function 및 action type을 만들어서 한번에 보내기
  const saveGuest = () => {
    setGuestModal(!guestModal);
    dispatch(guestInput('numOfAdult', numOfAdult));
    dispatch(guestInput('numOfKid', numOfKid));
    dispatch(guestInput('numOfInfant', numOfInfant));
  };
  return (
    <>
      <StyledButton onClick={manageGuestModal} {...rest}>
        {children}
      </StyledButton>
      {guestModal && (
        <Modal>
          <ReserveGuestModalContainer
            manageGuestModal={manageGuestModal}
            clearGuest={clearGuest}
            saveGuest={saveGuest}
          />
        </Modal>
      )}
    </>
  );
};

export default ReservationEditButton2;
