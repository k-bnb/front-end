import React from 'react';
import styled from 'styled-components';
import CommonBg from '../../../atoms/atoms-reservation/atoms-modal/CommonBg';
import CommonTemp from '../../../atoms/atoms-reservation/atoms-modal/CommonTemp';
import CommonButton from '../../../atoms/atoms-reservation/CommonButton';
import ReservationCostMoecule from '../../../molecules/molecules-reservation/ReservationCostMoecule';
import { withRouter } from 'react-router-dom';
import ReservationTitle from '../../../atoms/atoms-reservation/ReservationTitle';
import ReservationSummaryMolecule from '../../../molecules/molecules-reservation/ReservationSummaryMolecule';

const HeaderContainer = styled.div``;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterContainer = styled.div`
  text-align: center;
  margin: 10px 0;
`;

function ComfirmModalOrganism({ history }) {
  const staticChildren = {
    cost: '₩43,000 x 2박',
    cleaningFee: '청소비',
    serviceFee: '서비스 수수료',
    lodgmentFee: '숙박세와 수수료',
    totalFee: '총 합계 (KRW)',
  };

  const dataChildren = {
    cost: '₩86,000',
    cleaningFee: '₩29,000',
    serviceFee: '₩16,235',
    lodgmentFee: '₩1,624',
    totalFee: '₩132,859',
  };

  const roomInfoChildren = {
    url: '',
    rate: '',
    furnitureInfo: '',
  };

  const directHome = () => {
    history.push('/');
  };

  return (
    <CommonBg comfirmBg>
      <CommonTemp comfirmModal>
        <HeaderContainer>
          <ReservationTitle sub children="요금 세부정보" />
          <ReservationSummaryMolecule children={roomInfoChildren} />
        </HeaderContainer>
        <MainContainer>
          <ReservationCostMoecule children={staticChildren} />
          <ReservationCostMoecule children={dataChildren} />
        </MainContainer>
        <FooterContainer>
          <CommonButton reservation directHome={directHome}>
            홈으로 가기
          </CommonButton>
        </FooterContainer>
      </CommonTemp>
    </CommonBg>
  );
}

export default withRouter(ComfirmModalOrganism);
