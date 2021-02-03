import React from 'react';
import styled, { css } from 'styled-components';
import Text from '../../atoms/atoms-header/Text';
// import SearchButton from '../../atoms/atoms-header/SearchButton';

const GuestNumberUnitOuterBlock = styled.div`
  cursor: pointer;
  padding: 15px 20px 14px 10px;
  min-width: 130px;
  background-color: #fff;
  border: 0;
  text-align: left;
  &:hover > div {
    border: 0;
  }
  &:hover {
    border-radius: 32px;
    background-color: lightgray;
  }
  ${(props) =>
    props.condition &&
    css`
      border-radius: 32px;
      background: linear-gradient(145deg, #f0f0f0, #cacaca);
      box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
    `}
`;

const GuestNumberUnitBlock = styled.div`
  box-sizing: border-box;
`;

const GuestNumber = (props) => {
  return (
    <GuestNumberUnitOuterBlock
      onClick={props.onClick}
      condition={props.condition}
    >
      <Text small bold noPadding>
        인원
      </Text>
      <Text block noPadding>
        게스트 추가
      </Text>
    </GuestNumberUnitOuterBlock>
  );
};

export default GuestNumber;
