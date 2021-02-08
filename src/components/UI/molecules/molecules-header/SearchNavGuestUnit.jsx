import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import {
  guestInput,
  guestInputClear,
  specificInputClear,
} from '../../../../modules/search';
import GuestNumberModal from '../../../templates/templates-header/GuestNumberModal';
import RemoveButton from '../../../templates/templates-header/RemoveButton';
import Text from '../../atoms/atoms-header/Text';
import SearchButtonUnit from './SearchButtonUnit';

const SearchNavGuestUnitLi = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 27%;
  max-width: 25%;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: rgb(235, 231, 231);
  }

  .guest-texts {
    padding: 14px 0 14px 24px;
  }
  .total-guest-num {
    color: black;
    max-width: 121px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${(props) =>
    props.navModalState.guest &&
    css`
      background-color: rgb(235, 231, 231);
    `}
`;

const SearchNavGuestUnit = ({
  SearchTypeHandler,
  navModalState,
  setNavModalState,
}) => {
  const dispatch = useDispatch();
  const { numOfAdult, numOfKid, numOfInfant } = useSelector(
    ({ search: { searchReq } }) => searchReq.guestSearch,
  );
  const totalGuestNum = numOfAdult + numOfKid + numOfInfant;
  return (
    <SearchNavGuestUnitLi
      navModalState={navModalState}
      onClick={(e) => {
        if (e.target.matches('.search-button-unit')) return;
        SearchTypeHandler('guest');
      }}
    >
      <div className="guest-texts">
        <Text small bold block noPadding>
          인원
        </Text>

        {totalGuestNum ? (
          <Text block noPadding gray className="total-guest-num">
            {`게스트 ${totalGuestNum - numOfInfant}명`}
            {numOfInfant ? `, 유아 ${numOfInfant} 명` : ''}
          </Text>
        ) : (
          <Text gray>게스트 추가</Text>
        )}
        {!!totalGuestNum && navModalState.guest && (
          <RemoveButton
            guest
            onClick={() => dispatch(specificInputClear('guestSearch'))}
          />
        )}
      </div>
      <SearchButtonUnit navModalState={navModalState} />
      {navModalState.guest && (
        <GuestNumberModal
          SearchTypeHandler={SearchTypeHandler}
          setNavModalState={setNavModalState}
        />
      )}
    </SearchNavGuestUnitLi>
  );
};

export default SearchNavGuestUnit;
