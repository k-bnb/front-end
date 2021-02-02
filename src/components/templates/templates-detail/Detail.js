import React from 'react';
import styled from 'styled-components';
import CountBtn from '../../UI/atoms/atoms-detail/CountBtn';
import ImageFrame from '../../UI/atoms/atoms-detail/ImageFrame';
import WhiteBtn from '../../UI/atoms/atoms-detail/WhiteBtn';
import DetailInfoContainer from '../../UI/molecules/molecules-detail/DetailInfoContainer';
import { PageTitle } from '../../UI/molecules/molecules-detail/PageTitle';
import Review from '../../UI/molecules/molecules-detail/Review';

const DetailContainer = styled.div`
  font-size: 14px;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 80px;
`;

const Detail = () => {
  return (
    <DetailContainer>
      <PageTitle />
      <ImageFrame />
      <DetailInfoContainer />
      <Review />
      <CountBtn />
      <WhiteBtn />
      {/* <SavedListsModal /> */}
    </DetailContainer>
  );
};

export default Detail;
