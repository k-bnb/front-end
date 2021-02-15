import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/atoms-main/Button';
import TextStyle from '../../atoms/atoms-main/TextStyle';

const PersonalNameInputStyle = styled.div`
  .person-info {
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
    /* flex-wrap: wrap; */
    div {
      display: flex;
      flex-direction: column;
      margin-right: 15px;

      width: 100%;
      margin-top: 15px;
      label {
        font-size: 1.8rem;
      }
      input {
        padding: 10px;
        outline: none;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        height: 40px;
        margin-top: 10px;
        &:focus {
          box-sizing: border-box;

          border-width: 1px;
          border-color: #008489;
        }
      }
    }
  }
`;
const PersonalNameInput = ({ personInfoChange }) => {
  return (
    <PersonalNameInputStyle>
      <TextStyle>
        허가증이나 여권 등 여행 서류에 기재외더 있는 이름을 말합니다.
      </TextStyle>
      <div className="person-info">
        <div>
          <label htmlFor="">이름</label>
          <input type="text" name={'name'} onChange={personInfoChange} />
        </div>
      </div>
      <Button save>저장</Button>
    </PersonalNameInputStyle>
  );
};

export default PersonalNameInput;
