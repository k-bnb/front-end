import React from 'react';
import styled from 'styled-components';
import PersonalInfoLi from '../../molecules/molecules-personalInfo/PersonalInfoLi';
import Button from '../../atoms/atoms-main/Button';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import PersonalNameInput from '../../molecules/molecules-personalInfo/PersonalNameInput';
// import PersonalInfoGenderSelect from '../../molecules/molecules-personalInfo/PersonalInfoGenderSelect';
import PersonalInfoBirthinput from '../../molecules/molecules-personalInfo/PersonalInfoBirthinput';
import PersonalInfoEmailInput from '../../molecules/molecules-personalInfo/PersonalInfoEmailInput';
import PersonalInfoImg from '../../molecules/molecules-personalInfo/PersonalInfoImg';
import { extractMonthDate } from '../../../../lib/extractMonthDate';
import Modal from '../../../../portal/Modal';
import PersonInfoEmailModal from '../../molecules/molecules-personalInfo/PersonInfoEmailModal';

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
    .imgPerson {
      width: 320px;
      /* height: 20%; */

      img {
        width: 100%;
      }
    }
    .btn {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

const PersonalInfoUl = ({
  fix,
  fixInfoBtn,
  cancelclick,
  personInfoChange,
  name,
  email,
  birth,
  imageUrl,
  inputFocus,
  ChangeInputBtn,
  userInfo,
  setFix,
  loading,
}) => {
  return (
    <PersonalInfoUIStyle onClick={fix.cancel ? cancelclick : fixInfoBtn}>
      <PersonalInfoLi>
        <div>
          <TextStyle>실명</TextStyle>
          {fix.name ? (
            <PersonalNameInput
              name={name}
              personInfoChange={personInfoChange}
              inputFocus={inputFocus}
              ChangeInputBtn={ChangeInputBtn}
              loading={loading}
            />
          ) : (
            <TextStyle>{name}</TextStyle>
          )}
        </div>
        <Button name="name" className="btn" greenText>
          {!fix.name ? '수정' : '취소'}
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div className="gender">
          <TextStyle>이미지</TextStyle>
          {fix.img ? (
            <PersonalInfoImg
              name={name}
              email={email}
              birth={birth}
              setFix={setFix}
              personInfoChange={personInfoChange}
              imageUrl={imageUrl}
              loading={loading}
            />
          ) : (
            <>
              {imageUrl ? (
                <div className="imgPerson">
                  <img src={userInfo.imageUrl} alt="hello" />
                </div>
              ) : (
                <TextStyle>지정되지 않음</TextStyle>
              )}
            </>
          )}
        </div>
        <Button name="imageUrl" className="btn" greenText>
          {!fix.img ? '수정' : '취소'}
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>생년월일</TextStyle>
          <TextStyle>
            {birth
              ? `${extractMonthDate(birth).year}년 ${
                  extractMonthDate(birth).month
                }월 ${extractMonthDate(birth).date}일 `
              : '지정되지 않음'}
          </TextStyle>
          {fix.birth && (
            <PersonalInfoBirthinput
              ChangeInputBtn={ChangeInputBtn}
              personInfoChange={personInfoChange}
              birth={birth}
              loading={loading}
            />
          )}
        </div>
        <Button name="birth" className="btn" greenText>
          {!fix.birth ? '수정' : '취소'}
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>이메일 주소</TextStyle>
          {fix.emailAddress ? (
            <PersonalInfoEmailInput
              name={name}
              email={email}
              birth={birth}
              imageUrl={imageUrl}
              personInfoChange={personInfoChange}
              ChangeInputBtn={ChangeInputBtn}
              loading={loading}
            />
          ) : (
            <TextStyle>{email}</TextStyle>
          )}
        </div>
        <Button name="emailAddress" className="btn" greenText>
          {!fix.emailAddress ? '수정' : '취소'}
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
