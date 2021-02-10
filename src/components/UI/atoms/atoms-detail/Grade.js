import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

const AverageGrade = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 8px;
  margin-left: 4px;
  font-size: 18px;
  color: #222222;
  cursor: pointer;
`;

const ScoreStar = styled(AiFillStar)`
  border: none;
  color: red;
  margin-right: 4px;
  /* margin-top: 3px; */
`;

const Grade = ({ grade }) => (
  <>
    <AverageGrade>
      {' '}
      <ScoreStar /> score{grade}
    </AverageGrade>
  </>
);
export default Grade;
