import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ImageFrame from '../../UI/organisms/organisms-detail/ImageFrame';
import { PageTitle } from '../../UI/molecules/molecules-detail/PageTitle';
import ImportantNotice from '../../UI/organisms/organisms-detail/ImportantNotice';
import WrappingContainer from '../../UI/organisms/organisms-detail/WrappingContainer';
import LoadingModal from '../LoadingModal';
import ReviewContainer from '../../../containers/ReviewContainer';
import { getCancellableDate } from '../../../modules/detail';
import { useDispatch } from 'react-redux';
import FooterStr from '../../UI/organisms/organisms-list/FooteStr';
import RoomCheckModal from '../RoomCheckModal';

const Theme = {
  laptop: `screen and (min-width: 1024px)`,
  tablet: `screen and (min-width: 677px)and (max-width: 1025px)`,
  mobile: `screen and (max-width: 677px)`,
};

const DetailTemplate = styled.div`
  padding: 80px 80px 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(34, 34, 34);
  margin: 0 auto;
  max-width: 1280px;

  @media ${Theme.laptop} {
    padding: 80px 80px 0;
  }
  @media ${Theme.tablet} {
    padding: 80px 40px 0;
  }
  @media ${Theme.mobile} {
    padding: 80px 24px 0;
  }
`;

const Detail = ({
  setShowModal,
  current,
  setCurrent,
  DetailHeaderRef,
  ImageContainerRef,
  reviewRef,
  facilityRef,
  moveToReserve,
  infoRes,
  isLoading,
  detailObj,
  roomImgUrlList,
  showReviewModal,
  setShowReviewModal,
  detailAuthModal,
  setDetailAuthModal,
  modal,
  setModal,
  formState,
  setFormState,
  bookingInfoRef,
  GuestModalRef,
  isCalendarOpen,
  setIsCalendarOpen,
  isGuestOpen,
  setIsGuestOpen,
  peopleLimit,
  isRoomCheckModalOpen,
  setIsRoomCheckModalOpen,
}) => {
  const CheckInDate = () => {
    const strDate = detailObj.startDate ? detailObj.startDate.split('-') : '';
    return { year: strDate[0], month: strDate[1], day: strDate[2] };
  };

  const CancellableDate = {
    month: parseInt(CheckInDate().month),
    day: parseInt(CheckInDate().day) - 1,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCancellableDate(CancellableDate.month, CancellableDate.day));
  }, []);

  return (
    <>
      <DetailTemplate Theme={Theme} infoRes={infoRes}>
        <PageTitle
          infoRes={infoRes}
          isRoomCheckModalOpen={isRoomCheckModalOpen}
          setIsRoomCheckModalOpen={setIsRoomCheckModalOpen}
        />
        <ImageFrame
          setShowModal={setShowModal}
          current={current}
          setCurrent={setCurrent}
          ImageContainerRef={ImageContainerRef}
          roomImgUrlList={roomImgUrlList}
        />
        <WrappingContainer
          DetailHeaderRef={DetailHeaderRef}
          facilityRef={facilityRef}
          moveToReserve={moveToReserve}
          infoRes={infoRes}
          detailObj={detailObj}
          CancellableDate={CancellableDate}
          detailAuthModal={detailAuthModal}
          setDetailAuthModal={setDetailAuthModal}
          modal={modal}
          setModal={setModal}
          formState={formState}
          setFormState={setFormState}
          bookingInfoRef={bookingInfoRef}
          isCalendarOpen={isCalendarOpen}
          setIsCalendarOpen={setIsCalendarOpen}
          GuestModalRef={GuestModalRef}
          isGuestOpen={isGuestOpen}
          setIsGuestOpen={setIsGuestOpen}
          peopleLimit={peopleLimit}
        />
        <ReviewContainer
          reviewRef={reviewRef}
          showReviewModal={showReviewModal}
          setShowReviewModal={setShowReviewModal}
          commentList={infoRes.commentList}
          infoRes={infoRes}
          detailObj={detailObj}
        />
        <ImportantNotice infoRes={infoRes} CancellableDate={CancellableDate} />
      </DetailTemplate>
      <FooterStr />
      {isLoading && <LoadingModal />}
    </>
  );
};

export default Detail;
