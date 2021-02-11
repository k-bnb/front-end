import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { guestInput, specificInputClear } from '../../../../modules/search';
import { changeGuest, initialGuest } from '../../../../modules/reserve';
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

  //  reserve page guest modal style
  ${(props) =>
    props.none &&
    css`
      & + & {
        border-top: none;
        margin-bottom: 15px;
      }
    `}
`;

const GuestNumberModalUnit = ({ type, detail, name, ...rest }) => {
  // type (성인, 어린이, 유아) , detail(13세이상..), name:button이름 (numOfAdult, numOfKid, numOfInfant)
  const dispatch = useDispatch();

  // main header type
  const { guestSearch } = useSelector(({ search: { searchReq } }) => searchReq);

  // reserve type
  const { guestSearch: reserveGuestSearch } = useSelector(
    (state) => state.reserve,
  );

  const disableHandler = () => (name === 'numOfAdult' ? 16 : 5); // 성인이면 최대값16, 나머지 5

  // 성인이 없이 유아, 어린이만 증가시킬때, 성인도 같이 증가시키는 함수
  const hasAdultGuestIncrease = () => {
    // 성인이 아니고, 성인이 0명 일 경우 성인도 같이 1명 증가. // mainHeader type
    if (name !== 'numOfAdult' && !guestSearch.numOfAdult && !rest.none) {
      console.log('mainHeader');
      dispatch(
        guestInput('guestSearch', 'numOfAdult', guestSearch.numOfAdult + 1),
      );
    }

    // 성인이 아니고, 성인이 0명 일 경우 성인도 같이 1명 증가. // reserve type
    if (name !== 'numOfAdult' && !reserveGuestSearch.numOfAdult && rest.none) {
      console.log('reserve');
      dispatch(
        changeGuest(
          'guestSearch',
          'numOfAdult',
          reserveGuestSearch.numOfAdult + 1,
        ),
      );
    }
  };
  const hasNonAdultGuestDecrease = () => {
    // 성인이 1 -> 0명이 될떄, 유아, 어린이가 있다면 모두 0명이 된다. // mainHeader type
    if (
      name === 'numOfAdult' &&
      guestSearch.numOfAdult === 1 &&
      !rest.none &&
      (guestSearch.numOfKid || guestSearch.numOfInfant)
    ) {
      dispatch(specificInputClear('guestSearch'));
    }

    // 성인이 1 -> 0명이 될떄, 유아, 어린이가 있다면 모두 0명이 된다. // reserve type
    if (
      name === 'numOfAdult' &&
      reserveGuestSearch.numOfAdult === 1 &&
      rest.none &&
      (reserveGuestSearch.numOfKid || reserveGuestSearch.numOfInfant)
    ) {
      dispatch(initialGuest('guestSearch'));
    }
  };

  return (
    <GuestNumberModalUnitBlock {...rest}>
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

            // mainHeader type
            if (!rest.none)
              dispatch(guestInput('guestSearch', name, guestSearch[name] - 1));

            // reserve type
            if (rest.none)
              dispatch(
                changeGuest('guestSearch', name, reserveGuestSearch[name] - 1),
              );
          }}
          disable={
            !rest.none ? guestSearch[name] <= 0 : reserveGuestSearch[name] <= 0
          } // 0보다 작거나 같으면 더이상 감소 불가
        />
        <Text noPadding className="guest-num-modal-interactive count">
          {/* 각 타입의 인원수 guestSearch.numOfAdult, numOfKid, numOfInfant*/}
          {!rest.none ? guestSearch[name] : reserveGuestSearch[name]}
        </Text>
        <CircleButton
          className="guest-num-modal-interactive"
          name={name}
          onIncrease={() => {
            hasAdultGuestIncrease();

            // mainHeader type
            if (!rest.none)
              dispatch(guestInput('guestSearch', name, guestSearch[name] + 1));

            // reserve type
            if (rest.none)
              dispatch(
                changeGuest('guestSearch', name, reserveGuestSearch[name] + 1),
              );
          }}
          disable={
            !rest.none
              ? guestSearch[name] >= disableHandler()
              : reserveGuestSearch[name] >= disableHandler()
          } // 최대값음 함수가 반환한 값에 따라 바뀐다.
        />
      </div>
    </GuestNumberModalUnitBlock>
  );
};

export default GuestNumberModalUnit;
