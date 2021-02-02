import React from 'react';
import Text from '../../atoms/atoms-header/Text';
import styled, { css } from 'styled-components';

const CheckDateUnitOuterBlock = styled.div`
  cursor: pointer;
  padding: 18px 0 15px 0;
  width: auto;
  background-color: #fff;
  border: 0;
  &:hover > div {
    border: 0;
  }
  &:hover {
    border-radius: 32px;
    background-color: lightgray;
  }
`;

const CheckDateUnitBlock = styled.div`
  white-space: nowrap;
  display: inline-block;
  height: auto;
  width: 100%;
  padding-right: 25px;
  padding-left: 15px;
  box-sizing: border-box;
  border-right: 1px solid lightgray;
  ${(props) =>
    props.both &&
    css`
      border-left: 1px solid lightgray;
    `}
  min-width: 160px;
`;

const CheckDateUnit = (props) => {
  return (
    <CheckDateUnitOuterBlock>
      <CheckDateUnitBlock {...props}>
        <Text small bold noPadding block>
          {props.children}
        </Text>
        <Text>날짜 추가</Text>
      </CheckDateUnitBlock>
    </CheckDateUnitOuterBlock>
  );
};

export default CheckDateUnit;
