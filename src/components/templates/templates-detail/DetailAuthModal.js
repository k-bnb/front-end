import React, { useState } from 'react';
import styled from 'styled-components';
import AuthModalContainer from '../../../containers/AuthModalContainer';
import LoginOraganisms from '../../UI/organisms/organisms-modals-auth/LoginOraganisms';

const DetailAuthModalBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 0;

  .close-button {
    position: absolute;
    top: 50%;
    right: 50%;
    background-color: white;
  }
`;

const DetailAuthModal = ({ detailAuthModal, setDetailAuthModal }) => {
  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DetailAuthModalBlock>
      <AuthModalContainer
        fromDetailPageBtn={true}
        detailAuthModal={detailAuthModal}
        setDetailAuthModal={setDetailAuthModal}
        modal={modal}
        setModal={setModal}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </DetailAuthModalBlock>
  );
};

export default DetailAuthModal;
