import React from 'react';
import EmptyReview from '../components/UI/molecules/molecules-detail/EmptyReview';
import Review from '../components/UI/organisms/organisms-detail/Review';

const ReviewContainer = ({
  reviewRef,
  showReviewModal,
  setShowReviewModal,
  infoRes,
  detailObj,
}) => {
  return detailObj.commentCount === 0 ? (
    <EmptyReview />
  ) : (
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
