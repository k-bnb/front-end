import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

const AverageScore = styled.div`
  align-items: center;
  display: inline-flex;
  line-height: 20px;
  margin-top: 8px;
  font-size: 18px;
  color: #222222;
  cursor: pointer;
`;

const Score = () => (
  <>
    <AverageScore>
      {' '}
      <AiFillStar color="red" border="none" /> score{' '}
    </AverageScore>
  </>
);
export default Score;
