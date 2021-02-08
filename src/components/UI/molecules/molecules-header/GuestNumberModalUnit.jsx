import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { guestInput, specificInputClear } from '../../../../modules/search';
import CircleButton from '../../atoms/atoms-header/CircleButtonHeader';
import Text from '../../atoms/atoms-header/Text';

const GuestNumberModalUnitBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  white-space: nowrap;
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

const GuestNumberModalUnit = ({ type, detail, name }) => {
  // type (성인, 어린이, 유아) , detail(13세이상..), name:button이름 (numOfAdult, numOfKid, numOfInfant)
  const dispatch = useDispatch();
  const { guestSearch } = useSelector(({ search: { searchReq } }) => searchReq);

  const disableHandler = () => (name === 'numOfAdult' ? 16 : 5); // 성인이면 최대값16, 나머지 5

  // 성인이 없이 유아, 어린이만 증가시킬때, 성인도 같이 증가시키는 함수
  const hasAdultGuestIncrease = () => {
    // 성인이 아니고, 성인이 0명 일 경우 성인도 같이 1명 증가.
    if (name !== 'numOfAdult' && !guestSearch.numOfAdult) {
      dispatch(
        guestInput('guestSearch', 'numOfAdult', guestSearch.numOfAdult + 1),
      );
    }
  };
  const hasNonAdultGuestDecrease = () => {
    // 성인이 1 -> 0명이 될떄, 유아, 어린이가 있다면 모두 0명이 된다.
    if (
      name === 'numOfAdult' &&
      guestSearch.numOfAdult === 1 &&
      (guestSearch.numOfKid || guestSearch.numOfInfant)
    ) {
      dispatch(specificInputClear('guestSearch'));
    }
  };

  return (
    <GuestNumberModalUnitBlock>
      <div className="guest-num-texts">
        <Text className="guest-num-modal-interactive" bold block noPadding big>
          {type}
        </Text>
        <Text className="guest-num-modal-interactive" small noPadding gray>
          {detail}
        </Text>
      </div>

      <div className="guest-num-buttons">
        <CircleButton
          className="guest-num-modal-interactive"
          minus
          name={name}
          onDecrease={() => {
            hasNonAdultGuestDecrease();
            dispatch(guestInput('guestSearch', name, guestSearch[name] - 1));
          }}
          disable={guestSearch[name] <= 0} // 0보다 작거나 같으면 더이상 감소 불가
        />
        <Text noPadding className="guest-num-modal-interactive count">
          {/* 각 타입의 인원수 guestSearch.numOfAdult, numOfKid, numOfInfant*/}
          {guestSearch[name]}
        </Text>
        <CircleButton
          className="guest-num-modal-interactive"
          name={name}
          onIncrease={() => {
            hasAdultGuestIncrease();
            dispatch(guestInput('guestSearch', name, guestSearch[name] + 1));
          }}
          disable={guestSearch[name] >= disableHandler()} // 최대값은 함수가 반환한 값에따라 바뀐다.
        />
      </div>
    </GuestNumberModalUnitBlock>
  );
};

export default GuestNumberModalUnit;
