import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../atoms/atoms-main/Button';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import ReserveconfirmSvg from '../../atoms/atoms-reserveconfirm/ReserveconfirmSvg';
const ReserveConfirmNoDataStyle = styled.div`
  min-width: 580px;
  /* max-width: 970px; */

  /* min-width: 970px; */
  margin: 20px 0;
  span {
    font-size: 1.3rem;
    a {
      color: #000;
    }
  }
  div {
    width: 100%;
    svg {
      width: 67vw;

      padding: 5% 16% 0;
    }
  }
  .airbnb-btn {
    button {
      border: 0;
      background-color: #000;
      color: #eee;
      padding: 10px 20px;
      border-radius: 10px;
      font-weight: 800;
    }
  }
`;
const ReserveConfirmNoData = ({ active }) => {
  return (
    <ReserveConfirmNoDataStyle>
      {active === '예약 완료' && (
        <TextStyle>
          다시 여행을 떠나실 준비가 되면 에어비앤비가 도와드리겠습니다.
          <Link to="https://www.airbnb.co.kr/help/booking-and-traveling">
            자세히 알아보기
          </Link>
        </TextStyle>
      )}
      {active === '이전 예약' && (
        <TextStyle>
          과거 여행이 없습니다. 하지만 여행을 완료하면 여기에서 확인하실 수
          있습니다.
        </TextStyle>
      )}

      <div>
        <ReserveconfirmSvg />
      </div>
      <div className="airbnb-btn">
        <Button>에어비앤비 둘러보기</Button>
      </div>
    </ReserveConfirmNoDataStyle>
  );
};

export default ReserveConfirmNoData;
