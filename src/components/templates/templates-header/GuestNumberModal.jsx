import React from 'react';
import styled, { css } from 'styled-components';
import GuestNumberModalUnit from '../../UI/molecules/molecules-header/GuestNumberModalUnit';
import { useClickOutside } from '../../../lib/useClickOutside';
import { useDispatch, useSelector } from 'react-redux';

const StyledGuestModal = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  /* transform: translate(-50%, 0); */
  width: 400px;
  height: auto;
  border: 1px solid lightgray;
  border-radius: 40px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.6) !important;
  padding: 30px;

  ${(props) =>
    props.isScrolled &&
    props.isClicked &&
    css`
      top: 180px;
    `}
`;

const GuestNumberModal = ({ SearchTypeHandler, setNavModalState }) => {
  let guestRef = useClickOutside(() => {
    setNavModalState({
      location: false,
      checkIn: false,
      checkOut: false,
      guest: false,
    });
  });

  return (
    <StyledGuestModal className="guest-modal" ref={guestRef}>
      <GuestNumberModalUnit
        type={'성인'}
        detail={'만 13세 이상'}
        name="numOfAdult"
      />

      <GuestNumberModalUnit type={'어린이'} detail={'2~12세'} name="numOfKid" />

      <GuestNumberModalUnit
        type={'유아'}
        detail={'2세 미만'}
        name="numOfInfant"
      />
    </StyledGuestModal>
  );
};

export default GuestNumberModal;
