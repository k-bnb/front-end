import React from 'react';
import styled from 'styled-components';

const WhiteButton = styled.a`
  display: inline-block;
  margin: 24px 0 0;
  padding: 13px 23px;
  border-radius: 8px;
  border: 1px solid #222;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #222;

  &:hover {
    border-color: #000;
    background: rgb(247, 247, 247);
    color: rgb(34, 34, 34);
  }
`;

const WhiteBtn = () => (
  <div>
    <WhiteButton>편의시설 모두 보기</WhiteButton>
  </div>
);
export default WhiteBtn;
