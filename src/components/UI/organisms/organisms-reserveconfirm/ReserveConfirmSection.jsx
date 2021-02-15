import React from 'react';
import ReserveConfirmNav from '../../molecules/molecules-reserveConfirm/ReserveConfirmNav';
import ReserveConfirmList from '../../molecules/molecules-reserveConfirm/ReserveConfirmList';
import ReserveConfirmFooter from '../../molecules/molecules-reserveConfirm/ReserveConfirmFooter';
import styled from 'styled-components';

const ReserveConfirmSectionStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ReserveConfirmSection = ({ active, activClick, list }) => {
  console.log(list);
  return (
    <>
      <ReserveConfirmNav active={active} activClick={activClick} />
      <ReserveConfirmSectionStyle>
        {list.map((item) => (
          <ReserveConfirmList item={item} />
        ))}
      </ReserveConfirmSectionStyle>
    </>
  );
};

export default ReserveConfirmSection;
