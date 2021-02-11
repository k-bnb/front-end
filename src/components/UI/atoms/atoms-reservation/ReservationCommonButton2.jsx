import React from 'react';
import styled, { css } from 'styled-components';
import Modal from '../../../../portal/Modal';
import EditGuestModalOrganism from '../../organisms/organisms-reservation/organisms-modal/EditGuestModalOrganism';

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
  checkDate,
  saveDate,
  ...rest
}) => {
  return (
    <>
      <StyledButton onClick={manageGuestModal} {...rest}>
        {children}
      </StyledButton>
      {guestModal && (
        <Modal>
          <EditGuestModalOrganism manageGuestModal={manageGuestModal} />
        </Modal>
      )}
    </>
  );
};

export default ReservationEditButton2;
