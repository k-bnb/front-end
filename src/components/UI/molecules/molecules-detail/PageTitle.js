import React from 'react';
import styled from 'styled-components';
import TextunderlineBtn from '../../atoms/atoms-detail/TextunderlineBtn';
import Grade from '../../atoms/atoms-detail/Grade';
import Text from '../../atoms/atoms-detail/DetailText';

const AccommodationTitle = styled.div`
  max-width: 1128px;
  margin: 0 auto;
  .title-container {
    padding-top: 24px;
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  line-height: 30px;
  font-weight: 600;
  word-break: break-word;
  margin: 0;
  margin-bottom: 4px;
`;

const DetailData = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const AccommodationDetail = styled.div`
  display: inline-flex;
  align-items: center;
`;

const DotText = styled(Text)`
  margin: 0 0 3px;
`;

const LocateInfo = styled(Text)`
  /* padding-top: 3px; */
  margin-bottom: 3px;
`;

const PageTitle = ({ infoRes }) => {
  return (
    <AccommodationTitle>
      <div className="title-container">
        <Title aria-label="숙소이름">{infoRes.name} </Title>
        <DetailData>
          <AccommodationDetail>
            <Grade bold grade={infoRes.grade} bookingInfo />
            <Text gray>({infoRes.commentCount})</Text>
            <DotText gray>.</DotText>
            <LocateInfo gray bold underline tabIndex="1">
              {infoRes.locationDetail.neighborhood},{' '}
              {infoRes.locationDetail.city}, {infoRes.locationDetail.country}
            </LocateInfo>
          </AccommodationDetail>
          <TextunderlineBtn
            isChecked={!infoRes.isChecked}
            onClick={() => {
              // store의 isChecked 값을 바꿔주어야 한다.
              // setIsClick(!isClick);
            }}
          />
        </DetailData>
      </div>
    </AccommodationTitle>
  );
};

export { PageTitle };
