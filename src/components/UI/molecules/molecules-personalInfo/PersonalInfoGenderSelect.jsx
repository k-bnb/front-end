import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import Button from '../../atoms/atoms-main/Button';
import Selector from '../../atoms/atoms-personalinfo/Selector';

const PersonalInfoGenderSelectStyle = styled.div`
  /* border: 1px solid; */

  .select-gender {
  }
`;

const PersonalInfoGenderSelect = () => {
  const options = [
    { value: '성별', label: '성별', isDisabled: true },
    { value: '남자', label: '남자' },
    { value: '여자', label: '여자' },
    { value: '기타', label: '기타' },
  ];
  const defultValue = [{ value: '성별' }];

  return (
    <PersonalInfoGenderSelectStyle>
      <div className="select-gender">
        <Selector defultValue={defultValue} options={options} />
      </div>
      <Button save>저장</Button>
    </PersonalInfoGenderSelectStyle>
  );
};

export default PersonalInfoGenderSelect;
