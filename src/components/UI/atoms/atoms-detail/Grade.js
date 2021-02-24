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
  vertical-align: bottom;

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

    ${(props) =>
    props.bookingInfo &&
    css`
      font-size: 15px;
      padding-top: 2px;
      align-items: bottom;
      font-weight: 600;
    `}
      ${(props) =>
    props.infobox &&
    css`
      line-height: initial;
    `}
`;

const ScoreStar = styled(AiFillStar)`
  border: none;
  color: red;
  margin-right: 4px;

  ${(props) =>
    props.reviewModal &&
    css`
      vertical-align: baseline;
      margin-top: 3px;
    `}

  ${(props) =>
    props.bookingInfo &&
    css`
      padding-top: 1px;
      margin-right: 2px;
    `}
`;

const Grade = ({
  grade = '4.3점',
  small,
  reviewModal,
  reviewMain,
  bookingInfo,
  infobox,
}) => {
  return (
    <AverageGrade
      small={small}
      className="grade"
      reviewModal={reviewModal}
      reviewMain={reviewMain}
      bookingInfo={bookingInfo}
      infobox={infobox}
    >
      <ScoreStar reviewModal={reviewModal} bookingInfo={bookingInfo} />
      {grade.toFixed(1)}
    </AverageGrade>
  );
};
export default Grade;
