import React from 'react';
import styled from 'styled-components';
import { Title } from './PageTitle';
import { BiBed } from 'react-icons/bi';
import '../../atoms/atoms-detail/DetailBasicStyle.css';

const TypeInfoContainer = styled.div`
  border-bottom: 1px solid rgb(221, 221, 221);
`;

export const TypeTitle = styled(Title)`
  padding-bottom: 24px;
  font-size: 22px;
  margin: 0;
`;

const CoverBox = styled.div`
  width: 33.3%;
  min-width: 195px;
  margin: 0;
  padding: 24px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;

  .emoticon {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

const TypeeSummary = styled.div`
  display: flex;
  color: #222222;
`;

const TypeText = styled.div`
  &:first-child {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 4px;
  }
  &:last-child {
    color: rgb(113, 113, 113);
    font-size: 14px;
  }
`;

export const TypeInfo = ({ infoRes }) => (
  <TypeInfoContainer className="basic-section-padding">
    <TypeTitle>침대/침구 유형</TypeTitle>
    <CoverBox>
      <div className="emoticon">
        <BiBed />
      </div>
      <TypeeSummary>
        <div>
          <TypeText>침실 {infoRes.bedRoomNum}개</TypeText>
          <TypeText>더블 침대 {infoRes.bedNum}개</TypeText>
        </div>
      </TypeeSummary>
    </CoverBox>
  </TypeInfoContainer>
);
