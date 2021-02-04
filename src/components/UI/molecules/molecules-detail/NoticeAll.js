import React from 'react';
import styled from 'styled-components';
import { BiTimeFive, BiSprayCan } from 'react-icons/bi';
import { FaDoorOpen } from 'react-icons/fa';
import { WiStars } from 'react-icons/wi';
import { AiFillCheckCircle } from 'react-icons/ai';

const NoticeAllContainer = styled.div`
  display: flex;
  /* align-items: stretch; */
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 1128px;
`;

const NoticeDetailBox = styled.div`
  padding: 0 8px;
  width: 33.33.%;
  max-width: 381.3px;
  margin-right: 32px;
  white-space: pre-wrap;
  &:last-child {
    margin: 0;
  }
`;

const NoticeTitle = styled.div`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;
const NoticeTextBox = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 8px;
  white-space: pre-line;
`;
const NoticeEmoticon = styled.div`
  font-size: 20px;
  line-height: 16px;
  margin-right: 12px;
  min-width: 20px;
`;

const NoticeText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const AccommodationRules = () => (
  <NoticeDetailBox>
    <NoticeTitle>숙소 이용 규칙</NoticeTitle>
    <NoticeTextBox>
      <NoticeEmoticon>
        <BiTimeFive />
      </NoticeEmoticon>
      <NoticeText>체크인 시간: 오후 3:00 - 오전 12:00</NoticeText>
    </NoticeTextBox>
    <NoticeTextBox>
      <NoticeEmoticon>
        <BiTimeFive />
      </NoticeEmoticon>
      <NoticeText>체크아웃 시간: 오전 11:00</NoticeText>
    </NoticeTextBox>
    <NoticeTextBox>
      <NoticeEmoticon>
        <FaDoorOpen />
      </NoticeEmoticon>
      <NoticeText>키패드(으)로 셀프 체크인</NoticeText>
    </NoticeTextBox>
  </NoticeDetailBox>
);

const HealthAndSafe = () => (
  <NoticeDetailBox>
    <NoticeTitle>건강과 안전</NoticeTitle>
    <NoticeTextBox>
      <NoticeEmoticon>
        <WiStars />
      </NoticeEmoticon>
      <NoticeText>
        에어비앤비의 강화된 청소 절차 준수에 동의했습니다.
      </NoticeText>
    </NoticeTextBox>
    <NoticeTextBox>
      <NoticeEmoticon>
        <BiSprayCan />
      </NoticeEmoticon>
      <NoticeText>
        에어비앤비의 사회적 거리두기 및 관련 가이드라인이 적용됩니다.
      </NoticeText>
    </NoticeTextBox>
    <NoticeTextBox>
      <NoticeEmoticon>
        <AiFillCheckCircle />
      </NoticeEmoticon>
      <NoticeText>일산화탄소 경보기</NoticeText>
    </NoticeTextBox>
    <NoticeTextBox>
      <NoticeEmoticon>
        <AiFillCheckCircle />
      </NoticeEmoticon>
      <NoticeText>화재경보기</NoticeText>
    </NoticeTextBox>
  </NoticeDetailBox>
);

const RefundPolicy = () => (
  <NoticeDetailBox>
    <NoticeTitle>환불 정책</NoticeTitle>
    <NoticeTextBox>
      <NoticeText>
        3월 3일 3:00 PM까지 무료 취소 기능
        <br /> 그 후에는 3월 4일 3:00 PM 전에 예약을 취소하면 첫 1박 요금 및
        서비스 수수료를 제외한 요금 전액이 환불됩니다.
      </NoticeText>
    </NoticeTextBox>
  </NoticeDetailBox>
);

const NoticeAll = () => (
  <NoticeAllContainer>
    <AccommodationRules />
    <HealthAndSafe />
    <RefundPolicy />
  </NoticeAllContainer>
);

export default NoticeAll;
