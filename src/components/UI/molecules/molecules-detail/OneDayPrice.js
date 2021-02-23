import React from 'react';
import styled from 'styled-components';
import Text from '../../atoms/atoms-detail/DetailText';
import Grade from '../../atoms/atoms-detail/Grade';

const PriceInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 24px;
`;

const PriceBox = styled.div`
  display: flex;
`;

const Price = styled.div`
  font-size: 22px;
  line-height: 26px;
  font-weight: 600;
`;
const PriceInner = styled.span`
  white-space: nowrap;
  padding-left: 4px;
  margin-top: 5px;
  vertical-align: bottom;
`;

const NoDateBox = styled.div`
  display: flex;
  width: 100%;
  font-size: 22px;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 24px;
`;

const NoDateText = styled(Text)`
  font-size: 22px;
  line-height: 27px;
  align-items: baseline;
`;

const OneDayPrice = ({ infoRes, detailObj }) => {
  if (detailObj.startDate === '' || detailObj.endDate === '') {
    return (
      <NoDateBox>
        <NoDateText bold block noPadding>
          요금을 확인하려면 날짜를 입력하세요.
        </NoDateText>
        <Text block flex>
          <Grade bold grade={infoRes.grade} bookingInfo infobox={true} />
          <Text gray>({infoRes.commentCount})</Text>
        </Text>
      </NoDateBox>
    );
  } else {
    return (
      <PriceInfo>
        {/* endDate가 null 일 경우에는 roomCost 띄우지 않기 */}
        <PriceBox>
          <Price> ₩ {infoRes.roomCost}</Price>
          <PriceInner>/박</PriceInner>
        </PriceBox>
        <Grade grade={infoRes.grade} infobox={true} />
        {/* ({infoRes.commentCount}) */}
      </PriceInfo>
    );
  }
};

export default OneDayPrice;
