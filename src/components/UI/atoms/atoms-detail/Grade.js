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

  ${(props) =>
    props.reviewModal &&
    css`
      font-size: 32px;
      margin-right: 10px;
    `}

    ${(props) =>
    props.reviewMain &&
    css`
      font-size: 22px;
    `}
`;

const ScoreStar = styled(AiFillStar)`
  border: none;
  color: red;
  margin-right: 4px;

  ${(props) =>
    props.reviewModal &&
    css`
      vertical-align: bottom;
    `}margin-top: 3px;
`;

const Grade = ({ grade = '4.3점', small, reviewModal, reviewMain }) => {
  return (
    <AverageGrade
      small={small}
      className="grade"
      reviewModal={reviewModal}
      reviewMain={reviewMain}
    >
      <ScoreStar reviewModal={reviewModal} />
      {grade}
    </AverageGrade>
  );
};
export default Grade;
