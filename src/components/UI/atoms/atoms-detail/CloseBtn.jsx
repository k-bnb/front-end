import React from 'react';
import styled from 'styled-components';

const CloseBtnBlock = styled.button`
  padding: 8px 16px;
  background-color: #222;
  font-size: 14px;
  font-weight: 600px;
  border-radius: 8px;
  color: white;
  border: 0;
  cursor: pointer;
`;

const CloseBtn = (props) => {
  return <CloseBtnBlock {...props}>닫기</CloseBtnBlock>;
};

export default CloseBtn;
