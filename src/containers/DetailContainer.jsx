import React, { useRef, useState } from 'react';
import CarouselModal from '../components/templates/templates-detail/CarouselModal';
import Detail from '../components/templates/templates-detail/Detail';
import Modal from '../portal/Modal';
import HeaderContainer from './header-containers/HeaderContainer';

const DetailContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(0); // 현재 보는 사진의 index
  const DetailHeaderRef = useRef();
  const ImageContainerRef = useRef();
  const reviewRef = useRef();
  const facilityRef = useRef();

  return (
    <>
      <HeaderContainer
        DetailHeaderRef={DetailHeaderRef}
        ImageContainerRef={ImageContainerRef}
        reviewRef={reviewRef}
        facilityRef={facilityRef}
      />
      <Detail
        showModal={showModal}
        setShowModal={setShowModal}
        current={current}
        setCurrent={setCurrent}
        DetailHeaderRef={DetailHeaderRef}
        ImageContainerRef={ImageContainerRef}
        reviewRef={reviewRef}
        facilityRef={facilityRef}
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
