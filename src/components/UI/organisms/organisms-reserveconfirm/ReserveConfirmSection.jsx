import React from 'react';
import ReserveConfirmNav from '../../molecules/molecules-reserveConfirm/ReserveConfirmNav';
import ReserveConfirmList from '../../molecules/molecules-reserveConfirm/ReserveConfirmList';
import ReserveConfirmFooter from '../../molecules/molecules-reserveConfirm/ReserveConfirmFooter';
import styled from 'styled-components';
import ReserveConfirmNoData from '../../molecules/molecules-reserveConfirm/ReserveConfirmNoData';

const ReserveConfirmSectionStyle = styled.div`
  display: inline-flex;
  flex-wrap: wrap;

  div {
    margin-right: 10px;
  }
`;

const ReserveConfirmSection = ({ active, activClick, list }) => {
  console.log(list);
  return (
    <>
      <ReserveConfirmNav active={active} activClick={activClick} />
      <ReserveConfirmSectionStyle>
        {list.length ? (
          list.map((item) => <ReserveConfirmList item={item} list={list} />)
        ) : (
          <ReserveConfirmNoData active={active} />
        )}
      </ReserveConfirmSectionStyle>
    </>
  );
};

export default ReserveConfirmSection;
