import React, { useState } from 'react';
import CarouselModal from '../components/templates/templates-detail/CarouselModal';
import Detail from '../components/templates/templates-detail/Detail';
import Modal from '../portal/Modal';
import HeaderContainer from './header-containers/HeaderContainer';

const DetailContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(0); // 현재 보는 사진의 index

  return (
    <>
      <HeaderContainer />
      <Detail
        showModal={showModal}
        setShowModal={setShowModal}
        current={current}
        setCurrent={setCurrent}
      />
      <Modal>
        <CarouselModal
          showModal={showModal}
          setShowModal={setShowModal}
          current={current}
          setCurrent={setCurrent}
        />
      </Modal>
    </>
  );
};

export default DetailContainer;
