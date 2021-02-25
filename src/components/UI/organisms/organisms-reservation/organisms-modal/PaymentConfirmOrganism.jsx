import React from 'react';
import styled from 'styled-components';
import CommonImg from '../../../atoms/atoms-reservation/CommonImg';
import CommonParagraph from '../../../atoms/atoms-reservation/CommonParagraph';
import CommonSpan from '../../../atoms/atoms-reservation/CommonSpan';
import CommonTitle from '../../../atoms/atoms-reserveconfirm/CommonTitle';
import ReservationCostMolecule from '../../../molecules/molecules-reservation/ReservationCostMoecule';
import ReservationSummaryMolecule from '../../../molecules/molecules-reservation/ReservationSummaryMolecule';

const Container = styled.section``;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 30px;
`;

const StyledButton = styled.button`
  padding: 0;
  border: none;
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  outline: none;
  cursor: pointer;
  color: #fff;

  font-size: 16px;
  font-weight: 600;
  padding: 10px 15px;
  border-radius: 5px;
`;

const ImgContainer = styled.div`
  width: 80px;
  height: 80px;
`;

const PaymentConfirmOrganism = ({ moveToHomeClick }) => {
  const staticChildren = {
    // cost: `₩${roomCost} x ${RoomDay}박`,
    cost: `₩1000 x 1박`,
    cleaningFee: '청소비',
    serviceFee: '서비스 수수료',
    lodgmentFee: '숙박세와 수수료',
    totalFee: '총 합계 (KRW)',
  };

  const dataChildren = {
    cost: `₩1000`,
    cleaningFee: `₩1000`,
    serviceFee: `₩1000`,
    lodgmentFee: `₩2000`,
    totalFee: `₩$2000`,
  };

  // const dataChildren = {
  //   cost: `₩${roomTaxPrice}`,
  //   cleaningFee: `₩${cleaningCost}`,
  //   serviceFee: `₩${tax}`,
  //   lodgmentFee: `₩${roomTaxPrice * 0.2}`,
  //   totalFee: `₩${
  //     !isNaN(roomCost)
  //       ? roomTaxPrice + cleaningCost + tax + roomTaxPrice * 0.1
  //       : 0
  //   }`,
  // };

  return (
    <Container>
      <CommonTitle center>결제가 완료되었습니다.</CommonTitle>
      <HeaderContainer>
        {/* <ImgContainer>
          <CommonImg RoomTablePhotoImgURL="/." />
        </ImgContainer> */}
      </HeaderContainer>
      <MainContainer>
        <ReservationCostMolecule>{staticChildren}</ReservationCostMolecule>
        <ReservationCostMolecule price>{dataChildren}</ReservationCostMolecule>
      </MainContainer>
      <FooterContainer>
        <StyledButton onClick={moveToHomeClick}>홈으로 가기</StyledButton>
      </FooterContainer>
    </Container>
  );
};

export default PaymentConfirmOrganism;
