import React from 'react';
import styled from 'styled-components';
import CircleButton from '../../atoms/atoms-header/CircleButton';
import Text from '../../atoms/atoms-header/Text';

const GuestNumberModalUnitBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;

  .guest-num-texts {
    line-height: 25px;
    text-align: left;
  }
  .count {
    font-size: 15px;
    margin: 0 15px;
    vertical-align: super;
  }
  & + & {
    border-top: 1px solid lightgray;
    padding-top: 20px;
  }
`;

const GuestNumberModalUnit = () => {
  return (
    <GuestNumberModalUnitBlock>
      <div className="guest-num-texts">
        <Text className="guest-num-modal-interactive" bold block noPadding big>
          성인
        </Text>
        <Text className="guest-num-modal-interactive" small noPadding gray>
          만 13세 이상
        </Text>
      </div>

      <div className="guest-num-buttons">
        <CircleButton className="guest-num-modal-interactive" minus />
        <Text noPadding className="guest-num-modal-interactive count">
          0
        </Text>
        <CircleButton className="guest-num-modal-interactive" />
      </div>
    </GuestNumberModalUnitBlock>
  );
};

export default GuestNumberModalUnit;
