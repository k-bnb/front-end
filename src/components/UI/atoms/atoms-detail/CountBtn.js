import React from 'react';
import styled from 'styled-components';

const CountingBtn = styled.button`
  width: 24px;
  font-size: 100%;
  line-height: 24px;
  text-align: center;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 50%;
  color: #717171;
  margin: 20px 10px;
  padding: 2px 5px;
`;

const CountBtn = () => (
  <>
    {' '}
    <CountingBtn>+</CountingBtn>
  </>
);

export default CountBtn;
