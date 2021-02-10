import React from 'react';
import styled, { css } from 'styled-components';
import Modal from '../../../../portal/Modal';
// import EditDateModal from '../../organisms/organisms-reservation/organisms-modal/EditDateModal';

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

const ReservationEditButton = ({ children, manageModal, modal, ...rest }) => {
  console.log(modal);
  return (
    <>
      <StyledButton onClick={manageModal} {...rest}>
        {children}
      </StyledButton>
      {modal && (
        <Modal>{/* <EditDateModal manageModal={manageModal} /> */}</Modal>
      )}
    </>
  );
};

export default ReservationEditButton;
