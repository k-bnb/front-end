import React from 'react';
import CommonBg from '../../atoms/atoms-reservation/atoms-modal/CommonBg';
import ReviewFirstpageOrganism from './ReviewFirstpageOrganism';

function ReviewModalOrganism({
  reviewName,
  reviewModalState,
  cancelModalButton,
  roomId,
}) {
  return (
    <CommonBg review>
      <ReviewFirstpageOrganism
        reviewName={reviewName}
        reviewModalState={reviewModalState}
        cancelModalButton={cancelModalButton}
        roomId={roomId}
      />
    </CommonBg>
  );
}

export default ReviewModalOrganism;
