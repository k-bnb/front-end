import React from 'react';
import CommonBg from '../../../atoms/atoms-reservation/atoms-modal/CommonBg';
import CommonTemp from '../../../atoms/atoms-reservation/atoms-modal/CommonTemp';
import PaymentConfirmOrganism from './PaymentConfirmOrganism';

const CompletePaymentModalOrganism = ({ moveToHomeClick }) => {
  return (
    <CommonBg review>
      <CommonTemp paymentModal>
        <PaymentConfirmOrganism moveToHomeClick={moveToHomeClick} />
      </CommonTemp>
    </CommonBg>
  );
};

export default CompletePaymentModalOrganism;
