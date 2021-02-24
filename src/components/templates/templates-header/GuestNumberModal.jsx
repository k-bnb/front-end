import React from 'react';
import styled, { css } from 'styled-components';
import GuestNumberModalUnit from '../../UI/molecules/molecules-header/GuestNumberModalUnit';
import { useClickOutside } from '../../../lib/useClickOutside';

const StyledGuestModal = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
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
  // SearchTypeHandler,
  setNavModalState,
  detailPage,
  setIsOpen,
  infoRes,
  setGuestIsBorderThick,
  searchBtnRef,
}) => {
  const guestRef = useClickOutside(() => {
    if (detailPage) {
      setIsOpen(false);
      setGuestIsBorderThick(false);
      return;
    }
    setNavModalState({
      location: false,
      checkIn: false,
      checkOut: false,
      guest: false,
    });
  });
  // console.log(guestRef, '******');

  return (
    <StyledGuestModal
      className="guest-modal"
      ref={guestRef}
      detailPage={detailPage}
    >
      <GuestNumberModalUnit
        type={'성인'}
        decription={'만 13세 이상'}
        name="numOfAdult"
        detailPage={detailPage}
        infoRes={infoRes}
      />

      <GuestNumberModalUnit
        type={'어린이'}
        decription={'2~12세'}
        name="numOfKid"
        detailPage={detailPage}
        infoRes={infoRes}
      />

      <GuestNumberModalUnit
        type={'유아'}
        decription={'2세 미만'}
        name="numOfInfant"
        detailPage={detailPage}
        infoRes={infoRes}
        searchBtnRef={searchBtnRef}
      />
    </StyledGuestModal>
  );
};

export default GuestNumberModal;
