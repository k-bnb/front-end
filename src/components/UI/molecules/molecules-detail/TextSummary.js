import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';

const TextSummaryContainer = styled.div`
  padding: 32px 0 8px;
  border-top: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);

  .emoticon {
    font-size: 26px;
  }
`;

const SimpleSummary = styled.div`
  display: flex;
  margin-bottom: 24px;
  color: #222222;
  line-height: 20px;
`;

const Text = styled.div`
  line-height: 20px;
  margin-left: 16px;
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

const TextSummary = () => (
  <TextSummaryContainer>
    <SimpleSummary>
      <div className="emoticon">
        <AiOutlineHome />
      </div>
      <div>
        <Text>집 전체</Text>
        <Text>펜션(한국) 전체를 단독으로 사용하시게 됩니다.</Text>
      </div>
    </SimpleSummary>
    <SimpleSummary>
      <div className="emoticon">
        <AiOutlineHome />
      </div>
      <div>
        <Text>집 전체</Text>
        <Text>펜션(한국) 전체를 단독으로 사용하시게 됩니다.</Text>
      </div>
    </SimpleSummary>
  </TextSummaryContainer>
);

export default TextSummary;
