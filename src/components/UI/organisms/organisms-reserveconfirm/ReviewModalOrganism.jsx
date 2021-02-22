import React from 'react';
import CommonBg from '../../atoms/atoms-reservation/atoms-modal/CommonBg';
import ReviewFirstpageOrganism from './ReviewFirstpageOrganism';
import ReviewSecondOrganism from './ReviewSecondOrganism';

function ReviewModalOrganism({
  reviewName,
  reviewModalState,
  cancelModalButton,
  reviewRoomId,
  hostName,
  formState,
  moveNextComponent,
  backButtonRef,
  removeModalBg,
  wirteReview,
  description,
}) {
  console.log(formState);

  return (
    <CommonBg className="remove-modal" review onClick={removeModalBg}>
      {formState === 'starForm' && (
        <ReviewFirstpageOrganism
          reviewName={reviewName}
          reviewModalState={reviewModalState}
          cancelModalButton={cancelModalButton}
          hostName={hostName}
          moveNextComponent={moveNextComponent}
        />
      )}
      {formState === 'writeForm' && (
        <ReviewSecondOrganism
          moveNextComponent={moveNextComponent}
          backButtonRef={backButtonRef}
          cancelModalButton-={cancelModalButton}
          wirteReview={wirteReview}
          description={description}
        />
      )}
    </CommonBg>
  );
}

export default ReviewModalOrganism;
