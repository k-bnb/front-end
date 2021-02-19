import React from 'react';
import styled from 'styled-components';
import ReservationHostImg from '../../atoms/atoms-reservation/ReservationHostImg';
import ReservationHostName from '../../atoms/atoms-reservation/ReservationHostName';
import ReservationHostNotice from '../../atoms/atoms-reservation/ReservationHostNotice';
import ReservationCommonContainer from '../../atoms/atoms-reservation/ReservationCommonContainer';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 1.6rem;
  margin-bottom: 2.4rem;
  background: #f7f7f7;
  border-radius: 0.8rem;
`;

const LayoutReservationCommonContainer = styled(ReservationCommonContainer)`
  margin-right: 1.5rem;
`;

const HostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ReservationHostMolecule = ({ hostName, hostImgURL }) => {
  return (
    <Container>
      <LayoutReservationCommonContainer hostImg>
        <ReservationHostImg img={hostImgURL} alt="host profile img" />
      </LayoutReservationCommonContainer>
      <HostInfoContainer>
        <ReservationHostName host children={hostName} />
        <ReservationHostNotice
          host
          children="안녕하세요. 저희 집에 방문하셔서 감사합니다."
        />
      </HostInfoContainer>
    </Container>
  );
};

export default ReservationHostMolecule;
