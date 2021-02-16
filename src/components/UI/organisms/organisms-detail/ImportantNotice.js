import React from 'react';
import styled from 'styled-components';
import NoticeAll from './NoticeAll';
import '../../atoms/atoms-detail/DetailBasicStyle.css';

const NoticeContainer = styled.div`
  border-top: 1px solid rgb(221, 221, 221);
  margin: 0 auto;
  width: 100%;
  max-width: 1128px;
  padding: 48px 0;
`;
const SectionTitle = styled.h2`
  padding-bottom: 24px;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  margin: 0;
`;

const ImportantNotice = ({ infoRes }) => (
  <NoticeContainer className="basic-section-padding">
    <SectionTitle>알아두어야 할 사항</SectionTitle>
    <NoticeAll infoRes={infoRes} />
  </NoticeContainer>
);

export default ImportantNotice;
