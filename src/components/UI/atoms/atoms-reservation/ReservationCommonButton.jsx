import React from 'react';
import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';
import ReserveDateModalContainer from '../../../../containers/modal/ReserveDateModalContainer';
import Modal from '../../../../portal/Modal';

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

const ReservationEditButton = ({
  children,
  dateModal,
  manageDateModal,
  checkDate,
  saveDate,
  ...rest
}) => {
  const history = useHistory();
  const backToThePage = () => {
    history.go(-1);
  };

  return (
    <>
      <StyledButton onClick={manageDateModal || backToThePage} {...rest}>
        {children}
      </StyledButton>
      {dateModal && (
        <Modal>
          <ReserveDateModalContainer
            manageDateModal={manageDateModal}
            checkDate={checkDate}
            saveDate={saveDate}
          />
        </Modal>
      )}
    </>
  );
};

export default ReservationEditButton;
