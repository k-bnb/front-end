import React, { useState } from 'react';
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
`;

const DotText = styled(Text)`
  /* margin: 0 3px; */
`;

const LocateInfo = styled(Text)`
  margin-bottom: 5px;
`;

const PageTitle = ({ infoRes }) => {
  // const [isClick, setIsClick] = useState(false);

  return (
    <AccommodationTitle>
      <div className="title-container">
        <Title>
          조이 하우스 두번째 이야기 오션뷰 & 테라스/이호테우해변{infoRes.name}{' '}
        </Title>
        <DetailData>
          <AccommodationDetail>
            <Grade grade={infoRes.grade} />
            <Text>( {infoRes.commentCount})</Text>
            <DotText gray>.</DotText>
            <LocateInfo gray bold underline>
              {infoRes.locationDetail.neighborhood},{' '}
              {infoRes.locationDetail.city}, {infoRes.locationDetail.country}
            </LocateInfo>
          </AccommodationDetail>
          <TextunderlineBtn
            isChecked={!infoRes.isChecked}
            onClick={() => {
              // store의 isChecked 값을 바꿔주어야 한다.
              // console.log('fdfds');
              // setIsClick(!isClick);
            }}
          />
        </DetailData>
      </div>
    </AccommodationTitle>
  );
};

export { PageTitle };
