import React, { useState } from 'react';
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

  ${(props) =>
    props.detailPage &&
    css`
      width: 100%;
      min-width: 320px;
      top: 55px;
      right: 0;
      border-radius: 5px;
      box-shadow: none;
    `}
`;

const GuestNumberModal = ({
  SearchTypeHandler,
  setNavModalState,
  detailPage,
  setIsOpen,
  peopleLimit,
}) => {
  let guestRef = useClickOutside(() => {
    if (detailPage) {
      setIsOpen(false);
      return;
    }
    setNavModalState({
      location: false,
      checkIn: false,
      checkOut: false,
      guest: false,
    });
  });

  return (
    <StyledGuestModal
      className="guest-modal"
      ref={guestRef}
      detailPage={detailPage}
    >
      <GuestNumberModalUnit
        type={'성인'}
        detail={'만 13세 이상'}
        name="numOfAdult"
        detailPage={detailPage}
      />

      <GuestNumberModalUnit
        type={'어린이'}
        detail={'2~12세'}
        name="numOfKid"
        detailPage={detailPage}
      />

      <GuestNumberModalUnit
        type={'유아'}
        detail={'2세 미만'}
        name="numOfInfant"
        detailPage={detailPage}
      />
    </StyledGuestModal>
  );
};

export default GuestNumberModal;
