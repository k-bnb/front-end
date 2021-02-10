import React from 'react';
import Input from '../../atoms/atoms-main/Input';

const PersonalInfoBirthinput = () => {
  return (
    <div>
      <Input type="date" name="birth" required pattern="\d{4}-\d{2}-\d{2}" />
      <button>저장</button>
    </div>
  );
};

export default PersonalInfoBirthinput;
