import React from 'react';
import Review from '../components/UI/organisms/organisms-detail/Review';

const ReviewContainer = ({
  reviewRef,
  showReviewModal,
  setShowReviewModal,
  infoRes,
  detailObj,
}) => {
  return (
    <Review
      infoRes={infoRes}
      reviewRef={reviewRef}
      showReviewModal={showReviewModal}
      setShowReviewModal={setShowReviewModal}
      detailObj={detailObj}
    />
  );
};

export default ReviewContainer;
