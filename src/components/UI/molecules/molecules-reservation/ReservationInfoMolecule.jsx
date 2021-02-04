import React from 'react';
import styled from 'styled-components';
import ReservationContent from '../../atoms/atoms-reservation/ReservationContent';
import ReservationCommonButton from '../../atoms/atoms-reservation/ReservationCommonButton';

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

  return (
    <Container>
      <div>
        <LayoutReservationContent bold children={title} />
        <ReservationContent normal children={content} />
      </div>
      <ReservationCommonButton edit>수정</ReservationCommonButton>
    </Container>
  );
};

export default ReservationInfoMolecule;
