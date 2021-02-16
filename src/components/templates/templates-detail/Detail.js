import React from 'react';
import styled from 'styled-components';
import ImageFrame from '../../UI/organisms/organisms-detail/ImageFrame';
import { PageTitle } from '../../UI/molecules/molecules-detail/PageTitle';
import ImportantNotice from '../../UI/organisms/organisms-detail/ImportantNotice';
//import Review from '../../UI/organisms/organisms-detail/Review';
import WrappingContainer from '../../UI/organisms/organisms-detail/WrappingContainer';
import LoadingModal from '../LoadingModal';
import ReviewContainer from '../../../containers/ReviewContainer';
//import Modal from '../../../portal/Modal';

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
  // showModal,
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
}) => {
  // const strStartDate = detailObj.startDate;
  const CheckInDate = () => {
    const strDate = detailObj.startDate.split('-');
    return { year: strDate[0], month: strDate[1], day: strDate[2] };
  };

  const CancellableDate = {
    month: parseInt(CheckInDate().month),
    day: parseInt(CheckInDate().day) - 1,
  };

  return (
    <>
      <DetailTemplate Theme={Theme} infoRes={infoRes}>
        <PageTitle infoRes={infoRes} />
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
        />
        {isLoading && <LoadingModal />}
        <ReviewContainer reviewRef={reviewRef} infoRes={infoRes} />
        <ImportantNotice infoRes={infoRes} CancellableDate={CancellableDate} />
        {/* <Review reviewRef={reviewRef} commentList={infoRes.commentList} /> */}
      </DetailTemplate>
    </>
  );
};

export default Detail;
