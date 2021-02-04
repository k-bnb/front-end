import React from 'react';
import styled from 'styled-components';
import ImageFrame from '../../UI/atoms/atoms-detail/ImageFrame';
import DetailInfoContainer from '../../UI/molecules/molecules-detail/DetailInfoContainer';
import { PageTitle } from '../../UI/molecules/molecules-detail/PageTitle';
import ImportantNotice from '../../UI/organisms/organisms-detail/ImportantNotice';
import Review from '../../UI/organisms/organisms-detail/Review';

import HeaderDetail from '../templates-header/HeaderDetail';

const DetailContainer = styled.div`
  font-size: 14px;
  margin: 0 auto;
  max-width: 1280px;
  padding: 80px 80px 0;
`;

const Detail = () => {
  return (
    <>
      <HeaderDetail />
      <DetailContainer>
        <PageTitle />
        <ImageFrame />
        <DetailInfoContainer />
        {/* <SavedListsModal /> */}
      </DetailContainer>
      <Review />
      <ImportantNotice />
    </>
  );
};

export default Detail;
