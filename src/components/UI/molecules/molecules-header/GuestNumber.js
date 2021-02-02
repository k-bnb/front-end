import React from 'react';
import styled from 'styled-components';
import Text from '../../atoms/atoms-header/Text';
// import SearchButton from '../../atoms/atoms-header/SearchButton';

const GuestNumberUnitOuterBlock = styled.div`
  cursor: pointer;
  padding: 15px 20px 14px 10px;
  min-width: 150px;
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
`;

const GuestNumberUnitBlock = styled.div`
  /* width: 100%; */
  box-sizing: border-box;
`;

const GuestNumber = (props) => {
  return (
    <GuestNumberUnitOuterBlock onClick={props.onClick}>
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
