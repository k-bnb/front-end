import React, { useState } from 'react';
import CarouselModal from '../components/templates/templates-detail/CarouselModal';
import Detail from '../components/templates/templates-detail/Detail';
import Modal from '../portal/Modal';
import HeaderContainer from './header-containers/HeaderContainer';

const DetailContainer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <HeaderContainer />
      <Detail showModal={showModal} setShowModal={setShowModal} />(
      <Modal>
        <CarouselModal showModal={showModal} setShowModal={setShowModal} />
      </Modal>
      )
    </>
  );
};

export default DetailContainer;
