import React from 'react';
import styled from 'styled-components';
import PersonalInfoLi from '../../molecules/molecules-personalInfo/PersonalInfoLi';
import Button from '../../atoms/atoms-main/Button';
import TextStyle from '../../atoms/atoms-main/TextStyle';

const PersonalInfoUIStyle = styled.ul`
  padding: 0;
`;

const PersonalInfoUl = () => {
  return (
    <PersonalInfoUIStyle>
      <PersonalInfoLi>
        <div>
          <TextStyle>실명</TextStyle>
          <TextStyle>Jeong Jeong</TextStyle>
        </div>
        <Button>
          <TextStyle greentextLine>수정</TextStyle>
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>성별</TextStyle>
          <TextStyle>지정되지 않음</TextStyle>
        </div>
        <Button>
          <TextStyle greentextLine>수정</TextStyle>
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>생년월일</TextStyle>
          <TextStyle>1995년 8월 12일</TextStyle>
        </div>
        <Button>
          <TextStyle greentextLine>수정</TextStyle>
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>이메일 주소</TextStyle>
          <TextStyle>jungjh1234567@gmail.com</TextStyle>
        </div>
        <Button>
          <TextStyle greentextLine>수정</TextStyle>
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>전화번호</TextStyle>
          <TextStyle>제공되지 않음</TextStyle>
        </div>
        <Button>
          <TextStyle greentextLine>추가</TextStyle>
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>정부 발급 신분증</TextStyle>
          <TextStyle>제공되지 않음</TextStyle>
        </div>
        <Button>
          <TextStyle greentextLine>추가</TextStyle>
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>주소</TextStyle>
          <TextStyle>제공되지 않음</TextStyle>
        </div>
        <Button>
          <TextStyle greentextLine>추가</TextStyle>
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>비상 연락처</TextStyle>
          <TextStyle>제공되지 않음</TextStyle>
        </div>
        <Button>
          <TextStyle greentextLine>추가</TextStyle>
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>중국 여행에 필요한 여권 정보</TextStyle>
          <TextStyle>제공되지 않음</TextStyle>
        </div>
        <Button>
          <TextStyle greentextLine>추가</TextStyle>
        </Button>
      </PersonalInfoLi>
    </PersonalInfoUIStyle>
  );
};

export default PersonalInfoUl;
