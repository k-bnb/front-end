import React from 'react';
import styled from 'styled-components';
import '../../../index.css';

const RoomIntroSectionStyle = styled.section`
  padding: 20px 20px;
  border-bottom: 5px solid #ebebeb;
  .img-title {
    width: 100%;
    border: 1px solid;
    min-height: 250px;
    border-radius: 10px;
  }
  .title-name {
    padding: 20px 0;
    span {
      font-size: 1.9rem;
      font-weight: 600;
    }
  }
  .check {
    display: flex;
    justify-content: space-between;
    .check-in {
      flex-grow: 1;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      margin-right: 20px;
      span {
        color: rgba(0, 0, 0, 0.5);
      }
      div {
        padding: 10px 0;
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
    .check-out {
      flex-grow: 1;

      span {
        color: rgba(0, 0, 0, 0.5);
      }
      div {
        padding: 10px 0;
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
  }
`;
const RoomIntroSection = () => {
  return (
    <RoomIntroSectionStyle>
      <h1 className="readable-hidden">
        숙소사진 및 간단한 체크인 체크아웃 정보
      </h1>
      <div className="img-title">
        <img src="" alt="사진" />
      </div>
      <div className="title-name">
        <span>
          *무로감귤체험*오직 한 팀을 위한 500평 감귤과수원 단독주택 "새사르"
        </span>
      </div>
      <div className="check">
        <div className="check-in">
          <span>체크인</span>
          <div>2019년 4월 4일(목)</div>
        </div>
        <div className="check-out">
          <span>체크아웃</span>
          <div>2019년 4월 6일(토)</div>
        </div>
      </div>
    </RoomIntroSectionStyle>
  );
};

export default RoomIntroSection;
