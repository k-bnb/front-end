import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import CarouselModal from '../components/templates/templates-detail/CarouselModal';
import Detail from '../components/templates/templates-detail/Detail';
import {
  dateChangeDetail,
  getRoomAverageScore,
  guestChangeDetail,
  guestInput,
  requestDetail,
  searchToDetail,
} from '../modules/detail';
import Modal from '../portal/Modal';
import HeaderContainer from './header-containers/HeaderContainer';
import ReviewModal from '../components/templates/templates-detail/ReviewModal';
import AuthModalContainer from './AuthModalContainer';
import qs from 'query-string';
import RoomCheckModal from '../components/templates/RoomCheckModal';

const DetailContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [current, setCurrent] = useState(0); // 현재 보는 사진의 index

  // 로그인 / 회원가입 모달창 렌더링을 위해 필요한 상태, isOpen, formState, modal
  const [isOpen, setIsOpen] = useState(false); // Guest modal 창
  // formState -> 'login', 'register'로 상태 전환 해줌.
  const [formState, setFormState] = useState(null); // 초기값은 null, 로그인 버튼 누르면 login으로, 회원가입 누르면 'register'
  const [modal, setModal] = useState(false); // auth 모달을 켜주고 꺼주고...

  const [isRoomCheckModalOpen, setIsRoomCheckModalOpen] = useState(false);

  const DetailHeaderRef = useRef();
  const ImageContainerRef = useRef();
  const bookingInfoRef = useRef();
  const reviewRef = useRef();
  const facilityRef = useRef();
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const queryObj = qs.parse(history.location.search);
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

  const { startDate: checkIn, endDate: checkOut } = useSelector(
    (state) => state.detail,
  );

  const { numOfAdult: adult, numOfKid: kid, numOfInfant: infant } = useSelector(
    (state) => state.detail,
  );
  const checkDateSearch = { startDate: checkIn, endDate: checkOut };
  const guestSearch = { numOfAdult: adult, numOfKid: kid, numOfInfant: infant };
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // detail page달력 모달열고닫기
  const [isGuestOpen, setIsGuestOpen] = useState(false); // detail guest모달 열고 닫기.
  const { peopleLimit } = useSelector(({ reserve }) => reserve.infoRes);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(dateChangeDetail('startDate', queryObj.check_in));
    dispatch(dateChangeDetail('endDate', queryObj.check_out));
    dispatch(guestChangeDetail('numOfAdult', +queryObj.adults));
    dispatch(guestChangeDetail('numOfKid', +queryObj.children));
    dispatch(guestChangeDetail('numOfInfant', +queryObj.infants));
    dispatch(getRoomAverageScore(roomId));
    dispatch(requestDetail(roomId));
  }, [dispatch]);

  useEffect(() => {
    if (showModal || showReviewModal || modal)
      document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'unset';
  }, [showModal, showReviewModal, modal]);

  return (
    <>
      <HeaderContainer
        DetailHeaderRef={DetailHeaderRef}
        ImageContainerRef={ImageContainerRef}
        reviewRef={reviewRef}
        facilityRef={facilityRef}
        modal={modal}
        setModal={setModal}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        formState={formState}
        setFormState={setFormState}
        bookingInfoRef={bookingInfoRef}
        isCalendarOpen={isCalendarOpen}
        setIsCalendarOpen={setIsCalendarOpen}
        isGuestOpen={isGuestOpen}
        setIsGuestOpen={setIsGuestOpen}
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
        isLoading={isLoading}
        detailObj={detailObj}
        roomImgUrlList={roomImgUrlList}
        showReviewModal={showReviewModal}
        setShowReviewModal={setShowReviewModal}
        modal={modal}
        setModal={setModal}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isRoomCheckModalOpen={isRoomCheckModalOpen}
        setIsRoomCheckModalOpen={setIsRoomCheckModalOpen}
        formState={formState}
        setFormState={setFormState}
        bookingInfoRef={bookingInfoRef}
        isCalendarOpen={isCalendarOpen}
        setIsCalendarOpen={setIsCalendarOpen}
        isGuestOpen={isGuestOpen}
        setIsGuestOpen={setIsGuestOpen}
        peopleLimit={peopleLimit}
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
        <ReviewModal
          showReviewModal={showReviewModal}
          setShowReviewModal={setShowReviewModal}
          infoRes={infoRes}
          roomId={roomId}
          detailObj={detailObj}
        />
        <AuthModalContainer />
        <RoomCheckModal
          isRoomCheckModalOpen={isRoomCheckModalOpen}
          setIsRoomCheckModalOpen={setIsRoomCheckModalOpen}
          modal={modal}
          setModal={setModal}
          formState={formState}
          setFormState={setFormState}
        />
      </Modal>
    </>
  );
};
export default DetailContainer;
