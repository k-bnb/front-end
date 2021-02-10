import React from 'react';
import styled from 'styled-components';
import PersonalInfoLi from '../../molecules/molecules-personalInfo/PersonalInfoLi';
import Button from '../../atoms/atoms-main/Button';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import PersonalNameInput from '../../molecules/molecules-personalInfo/PersonalNameInput';
import PersonalInfoGenderSelect from '../../molecules/molecules-personalInfo/PersonalInfoGenderSelect';
import Input from '../../atoms/atoms-main/Input';
import PersonalInfoBirthinput from '../../molecules/molecules-personalInfo/PersonalInfoBirthinput';
import PersonalInfoEmailInput from '../../molecules/molecules-personalInfo/PersonalInfoEmailInput';

const PersonalInfoUIStyle = styled.ul`
  display: flex;
  flex-grow: 2;
  /* max-width: 500px; */
  /* min-width: 500px; */
  flex-direction: column;
  padding: 0;
  margin: 10px 20px 0 20px;
  li {
    div {
      /* border: 1px solid; */
    }
    .btn {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

const PersonalInfoUl = ({
  fix: { name, gender, birth, emailAddress, cancel },
  fixInfoBtn,
  cancelclick,
}) => {
  return (
    <PersonalInfoUIStyle onClick={cancel ? cancelclick : fixInfoBtn}>
      <PersonalInfoLi>
        <div>
          <TextStyle>실명</TextStyle>
          {name ? <PersonalNameInput /> : <TextStyle>Jeong Jeong</TextStyle>}
        </div>
        <Button name="name" className="btn" greenText>
          {!name ? '수정' : '취소'}
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div className="gender">
          <TextStyle>성별</TextStyle>
          {gender ? (
            <PersonalInfoGenderSelect />
          ) : (
            <TextStyle>지정되지 않음</TextStyle>
          )}
        </div>
        <Button name="gender" className="btn" greenText>
          {!gender ? '수정' : '취소'}
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>생년월일</TextStyle>
          <TextStyle>1995년 8월 12일</TextStyle>
          {birth && <PersonalInfoBirthinput />}
        </div>
        <Button name="birth" className="btn" greenText>
          {!birth ? '수정' : '취소'}
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>이메일 주소</TextStyle>
          {emailAddress ? (
            <PersonalInfoEmailInput />
          ) : (
            <TextStyle>jungjh1234567@gmail.com</TextStyle>
          )}
        </div>
        <Button name="emailAddress" className="btn" greenText>
          {!emailAddress ? '수정' : '취소'}
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>전화번호</TextStyle>
          <TextStyle>제공되지 않음</TextStyle>
        </div>
        <Button className="btn">
          <TextStyle greentextLine>추가</TextStyle>
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>정부 발급 신분증</TextStyle>
          <TextStyle>제공되지 않음</TextStyle>
        </div>
        <Button className="btn" greenText>
          추가
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>주소</TextStyle>
          <TextStyle>제공되지 않음</TextStyle>
        </div>
        <Button className="btn" greenText>
          추가
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>비상 연락처</TextStyle>
          <TextStyle>제공되지 않음</TextStyle>
        </div>
        <Button className="btn" greenText>
          추가
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>중국 여행에 필요한 여권 정보</TextStyle>
          <TextStyle>제공되지 않음</TextStyle>
        </div>
        <Button className="btn" greenText>
          추가
        </Button>
      </PersonalInfoLi>
    </PersonalInfoUIStyle>
  );
};

export default PersonalInfoUl;
