import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import CarouselModal from '../components/templates/templates-detail/CarouselModal';
import Detail from '../components/templates/templates-detail/Detail';
import { requestDetail, searchToDetail } from '../modules/detail';
import Modal from '../portal/Modal';
import HeaderContainer from './header-containers/HeaderContainer';
import LoaderIcon from 'react-loader-icon';
import { detailToReserveDate, detailToReserveGuest } from '../modules/reserve';

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
  const { startDate, endDate } = useSelector(
    ({ search }) => search.searchReq.checkDateSearch,
  );
  const { numOfAdult, numOfKid, numOfInfant } = useSelector(
    ({ search }) => search.searchReq.guestSearch,
  );

  const isLoading = useSelector(
    (state) => state.loading['detail/REQUEST_DETAIL'],
  );

  const detailObj = useSelector((state) => state.detail);
  const { roomImgUrlList } = useSelector((state) => state.detail.infoRes);
  //console.log(roomImgUrlList);

  // const { startDate, endDate } = useSelector(
  //   ({ search }) => search.searchReq.checkDateSearch,
  // );

  // const { numOfAdult, numOfKid, numOfInfant } = useSelector(
  //   ({ search }) => search.searchReq.guestSearch,
  // );

  const { startDate: checkIn, endDate: checkOut } = useSelector(
    (state) => state.detail,
  );

  console.log(checkIn, checkOut);
  const { numOfAdult: adult, numOfKid: kid, numOfInfant: infant } = useSelector(
    (state) => state.detail,
  );

  const checkDateSearch = { startDate: checkIn, endDate: checkOut };
  const guestSearch = { numOfAdult: adult, numOfKid: kid, numOfInfant: infant };

  console.log(checkDateSearch);

  const moveToReserve = () => {
    //console.log('hi');
    if (!localStorage.getItem('token')) return;
    history.push('/reserve');
    dispatch(detailToReserveDate(checkDateSearch));
    dispatch(detailToReserveGuest(guestSearch));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(
      searchToDetail(startDate, endDate, numOfAdult, numOfKid, numOfInfant),
    );
    dispatch(requestDetail(roomId));
  }, []); // startDate, endDate 잠시 deps에서 빼놓음, 넣으면 detail 페이지에서 달력날짜바꾸면 다시
  // 서버에 숙소 상세 정보 요구함.
  // startDate, endDate, numOfAdult, numOfKid, numOfInfant,
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
        infoRes={infoRes}
        moveToReserve={moveToReserve}
        isLoading={isLoading}
        detailObj={detailObj}
        roomImgUrlList={roomImgUrlList}
      />
      <Modal>
        <CarouselModal
          showModal={showModal}
          setShowModal={setShowModal}
          current={current}
          setCurrent={setCurrent}
          infoRes={infoRes}
          roomImgUrlList={roomImgUrlList}
        />
      </Modal>
    </>
  );
};
export default DetailContainer;
