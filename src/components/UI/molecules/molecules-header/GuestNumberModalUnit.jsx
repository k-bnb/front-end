import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { guestChangeDetail } from '../../../../modules/detail';
import { guestInput, specificInputClear } from '../../../../modules/search';
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
`;

const GuestNumberModalUnit = ({
  type,
  detail,
  name: searchName, // searchName은 메인페이지 헤더에서 사용될때 search 모듈 사용할때 쓰는 name을 이름바꿔사용
  detailPage,
}) => {
  console.log(detailPage);
  // type (성인, 어린이, 유아) , detail(13세이상..), name:button이름 (numOfAdult, numOfKid, numOfInfant)
  const dispatch = useDispatch();
  const { guestSearch } = useSelector(({ search: { searchReq } }) => searchReq); // main의 header에서 사용하는 경우

  // detail 페이지 일 경우는 스토어의 값을 name 이라고 쓴다
  const detailName = useSelector(({ detail }) => detail[searchName]);

  const disableHandler = () => {
    return searchName === 'numOfAdult' ? 16 : 5;
  }; // 성인이면 최대값16, 나머지 5

  // 성인이 없이 유아, 어린이만 증가시킬때, 성인도 같이 증가시키는 함수
  const hasAdultGuestIncrease = () => {
    // 성인이 아니고, 성인이 0명 일 경우 성인도 같이 1명 증가.
    if (searchName !== 'numOfAdult' && !guestSearch.numOfAdult) {
      dispatch(
        guestInput('guestSearch', 'numOfAdult', guestSearch.numOfAdult + 1),
      );
    }
  };
  const hasNonAdultGuestDecrease = () => {
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
    <GuestNumberModalUnitBlock detailPage={detailPage}>
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
          name={searchName}
          onDecrease={() => {
            if (detailPage) {
              // detail page와 main page 모두 액션을 날려줘야 한다.
              dispatch(guestChangeDetail(searchName, detailName - 1));
              dispatch(
                guestInput(
                  'guestSearch',
                  searchName,
                  guestSearch[searchName] - 1,
                ),
              );
              return;
            }
            hasNonAdultGuestDecrease();

            dispatch(
              guestInput(
                'guestSearch',
                searchName,
                guestSearch[searchName] - 1,
              ),
            );
          }}
          disable={detailPage ? detailName <= 0 : guestSearch[searchName] <= 0} // detailPage이면, numOfAdult가 0보다 작거나 같으면 더이상 감소 불가, 메인에서는 guestSearch[name] <= 0 이면 감소 불가.
        />
        <Text noPadding className="guest-num-modal-interactive count">
          {/* 각 타입의 인원수 guestSearch.numOfAdult, numOfKid, numOfInfant*/}
          {/* detailPage이면, numOfAdult 렌더, 아니면 guestSearch렌더 */}
          {detailPage ? detailName : guestSearch[searchName]}
        </Text>
        <CircleButton
          className="guest-num-modal-interactive"
          name={searchName}
          onIncrease={() => {
            if (detailPage) {
              dispatch(guestChangeDetail(searchName, detailName + 1));
              dispatch(
                guestInput(
                  'guestSearch',
                  searchName,
                  guestSearch[searchName] + 1,
                ),
              );
              return;
            }
            hasAdultGuestIncrease();
            dispatch(
              guestInput(
                'guestSearch',
                searchName,
                guestSearch[searchName] + 1,
              ),
            );
          }}
          disable={guestSearch[searchName] >= disableHandler()} // 최대값은 함수가 반환한 값에따라 바뀐다.
        />
      </div>
    </GuestNumberModalUnitBlock>
  );
};

export default GuestNumberModalUnit;
