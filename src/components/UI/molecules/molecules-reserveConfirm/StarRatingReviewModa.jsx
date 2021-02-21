import React from 'react';
import CommonText from '../../atoms/atoms-reservation/atoms-modal/CommonText';
import ReservationUnderLine from '../../atoms/atoms-reservation/ResevationUnderLine';
import StarRating from '../../atoms/atoms-reserveconfirm/StarRating';

const StarRatingReviewModa = ({ children }) => {
  console.log(children);
  return (
    <div>
      <CommonText starName>{children}</CommonText>
      <StarRating />
      <ReservationUnderLine reviewLine />
    </div>
  );
};

export default StarRatingReviewModa;
