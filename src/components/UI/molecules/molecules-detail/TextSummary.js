import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import { WiStars } from 'react-icons/wi';
//import { GiDiamonds } from 'react-icons/gi';
import { RiDoorOpenFill, RiCalendarCheckLine } from 'react-icons/ri';

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

const CheckDateExists = () => (
  <div>
    <Text>체크인 24시간 전까지 수수료 없이 예약 취소 가능</Text>
    <Text>
      그 이후로는 체크인 전에 취소하면 첫 1박 요금과 서비스 수수료를 제외한 전액
    </Text>
  </div>
);

const TextSummary = ({ CancellableDate, detailObj }) => {
  const CheckInDate = detailObj.startDate;
  const CheckOutDate = detailObj.EndDate;
  console.log(detailObj);

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
        {CheckInDate === '' || CheckOutDate === '' ? (
          <CheckDateExists />
        ) : (
          <div>
            <Text>
              {CancellableDate.month}월{CancellableDate.day}일 3:00PM까지 무료
              취소 가능
            </Text>
            <Text>
              그 후에는 {CancellableDate.month}월 {CancellableDate.day + 1}일
              3:00PM 전에 예약을 취소하면 첫 1박 요금 및 서비스 수수료를 제외한
              요금 전액이 환불됩니다.
            </Text>
          </div>
        )}
      </SimpleSummary>
    </TextSummaryContainer>
  );
};

export { TextSummary };
