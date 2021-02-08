import React from 'react';
import styled from 'styled-components';
import { BiTimeFive, BiSprayCan } from 'react-icons/bi';
import { FaDoorOpen } from 'react-icons/fa';
import { WiStars } from 'react-icons/wi';
import { AiFillCheckCircle } from 'react-icons/ai';

const NoticeAllContainer = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: nowrap;
  max-width: 1128px;
`;

const NoticeDetailBox = styled.div`
  padding: 0 8px;
  width: 33.3%;
  margin-right: 32px;
  /* white-space: pre-wrap; */
  line-height: 20px;
  &::last-child {
    margin: 0;
  }
`;

const NoticeTitle = styled.div`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 600;
`;
const NoticeTextBox = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 8px;
  /* white-space: pre-line; */
  font-weight: 400;
  font-size: 16px;
`;
const NoticeEmoticon = styled.div`
  font-size: 20px;
  margin-right: 12px;
  min-width: 20px;
`;

const AccommodationRules = () => (
  <NoticeDetailBox>
    <NoticeTitle>숙소 이용 규칙</NoticeTitle>
    <NoticeTextBox>
      <NoticeEmoticon>
        <BiTimeFive />
      </NoticeEmoticon>
      체크인 시간: 오후 3:00 - 오전 12:00
    </NoticeTextBox>
    <NoticeTextBox>
      <NoticeEmoticon>
        <BiTimeFive />
      </NoticeEmoticon>
      체크아웃 시간: 오전 11:00
    </NoticeTextBox>
    <NoticeTextBox>
      <NoticeEmoticon>
        <FaDoorOpen />
      </NoticeEmoticon>
      키패드(으)로 셀프 체크인
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
      에어비앤비의 강화된 청소 절차 준수에 동의했습니다.
    </NoticeTextBox>
    <NoticeTextBox>
      <NoticeEmoticon>
        <BiSprayCan />
      </NoticeEmoticon>
      에어비앤비의 사회적 거리두기 및 관련 가이드라인이 적용됩니다.
    </NoticeTextBox>
    <NoticeTextBox>
      <NoticeEmoticon>
        <AiFillCheckCircle />
      </NoticeEmoticon>
      일산화탄소 경보기
    </NoticeTextBox>
    <NoticeTextBox>
      <NoticeEmoticon>
        <AiFillCheckCircle />
      </NoticeEmoticon>
      화재경보기
    </NoticeTextBox>
  </NoticeDetailBox>
);

const RefundPolicy = () => (
  <NoticeDetailBox>
    <NoticeTitle>환불 정책</NoticeTitle>
    <NoticeTextBox>3월 3일 3:00 PM까지 무료 취소 가능</NoticeTextBox>
    <NoticeTextBox>
      그 후에는 3월 4일 3:00 PM 전에 예약을 취소하면 첫 1박 요금 및 서비스
      수수료를 제외한 요금 전액이 환불됩니다.
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
