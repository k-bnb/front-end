import React from 'react';
import styled from 'styled-components';
import { BiTimeFive, BiSprayCan } from 'react-icons/bi';
import { FaDoorOpen } from 'react-icons/fa';
import { WiStars } from 'react-icons/wi';
import { AiFillCheckCircle } from 'react-icons/ai';
import Text from '../../atoms/atoms-detail/DetailText';

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
  &:last-child {
    margin: 0;
  }
`;

const NoticeTitle = styled(Text)`
  margin-bottom: 12px;
`;
const NoticeTextBox = styled(Text)`
  display: flex;
  align-items: baseline;
  margin-bottom: 8px;
  /* white-space: pre-line; */
`;
const NoticeEmoticon = styled.div`
  font-size: 20px;
  margin-right: 12px;
  min-width: 20px;
`;

export const AccommodationRules = ({ CheckInTime, CheckOutTime }) => (
  <NoticeDetailBox>
    <NoticeTitle big bold>
      숙소 이용 규칙
    </NoticeTitle>
    <NoticeTextBox big>
      <NoticeEmoticon>
        <BiTimeFive />
      </NoticeEmoticon>
      체크인 시간: {CheckInTime}:00 - 오전 12:00
    </NoticeTextBox>
    <NoticeTextBox big>
      <NoticeEmoticon>
        <BiTimeFive />
      </NoticeEmoticon>
      체크아웃 시간: {CheckOutTime}:00
    </NoticeTextBox>
    <NoticeTextBox big>
      <NoticeEmoticon>
        <FaDoorOpen />
      </NoticeEmoticon>
      키패드(으)로 셀프 체크인
    </NoticeTextBox>
  </NoticeDetailBox>
);

const HealthAndSafe = () => (
  <NoticeDetailBox>
    <NoticeTitle big bold>
      건강과 안전
    </NoticeTitle>
    <NoticeTextBox big>
      <NoticeEmoticon>
        <WiStars />
      </NoticeEmoticon>
      에어비앤비의 강화된 청소 절차 준수에 동의했습니다.
    </NoticeTextBox>
    <NoticeTextBox big>
      <NoticeEmoticon>
        <BiSprayCan />
      </NoticeEmoticon>
      에어비앤비의 사회적 거리두기 및 관련 가이드라인이 적용됩니다.
    </NoticeTextBox>
    <NoticeTextBox big>
      <NoticeEmoticon>
        <AiFillCheckCircle />
      </NoticeEmoticon>
      일산화탄소 경보기
    </NoticeTextBox>
    <NoticeTextBox big>
      <NoticeEmoticon>
        <AiFillCheckCircle />
      </NoticeEmoticon>
      화재경보기
    </NoticeTextBox>
  </NoticeDetailBox>
);

const RefundPolicy = ({ CancellableDate }) => (
  <NoticeDetailBox>
    <NoticeTitle big bold>
      환불 정책
    </NoticeTitle>
    <NoticeTextBox big>
      {CancellableDate.month}월 {CancellableDate.day}일 3:00 PM까지 무료 취소
      가능
    </NoticeTextBox>
    <NoticeTextBox big>
      그 후에는 {CancellableDate.month}월 {CancellableDate.day + 1}일 3:00 PM
      전에 예약을 취소하면 첫 1박 요금 및 서비스 수수료를 제외한 요금 전액이
      환불됩니다.
    </NoticeTextBox>
  </NoticeDetailBox>
);

const NoticeAll = ({ infoRes, CancellableDate, CheckInTime, CheckOutTime }) => (
  <NoticeAllContainer infoRes={infoRes}>
    <AccommodationRules
      infoRes={infoRes}
      CheckInTime={CheckInTime}
      CheckOutTime={CheckOutTime}
    />
    <HealthAndSafe />
    <RefundPolicy CancellableDate={CancellableDate} />
  </NoticeAllContainer>
);

export default NoticeAll;
