import React from 'react';
import styled, { css } from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
// import Text from './DetailText';

const AverageGrade = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 8px;
  margin-left: 4px;
  font-size: 18px;
  color: #222222;
  cursor: pointer;

  ${(props) =>
    props.small &&
    css`
      font-weight: 600;
      font-size: 10px;
    `}
`;

const ScoreStar = styled(AiFillStar)`
  border: none;
  color: red;
  margin-right: 4px;
  /* margin-top: 3px; */
`;

const Grade = ({ grade, small }) => {
  return (
    <AverageGrade small={small} className="grade">
      <ScoreStar />
      {grade}
    </AverageGrade>
  );
};
export default Grade;
