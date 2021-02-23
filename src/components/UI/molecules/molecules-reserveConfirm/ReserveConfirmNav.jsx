import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/atoms-main/Button';
const ReserveConfirmNavStyle = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  button {
    border: 0;
    padding: 10px 0;
    margin: 0 10px;
    &.active {
      border-bottom: 1px solid #000;
    }
  }
`;
const ReserveConfirmNav = ({ active, activClick }) => {
  return (
    <ReserveConfirmNavStyle onClick={activClick}>
      <div>
        <Button
          name="예약 완료"
          className={active === '예약 완료' ? 'active' : ''}
        >
          예정된 예약
        </Button>
      </div>
      <div>
        <Button
          name="이전 예약"
          className={active === '완료된 여정' ? 'active' : ''}
        >
          이전 예약
        </Button>
      </div>
      <div></div>
    </ReserveConfirmNavStyle>
  );
};

export default ReserveConfirmNav;
