import React from 'react';
import ReserveConfirmNav from '../../molecules/molecules-reserveConfirm/ReserveConfirmNav';
import ReserveConfirmList from '../../molecules/molecules-reserveConfirm/ReserveConfirmList';
// import ReserveConfirmFooter from '../../molecules/molecules-reserveConfirm/ReserveConfirmFooter';
import styled from 'styled-components';
import ReserveConfirmNoData from '../../molecules/molecules-reserveConfirm/ReserveConfirmNoData';
import Modal from '../../../../portal/Modal';
import ReserveCancelModal from '../../molecules/molecules-reserveConfirm/ReserveCancelModal';
import ReserveCancel from '../../molecules/molecules-reserveConfirm/ReserveCancel';
import ReviewModalContainer from '../../../../containers/modal/ReviewModalContainer';

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
  roomId,
}) => {
  return (
    <>
      <ReserveConfirmNav active={active} activClick={activClick} />
      <ReserveConfirmSectionStyle>
        {list.length ? (
          list.map((item) => (
            <ReserveConfirmList
              item={item}
              list={list}
              modalState={modalState}
              cancel={cancel}
              cancelBtn={cancelBtn}
              cancelModal={cancelModal}
              reviewModalState={reviewModalState}
              review={review}
            />
          ))
        ) : (
          <ReserveConfirmNoData active={active} />
        )}
        {active === '예약 완료' && (
          <Modal>
            <ReserveCancelModal
              cancelModal={cancelModal}
              modalState={modalState}
            >
              <ReserveCancel
                reservationConfirmBtn={reservationConfirmBtn}
                list={list}
                cancel={cancel}
                cancelBtn={cancelBtn}
                reservationId={reservationId}
              />
            </ReserveCancelModal>
          </Modal>
        )}
        {reviewModalState && (
          <Modal>
            <ReviewModalContainer
              reviewModalState={reviewModalState}
              setReviewModalState={setReviewModalState}
              roomId={roomId}
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
