import React from 'react';
import styled from 'styled-components';
import ReservationContent from '../../atoms/atoms-reservation/ReservationContent';
import ReservationCommonButton from '../../atoms/atoms-reservation/ReservationCommonButton';
import ReservationCommonButton2 from '../../atoms/atoms-reservation/ReservationCommonButton2';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: baseline;
  margin-top: 2.2rem;
`;

const LayoutReservationContent = styled(ReservationContent)`
  margin-bottom: 0.8rem;
`;

const ReservationInfoMolecule = ({
  children,
  modal,
  manageModal,
  checkDate,
  saveDate,
}) => {
  const { title, content } = children;

  console.log(title);

  return (
    <Container>
      <div>
        <LayoutReservationContent bold children={title} />
        <ReservationContent normal children={content} />
      </div>
      {title === '날짜' ? (
        <ReservationCommonButton
          edit
          dateModal={modal}
          manageDateModal={manageModal}
          checkDate={checkDate}
          saveDate={saveDate}
          title={title}
        >
          수정
        </ReservationCommonButton>
      ) : (
        <ReservationCommonButton2
          edit
          guestModal={modal}
          manageGuestModal={manageModal}
          title={title}
        >
          수정
        </ReservationCommonButton2>
      )}
    </Container>
  );
};

export default ReservationInfoMolecule;
