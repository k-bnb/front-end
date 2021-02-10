import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/atoms-main/Button';
import Input from '../../atoms/atoms-main/Input';

const PersonalInfoBirthinputStyle = styled.div`
  input {
    padding: 15px;
  }
`;

const PersonalInfoBirthinput = () => {
  return (
    <PersonalInfoBirthinputStyle>
      <div>
        <Input type="date" name="birth" required pattern="\d{4}-\d{2}-\d{2}" />
      </div>
      <Button save>저장</Button>
    </PersonalInfoBirthinputStyle>
  );
};

export default PersonalInfoBirthinput;
