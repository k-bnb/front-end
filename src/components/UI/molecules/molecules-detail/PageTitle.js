import React, { useState } from 'react';
import styled from 'styled-components';
import TextunderlineBtn from '../../atoms/atoms-detail/TextunderlineBtn';
import Grade from '../../atoms/atoms-detail/Grade';

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

const PageTitle = ({ infoRes }) => {
  const [isClick, setIsClick] = useState(false);

  return (
    <AccommodationTitle>
      <div className="title-container">
        <Title>
          조이 하우스 두번째 이야기 오션뷰 & 테라스/이호테우해변{infoRes.name}{' '}
        </Title>
        <DetailData>
          <Grade grade={infoRes.grade} />
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
