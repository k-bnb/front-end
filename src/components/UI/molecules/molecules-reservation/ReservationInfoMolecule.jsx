import React, { useState } from 'react';
import styled from 'styled-components';
import ReservationContent from '../../atoms/atoms-reservation/ReservationContent';
import ReservationCommonButton from '../../atoms/atoms-reservation/ReservationCommonButton';
import Modal from '../../../../potals/modals';
import EditDateModal from '../../../../potals/modals/EditDateModal';

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

const ReservationInfoMolecule = (props) => {
  const { title, content } = props.children;
  const [active, setActive] = useState(false);

  const openClick = () => {
    setActive(true);

    document.body.style.overflow = 'hidden';
  };

  return (
    <Container>
      <div>
        <LayoutReservationContent bold children={title} />
        <ReservationContent normal children={content} />
      </div>
      <ReservationCommonButton
        edit
        openClick={openClick}
        setActive={setActive}
        active={active}
      >
        수정
      </ReservationCommonButton>
      {active && (
        <Modal>
          <EditDateModal setActive={setActive} />
        </Modal>
      )}
    </Container>
  );
};

export default ReservationInfoMolecule;
