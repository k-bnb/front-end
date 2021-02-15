import React from 'react';
import styled from 'styled-components';
import ImageFrame from '../../UI/organisms/organisms-detail/ImageFrame';
import { PageTitle } from '../../UI/molecules/molecules-detail/PageTitle';
import ImportantNotice from '../../UI/organisms/organisms-detail/ImportantNotice';
import Review from '../../UI/organisms/organisms-detail/Review';
import WrappingContainer from '../../UI/organisms/organisms-detail/WrappingContainer';
import Modal from '../../../portal/Modal';
import LoaderIcon from 'react-loader-icon';
import { useSelector } from 'react-redux';

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

<<<<<<< HEAD
const Detail = ({ setShowModal, Theme }) => {
  return (
    <>
      <DetailTemplate Theme={Theme}>
        <PageTitle name />
        <ImageFrame setShowModal={setShowModal} />
        <WrappingContainer />
      </DetailTemplate>
      <Review />
=======
const Detail = ({
  showModal,
  setShowModal,
  current,
  setCurrent,
  DetailHeaderRef,
  ImageContainerRef,
  reviewRef,
  facilityRef,
  moveToReserve,
}) => {
  const loading = useSelector(
    (state) => state.loading['detail/REQUEST_DETAIL'],
  );

  return (
    <>
      <DetailContainer theme={theme}>
        <PageTitle />
        <ImageFrame
          setShowModal={setShowModal}
          current={current}
          setCurrent={setCurrent}
          ImageContainerRef={ImageContainerRef}
        />
        <WrappingContainer
          DetailHeaderRef={DetailHeaderRef}
          facilityRef={facilityRef}
          moveToReserve={moveToReserve}
        />
        {/* {loading && (
          <Modal>
            <LoaderIcon type={'bubbles'} />
          </Modal>
        )} */}
        {/* <SavedListsModal /> */}
      </DetailContainer>
      <Review reviewRef={reviewRef} />
>>>>>>> 93b85d8bda9d84d59a821f5acab2b9787aabcc41
      <ImportantNotice />
    </>
  );
};

export default Detail;
