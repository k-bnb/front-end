import React, { useEffect, useState } from 'react';
import ReserveConfirmNav from '../../molecules/molecules-reserveConfirm/ReserveConfirmNav';
import ReserveConfirmList from '../../molecules/molecules-reserveConfirm/ReserveConfirmList';
// import ReserveConfirmFooter from '../../molecules/molecules-reserveConfirm/ReserveConfirmFooter';
import styled from 'styled-components';
import ReserveConfirmNoData from '../../molecules/molecules-reserveConfirm/ReserveConfirmNoData';
import Modal from '../../../../portal/Modal';
import ReserveCancelModal from '../../molecules/molecules-reserveConfirm/ReserveCancelModal';
import ReserveCancel from '../../molecules/molecules-reserveConfirm/ReserveCancel';
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
  listModal,
  cancelModalState,
  roomId,
  resonChange,
  miniModal,
  miniModalCancelBtn,
}) => {
  return (
    <>
      <ReserveConfirmNav active={active} activClick={activClick} />
      <ReserveConfirmSectionStyle>
        {list?.length ? (
          list?.map((item) => (
            <ReserveConfirmList
              item={item}
              list={list}
              modalState={modalState}
              cancel={cancel}
              cancelBtn={cancelBtn}
              cancelModal={cancelModal}
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

        {active === '이전 예약' && (
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
      </ReserveConfirmSectionStyle>
    </>
  );
};

export default ReserveConfirmSection;
