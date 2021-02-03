import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

const StyledGuestModal = styled.div`
  position: absolute;
  top: 165px;
  left: 59%;
  transform: translate(-50%, 0);
  width: 400px;
  height: 400px;
  border: 1px solid lightgray;
  margin: 0 auto;
  border-radius: 40px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.6) !important;

  ${(props) =>
    props.isScrolled &&
    props.isClicked &&
    css`
      top: 180px;
    `}
`;

const GuestNumberModal = ({
  isScrolled,
  isClicked,
  setIsClicked,
  setCondition,
  initialCondition,
}) => {
  const clickOutSide = (e) => {
    console.log(e.target.matches('.guest-modal'));
    if (e.target.matches('.guest-modal')) {
      return;
    }
    setIsClicked(false);
    setCondition(initialCondition);
  };

  useEffect(() => {
    window.addEventListener('click', clickOutSide);

    return () => {
      window.removeEventListener('click', clickOutSide);
    };
  }, []);

  return (
    <StyledGuestModal
      isScrolled={isScrolled}
      isClicked={isClicked}
      className="guest-modal"
    >
      GuestNumber Modal
    </StyledGuestModal>
  );
};

export default GuestNumberModal;
