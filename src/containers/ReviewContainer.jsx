import React from 'react';
import Review from '../components/UI/organisms/organisms-detail/Review';

const ReviewContainer = ({ reviewRef, infoRes }) => {
  return <Review infoRes={infoRes} reviewRef={reviewRef} />;
};

export default ReviewContainer;
