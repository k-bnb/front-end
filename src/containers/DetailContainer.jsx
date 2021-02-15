import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import CarouselModal from '../components/templates/templates-detail/CarouselModal';
import Detail from '../components/templates/templates-detail/Detail';
import { requestDetail } from '../modules/detail';
import Modal from '../portal/Modal';
import HeaderContainer from './header-containers/HeaderContainer';
import LoaderIcon from 'react-loader-icon';

const DetailContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(0); // 현재 보는 사진의 index
  const DetailHeaderRef = useRef();
  const ImageContainerRef = useRef();
  const reviewRef = useRef();
  const facilityRef = useRef();
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const roomId = match.params.roomId;
  const { infoRes } = useSelector((state) => state.detail);

  const moveToReserve = () => {
    console.log('hi');
    if (!localStorage.getItem('token')) return;
    history.push('/reserve');
  };

  useEffect(() => {
    dispatch(requestDetail(roomId));
  }, []);

  return (
    <>
      {/* // <LoaderIcon type={'bubbles'} /> */}
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
        infoRes={infoRes}
        moveToReserve={moveToReserve}
      />
      <Modal>
        <CarouselModal
          showModal={showModal}
          setShowModal={setShowModal}
          current={current}
          setCurrent={setCurrent}
          infoRes={infoRes}
        />
      </Modal>
    </>
  );
};

export default DetailContainer;
