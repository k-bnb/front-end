import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import { WiStars } from 'react-icons/wi';
//import { GiDiamonds } from 'react-icons/gi';
import { RiDoorOpenFill, RiCalendarCheckLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';

const TextSummaryContainer = styled.div`
  padding: 32px 0 8px;
  border-top: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);

  .emoticon {
    font-size: 26px;
  }
`;

export const SimpleSummary = styled.div`
  display: flex;
  margin-bottom: 24px;
  color: #222222;
`;

export const Text = styled.div`
  margin-left: 16px;
  &:first-child {
    font-weight: 600;
    margin-bottom: 4px;
  }
  &:last-child {
    color: rgb(113, 113, 113);
    font-size: 14px;
  }
`;

export const CheckInDate = () => {
  const strStartDate = useSelector((state) => state.detail.startDate);
  const strArr = strStartDate.split('-');
  // console.log(strStartDate);
  // console.log(strArr);
  return { year: strArr[0], month: strArr[1], day: strArr[2] };
  // reservation page에서 사용할수 있도록 액션모듈 만들기?
};

const TextSummary = () => {
  // const numMonth = parseInt(CheckInDate().month);
  // const numDay = parseInt(CheckInDate().day);
  // console.log(typeof numMonth);
  const CancelPossibleDate = {
    month: parseInt(CheckInDate().month),
    day: parseInt(CheckInDate().day) - 1,
  };
  console.log({ CancelPossibleDate });

  return (
    <TextSummaryContainer>
      <SimpleSummary>
        <div className="emoticon">
          <AiOutlineHome />
        </div>
        <div>
          <Text>집 전체</Text>
          <Text>펜션(한국) 전체를 단독으로 사용하시게 됩니다.</Text>
        </div>
      </SimpleSummary>
      <SimpleSummary>
        <div className="emoticon">
          <WiStars />
        </div>
        <div>
          <Text>청결 강화</Text>
          <Text>
            에어비앤비의 강화딘 5단계 청소 절차를 준수하겠다고 동의한
            호스트입니다.
          </Text>
        </div>
      </SimpleSummary>
      <SimpleSummary>
        <div className="emoticon">
          <RiDoorOpenFill />
        </div>
        <div>
          <Text>셀프 체크인</Text>
          <Text>키패드를 이용해 체크인하세요.</Text>
        </div>
      </SimpleSummary>
      <SimpleSummary>
        <div className="emoticon">
          <RiCalendarCheckLine />
        </div>
        <div>
          <Text>
            {CancelPossibleDate.month}월{CancelPossibleDate.day}일 3:00PM까지
            무료 취소 가능{' '}
          </Text>
          <Text>
            그 후에는 {CancelPossibleDate.month}월 {CancelPossibleDate.day + 1}
            일 3:00PM 전에 예약을 취소하면 첫 1박 요금 및 서비스 수수료를 제외한
            요금 전액이 환불됩니다.
          </Text>
        </div>
      </SimpleSummary>
    </TextSummaryContainer>
  );
};

export { TextSummary };
