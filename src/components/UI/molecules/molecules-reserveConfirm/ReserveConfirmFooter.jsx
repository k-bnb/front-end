import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TextStyle from '../../atoms/atoms-main/TextStyle';
const ReserveConfirmFooterStyle = styled.div`
  margin-top: 2%;
  padding-top: 2%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  a {
    color: #000;
    &:hover {
      font-weight: 500;
    }
  }
`;
const ReserveConfirmFooter = () => {
  return (
    <ReserveConfirmFooterStyle>
      <div>
        <TextStyle>
          예약 내역을 찾으실 수 없나요?
          <Link to="https://www.airbnb.co.kr/help/booking-and-traveling">
            도움말 센터를 방문하세요.
          </Link>
        </TextStyle>
      </div>
    </ReserveConfirmFooterStyle>
  );
};

export default ReserveConfirmFooter;
