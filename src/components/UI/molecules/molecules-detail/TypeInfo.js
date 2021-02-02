import React from 'react';
import styled from 'styled-components';
import { Title } from './PageTitle';
import { SimpleSummary, Text } from './TextSummary';
import { BiBed } from 'react-icons/bi';

const TypeInfoContainer = styled.div`
  padding: 48px 0;
  border-bottom: 1px solid rgb(221, 221, 221);
`;

export const TypeTitle = styled(Title)`
  padding-bottom: 24px;
  font-size: 22px;
  margin: 0;
`;

const CoverBox = styled.div`
  width: 33.3%;
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
  line-height: 20px;
`;

const TypeText = styled.div`
  line-height: 20px;
  &:first-child {
    color: rgb(34, 34, 34);
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 4px;
  }
  &:last-child {
    color: rgb(113, 113, 113);
    font-size: 14px;
  }
`;

export const TypeInfo = () => (
  <TypeInfoContainer>
    <TypeTitle>침대/침구 유형</TypeTitle>
    <CoverBox>
      <div className="emoticon">
        <BiBed />
      </div>
      <TypeeSummary>
        <div>
          <TypeText>1번 침실</TypeText>
          <TypeText>더블 침대 1개</TypeText>
        </div>
      </TypeeSummary>
    </CoverBox>
  </TypeInfoContainer>
);
