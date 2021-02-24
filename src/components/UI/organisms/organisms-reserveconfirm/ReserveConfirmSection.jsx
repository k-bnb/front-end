import React, { useEffect, useState } from 'react';
import ReserveConfirmNav from '../../molecules/molecules-reserveConfirm/ReserveConfirmNav';
import ReserveConfirmList from '../../molecules/molecules-reserveConfirm/ReserveConfirmList';
// import ReserveConfirmFooter from '../../molecules/molecules-reserveConfirm/ReserveConfirmFooter';
import styled from 'styled-components';
import ReserveConfirmNoData from '../../molecules/molecules-reserveConfirm/ReserveConfirmNoData';
import Modal from '../../../../portal/Modal';
import ReserveCancelModal from '../../molecules/molecules-reserveConfirm/ReserveCancelModal';
import ReserveCancel from '../../molecules/molecules-reserveConfirm/ReserveCancel';
import ReviewModalContainer from '../../../../containers/modal/ReviewModalContainer';
import ConfirmModal from '../../molecules/molecules-reserveConfirm/ConfirmModal';

const ReserveConfirmSectionStyle = styled.div`
  display: inline-flex;
  flex-wrap: wrap;

  width: 100%;

  /* justify-content: center; */
`;

const ReserveConfirmSection = ({
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
}) => {
  console.log(list);
  return (
    <>
      <ReserveConfirmNav active={active} activClick={activClick} />
      <ReserveConfirmSectionStyle>
        {list?.length ? (
          list?.map((item) => (
            <ReserveConfirmList
              key={item.reservationId}
              item={item}
              list={list}
              modalState={modalState}
              cancel={cancel}
              cancelBtn={cancelBtn}
              cancelModal={cancelModal}
              reviewModalState={reviewModalState}
              review={review}
              reserveconfirmLoading={reserveconfirmLoading}
            />
          ))
        ) : (
          <ReserveConfirmNoData active={active} />
        )}
        {cancelModalState && (
          <Modal>
            <ReserveCancelModal
              cancelModal={cancelModal}
              cancelModalState={cancelModalState}
            >
              <ReserveCancel
                roomId={roomId}
                reservationConfirmBtn={reservationConfirmBtn}
                cancel={cancel}
                cancelBtn={cancelBtn}
                reservationId={reservationId}
                resonChange={resonChange}
                miniModal={miniModal}
              />
            </ReserveCancelModal>
          </Modal>
        )}

        <Modal>
          <ConfirmModal
            miniModal={miniModal}
            miniModalCancelBtn={miniModalCancelBtn}
          ></ConfirmModal>
        </Modal>

        {reviewModalState && (
          <Modal>
            <ReviewModalContainer
              reviewModalState={reviewModalState}
              setReviewModalState={setReviewModalState}
              reviewRoomId={reviewRoomId}
              list={list}
              review={review}
            />
          </Modal>
        )}
      </ReserveConfirmSectionStyle>
    </>
  );
};

export default ReserveConfirmSection;
