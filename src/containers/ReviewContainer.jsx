import React from 'react';
import Review from '../components/UI/organisms/organisms-detail/Review';

const ReviewContainer = ({
  reviewRef,
  showReviewModal,
  setShowReviewModal,
  infoRes,
}) => {
  return (
    <Review
      reviewRef={reviewRef}
      showReviewModal={showReviewModal}
      setShowReviewModal={setShowReviewModal}
    />
  );
};

export default ReviewContainer;
