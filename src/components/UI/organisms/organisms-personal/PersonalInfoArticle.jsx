import React from 'react';
import styled from 'styled-components';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import PersonalInfoDiv from '../../molecules/molecules-personalInfo/PersonalInfoDiv';
const PersonalInfoArticleStyle = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ebebeb;
  padding: 20px;

  height: 100%;
  margin: 0 20px;
  div {
  }
  .borderbottom {
    width: 4.8rem;
    border: 1px solid #ebebeb;
    margin: 30px 0;
  }
  div {
  }
`;

const PersonalInfoArticle = () => {
  return (
    <PersonalInfoArticleStyle>
      <PersonalInfoDiv>
        <svg
          viewBox="0 0 24 24"
          role="presentation"
          aria-hidden="true"
          focusable="false"
          // style="height: 40px; width: 40px; display: block; fill: rgb(96, 182, 181);"
        >
          <path d="m3.83 9.4a.5.5 0 0 1 -.17-.03l-3.25-1.18a.5.5 0 0 1 .34-.94l3.25 1.18a.5.5 0 0 1 -.17.97zm-3.24 2.15 2.6-.27a.5.5 0 0 0 -.1-1l-2.61.27a.5.5 0 0 0 .05 1 .63.63 0 0 0 .05 0zm4.28-4.18a.5.5 0 0 0 -.02-.71l-1.87-1.78a.5.5 0 1 0 -.69.73l1.87 1.78a.5.5 0 0 0 .71-.02zm3.68 6.32v3.28a5.28 5.28 0 0 0 5.28 5.28h2.44.11a5.17 5.17 0 0 0 5.07-5.28l-.07-3.32a2 2 0 0 0 -2-1.96h-8.82a2 2 0 0 0 -2 2zm4.7 2.05a1.74 1.74 0 1 1 2.6 1.51 4.18 4.18 0 0 0 .17.83 5.97 5.97 0 0 0 .71 1.15.43.43 0 0 1 -.41.58h-2.63a.43.43 0 0 1 -.41-.58 5.8 5.8 0 0 0 .66-1.11 5.17 5.17 0 0 0 .19-.87 1.74 1.74 0 0 1 -.87-1.51z"></path>
          <path
            d="m23 19.81v-9.32a.5.5 0 0 0 -.5-.5h-1.11l-.22-.17a.6.6 0 0 1 -.18-.43v-2.4a6 6 0 0 0 -12 0v2.4a.6.6 0 0 1 -.6.6h-.9a.5.5 0 0 0 -.5.5v12a .5.5 0 0 0 .5.5h15a .5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 1.5 1.5 0 0 1 -1.5 1.5h-15a1.5 1.5 0 0 1 -1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5h.5v-2a7 7 0 0 1 14 0v2h .5a1.5 1.5 0 0 1 1.5 1.49v9.32a.5.5 0 0 1 -1 0zm-8.23-10.81a.5.5 0 0 0 0 1h4.13a.6.6 0 0 0 .6-.6v-2.4a4.5 4.5 0 0 0 -9 0v2.4a.6.6 0 0 0 .6.6h1.25a.5.5 0 0 0 0-1h-.85v-2a3.5 3.5 0 0 1 7 0v2z"
            fill="#484848"
          ></path>
        </svg>
        <CircleDiv>
          <h2 tabIndex="-1">
            <TextStyle>수정할 수 있는 세부 정보는 무엇인가요?</TextStyle>
          </h2>
        </CircleDiv>
        <CircleDiv>
          에어비앤비에서 본인 인증 시 사용하는 세부 정보는 변경할 수 없습니다.
          연락처 정보와 일부 개인정보는 수정할 수 있지만, 다음번 예약 또는
          숙소를 등록할 때 본인 인증 절차를 거쳐야 할 수도 있습니다.
        </CircleDiv>
      </PersonalInfoDiv>
      <div className="borderbottom"></div>
      <PersonalInfoDiv>
        <svg
          viewBox="0 0 24 24"
          role="presentation"
          aria-hidden="true"
          focusable="false"
        >
          <path d="m18.66 6.51-14.84 9.65a1 1 0 0 0 .55 1.84h15.62a1 1 0 0 0 1-1v-9.24a1.5 1.5 0 0 0 -2.32-1.26z"></path>
          <path
            d="m9.25 12a1.25 1.25 0 1 1 -1.25-1.25 1.25 1.25 0 0 1 1.25 1.25zm11.75-8h-14a .5.5 0 0 0 0 1h14a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-1.5a.5.5 0 0 0 0 1h1.5a2 2 0 0 0 2-2v-12a2 2 0 0 0 -2-2zm-5 15h-13a1 1 0 0 1 -1-1v-12a1 1 0 0 1 1-1h1a .5.5 0 0 0 0-1h-1a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h13a .5.5 0 0 0 0-1zm-7.17-11.17a4.25 4.25 0 1 0 3.42 4.17 4.21 4.21 0 0 0 -.46-1.92.5.5 0 0 0 -.89.45 3.25 3.25 0 0 1 -.61 3.77 3.67 3.67 0 0 0 -4.56.02 3.25 3.25 0 0 1 2.27-5.57 3.3 3.3 0 0 1 .63.06.5.5 0 1 0 .19-.98zm5.67 3.17h5.5a.5.5 0 0 0 0-1h-5.5a.5.5 0 0 0 0 1zm0 2h5.5a.5.5 0 0 0 0-1h-5.5a.5.5 0 0 0 0 1zm0 2h5.5a.5.5 0 0 0 0-1h-5.5a.5.5 0 0 0 0 1z"
            fill="#484848"
          ></path>
        </svg>
        <CircleDiv>
          <h2 tabIndex="-1">
            <TextStyle>다른 사람에게 어떤 정보가 공개되나요?</TextStyle>
          </h2>
        </CircleDiv>
        <CircleDiv>
          에어비앤비는 예약이 확정된 후에만 호스트 및 게스트의 연락처 정보를
          공개합니다.
        </CircleDiv>
      </PersonalInfoDiv>
    </PersonalInfoArticleStyle>
  );
};

export default PersonalInfoArticle;
