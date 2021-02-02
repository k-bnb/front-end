import React from './react';
import styled from 'styled-components';
import CountBtn from '../../atoms/atoms-detail/CountBtn';
import ImageFrame from '../../atoms/atoms-detail/ImageFrame';
import WhiteBtn from '../../atoms/atoms-detail/WhiteBtn';
import DetailInfoContainer from '../../molecules/molecules-detail/DetailInfoContainer';
import { PageTitle } from '../../molecules/molecules-detail/PageTitle';
import Review from '../../molecules/molecules-detail/Review';

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
