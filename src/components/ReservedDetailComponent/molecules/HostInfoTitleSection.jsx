import React from 'react';
import styled from 'styled-components';

const HostInfoTitleSectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  border-bottom: 5px solid #ebebeb;
  h1 {
    order: 1;
    margin: 0;
    font-size: 3rem;
  }
  span {
    line-height: 3;
    color: rgba(0, 0, 0, 0.5);
    word-spacing: 1px;
  }
`;
const HostInfoTitleSection = () => {
  return (
    <HostInfoTitleSectionStyle>
      <h1>Seo Jin님의 숙소</h1>
      <span>Namwon-eup, Seogwipo 2019년 4월 4일 - 2019년 4월 6일</span>
    </HostInfoTitleSectionStyle>
  );
};

export default HostInfoTitleSection;
