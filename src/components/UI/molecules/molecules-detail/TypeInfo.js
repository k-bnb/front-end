import React from 'react';
import styled from 'styled-components';
import { Title } from './PageTitle';

const TypeInfoContainer = styled.div`
  padding: 48px 0;
  border-bottom: 1px solid rgb(221, 221, 221);
`;

const CoverBox = styled.div`
  width: 33.33%;
  margin: 0 8px;
  padding: 24px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
`;

const TypeInfo = () => (
  <TypeInfoContainer>
    <Title>침대/침구 유형</Title>
    <CoverBox></CoverBox>
  </TypeInfoContainer>
);

export default TypeInfo;
