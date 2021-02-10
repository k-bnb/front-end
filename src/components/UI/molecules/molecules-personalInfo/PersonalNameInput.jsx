import React from 'react';
import TextStyle from '../../atoms/atoms-main/TextStyle';

const PersonalNameInput = () => {
  return (
    <div>
      <TextStyle>
        허가증이나 여권 등 여행 서류에 기재외더 있는 이름을 말합니다.
      </TextStyle>
      <div>
        <label htmlFor="">이름</label>
        <input type="text" />
        <label htmlFor="">성</label>
        <input type="text" />
      </div>
      <button>저장</button>
    </div>
  );
};

export default PersonalNameInput;
