import React from 'react';
import styled, { css } from 'styled-components';
import Modal from '../../../../portal/Modal';
import ComfirmModalOrganism from '../../organisms/organisms-reservation/organisms-modal/ComfirmModalOrganism';

const StyledButton = styled.button`
  padding: 0;
  border: none;
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.reservation &&
    css`
      display: inline-flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 2.4rem;
      padding: 1.4rem 2.4rem;
      font-size: 1.6rem;
      font-weight: bold;
      border-radius: 0.8rem;
      line-height: 1.6rem;
      color: #fff;

      svg {
        margin-right: 1rem;
      }
    `}
`;

const CommonButton = ({
  click,
  children,
  comfirmModal,
  directHome,
  ...rest
}) => {
  return (
    <>
      <StyledButton onClick={click || directHome} {...rest}>
        {children}
      </StyledButton>
      {/* {comfirmModal && (
        <Modal>
          <ComfirmModalOrganism />
        </Modal>
      )} */}
    </>
  );
};

export default CommonButton;
