import React from 'react';
import styled from 'styled-components';
import PageLoading from '../../UI/molecules/molecules-personalInfo/PageLoading';
import ReserveConfirmFooter from '../../UI/molecules/molecules-reserveConfirm/ReserveConfirmFooter';
import FooterStr from '../../UI/organisms/organisms-list/FooteStr';
// import HeadStyle from '../../UI/organisms/organisms-list/HeadStyle';
import ReserveConfirmhead from '../../UI/organisms/organisms-reserveconfirm/ReserveConfirmhead';
import ReserveConfirmheader from '../../UI/organisms/organisms-reserveconfirm/ReserveConfirmheader';
import ReserveConfirmSection from '../../UI/organisms/organisms-reserveconfirm/ReserveConfirmSection';
// import HeaderList from '../templates-header/HeaderList';

const ReserveConfirmTemplateStyle = styled.div`
  max-width: 1180px;
  min-width: 1180px;
  min-height: 900px;
  margin: 0 auto;
  padding-top: 100px;
`;
const ReserveConfirmTemplate = ({
  active,
  activClick,
  list,
  modalState,
  cancel,
  cancelBtn,
  cancelModal,
  reservationConfirmBtn,
  reservationId,
  reviewModalState,
  setReviewModalState,
  review,
  reviewRoomId,
  listModal,
  cancelModalState,
  roomId,
  resonChange,
  miniModal,
  miniModalCancelBtn,
  reserveconfirmLoading,
  disabledBtn,
}) => {
  return (
    <ReserveConfirmTemplateStyle>
      <ReserveConfirmheader />
      <ReserveConfirmhead />
      {(reserveconfirmLoading['user/USER_INFO'] &&
        reserveconfirmLoading['user/RESERVE_CONFIRM']) ||
      reserveconfirmLoading['user/REVIEW'] ? (
        <PageLoading />
      ) : (
        <ReserveConfirmSection
          reserveconfirmLoading={reserveconfirmLoading}
          list={list}
          active={active}
          activClick={activClick}
          modalState={modalState}
          cancel={cancel}
          cancelBtn={cancelBtn}
          cancelModal={cancelModal}
          reservationConfirmBtn={reservationConfirmBtn}
          reservationId={reservationId}
          reviewModalState={reviewModalState}
          setReviewModalState={setReviewModalState}
          review={review}
          reviewRoomId={reviewRoomId}
          listModal={listModal}
          cancelModalState={cancelModalState}
          roomId={roomId}
          resonChange={resonChange}
          miniModal={miniModal}
          miniModalCancelBtn={miniModalCancelBtn}
          disabledBtn={disabledBtn}
        />
      )}

      <ReserveConfirmFooter />
      <FooterStr />
    </ReserveConfirmTemplateStyle>
  );
};

export default ReserveConfirmTemplate;
