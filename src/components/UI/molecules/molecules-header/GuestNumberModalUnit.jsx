import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import {
  clearGuestDetail,
  guestChangeDetail,
} from '../../../../modules/detail';
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
  padding-top: 20px;
  .count {
    font-size: 15px;
    margin: 0 15px;
    vertical-align: super;
  }
  ${(props) =>
    !props.detailPage &&
    css`
      & + & {
        border-top: 1px solid lightgray;
      }
    `}
  //  reserve page guest modal style
  ${(props) =>
    props.reservePage &&
    css`
      & + & {
        border-top: none;
        margin-bottom: 15px;
      }
    `}
`;
const GuestNumberModalUnit = ({
  type,
  decription,
  name: searchName, // searchName은 메인페이지 헤더에서 사용될때 search 모듈 사용할때 쓰는 name을 이름바꿔사용
  detailPage,
  reservePage,
  searchBtnRef,
  peopleLimit,
}) => {
  // type (성인, 어린이, 유아) , detail(13세이상..), name:button이름 (numOfAdult, numOfKid, numOfInfant)
  const dispatch = useDispatch();
  const { guestSearch } = useSelector(({ search: { searchReq } }) => searchReq); // main의 header에서 사용하는 경우
  // detail 페이지 일 경우는 스토어의 값을 name 이라고 쓴다
  const detailName = useSelector(({ detail }) => detail[searchName]);
  const reserve = useSelector((reserve) => reserve);
  const detail = useSelector(({ detail }) => detail);
  // reserve reducder에서 상태 가져오기
  const { guestSearch: reserveGuestSearch } = useSelector(
    (state) => state.reserve,
  );

  const disableHandler = () => (searchName === 'numOfAdult' ? 16 : 5); // 성인이면 최대값16, 나머지 5

  // 인원 제한보다 많은 인원을 증가 시 버튼 disable한다.
  const ReserveTotalGuestNum =
    reserveGuestSearch.numOfAdult + reserveGuestSearch.numOfKid;
  const DetailTotalGuestNum = detail.numOfAdult + detail.numOfKid;

  // 페이지 별로 최소값 조건을 반환해주는 함수
  const setMinDisabled = () => {
    if (detailPage)
      return searchName === 'numOfAdult' ? detailName <= 1 : detailName <= 0;
    // detail page이면서 성인 버튼이면 1이 최소값.
    else if (reservePage)
      return searchName === 'numOfAdult'
        ? reserveGuestSearch[searchName] <= 1
        : reserveGuestSearch[searchName] <= 0;
    // reserve page 이면서, 성인 버튼이면 1이 최솟값
    else return guestSearch[searchName] <= 0;
    // main page 에선, 0이 최소값
  };

  // 페이지 별로 최대값 조건을 반환해주는 함수
  const setMaxDisabled = () => {
    if (detailPage)
      return searchName === 'numOfInfant'
        ? detail.numOfInfant >= 5
        : DetailTotalGuestNum >= peopleLimit;
    else if (reservePage)
      return searchName === 'numOfInfant'
        ? reserveGuestSearch.numOfInfant >= 5
        : ReserveTotalGuestNum >= peopleLimit;
    else return guestSearch[searchName] >= disableHandler();
  };

  // 성인이 없이 유아, 어린이만 증가시킬때, 성인도 같이 증가시키는 함수
  const increaseWithoutAdult = () => {
    // 성인이 아니고, 성인이 0명 일 경우 성인도 같이 1명 증가.
    if (searchName !== 'numOfAdult' && !guestSearch.numOfAdult) {
      dispatch(
        guestInput('guestSearch', 'numOfAdult', guestSearch.numOfAdult + 1),
      );
    }
  };

  const decreaseWhenNoAdult = () => {
    // 성인이 1 -> 0명이 될떄, 유아, 어린이가 있다면 모두 0명이 된다.
    if (
      searchName === 'numOfAdult' &&
      guestSearch.numOfAdult === 1 &&
      (guestSearch.numOfKid || guestSearch.numOfInfant)
    ) {
      dispatch(specificInputClear('guestSearch'));
    }
  };

  return (
    <GuestNumberModalUnitBlock
      detailPage={detailPage}
      reservePage={reservePage}
    >
      <div className="guest-num-texts">
        <Text className="guest-num-modal-interactive" bold block noPadding big>
          {type}
        </Text>
        <Text className="guest-num-modal-interactive" small noPadding gray>
          {decription}
        </Text>
      </div>
      <div className="guest-num-buttons">
        <CircleButton
          className="guest-num-modal-interactive"
          minus
          name={searchName}
          onDecrease={() => {
            decreaseWhenNoAdult();
            if (detailPage) {
              dispatch(
                guestChangeDetail(
                  searchName,
                  detailName - 1,
                  `detail${searchName}`,
                ),
              );
              return;
            }
            decreaseWhenNoAdult();
            if (reservePage) {
              dispatch(
                changeGuest(
                  'guestSearch',
                  searchName,
                  reserveGuestSearch[searchName] - 1,
                ),
              );
              return;
            }
            dispatch(
              guestInput(
                'guestSearch',
                searchName,
                guestSearch[searchName] - 1,
              ),
            );
          }}
          disable={setMinDisabled()}
        />
        <Text noPadding className="guest-num-modal-interactive count">
          {/* 각 타입의 인원수 guestSearch.numOfAdult, numOfKid, numOfInfant*/}
          {/* detailPage이면, numOfAdult 렌더, 아니면 guestSearch렌더 */}
          {detailPage
            ? detailName
            : reservePage
            ? reserveGuestSearch[searchName]
            : guestSearch[searchName]}
        </Text>
        <CircleButton
          className="guest-num-modal-interactive"
          name={searchName}
          onIncrease={() => {
            if (detailPage) {
              dispatch(
                guestChangeDetail(
                  searchName,
                  detailName + 1,
                  `detail${searchName}`,
                ),
              );
              return;
            }
            if (reservePage) {
              dispatch(
                changeGuest(
                  'guestSearch',
                  searchName,
                  reserveGuestSearch[searchName] + 1,
                ),
              );
              return;
            }
            increaseWithoutAdult();
            dispatch(
              guestInput(
                'guestSearch',
                searchName,
                guestSearch[searchName] + 1,
              ),
            );
          }}
          searchBtnRef={searchBtnRef}
          disable={setMaxDisabled()}
        />
      </div>
    </GuestNumberModalUnitBlock>
  );
};
export default GuestNumberModalUnit;
