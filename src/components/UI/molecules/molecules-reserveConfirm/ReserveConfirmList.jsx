import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/atoms-main/Button';
import Img from '../../atoms/atoms-main/Img';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import { MdKeyboardArrowRight } from 'react-icons/md';
const ReserveConfirmListStyle = styled.div`
  /* border: 1px solid; */
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
  img {
    border-radius: 10px;
  }
  .Big-img {
    width: 100%;
    img {
      width: 100%;
      height: 120px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  .reserve-info {
    padding: 15px;
    .reserve-date {
      font-size: 1rem;
      letter-spacing: 0.1px;
      color: rgba(0, 0, 0, 0.6);
    }
    .reserve-title {
      span {
        font-weight: 500;
      }
      margin-bottom: 10px;
    }
  }
  .reserve-link {
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    .small-img {
      width: 30px;
      /* height: 100px; */
      /* border: 1px solid; */
      margin-right: 10px;
      img {
        height: auto;
        width: 100%;
      }
    }
    div {
      display: block;
      width: 100%;
      overflow: hidden;
      span {
        text-overflow: ellipsis;
        vertical-align: middle;
        font-size: 1rem;
      }
    }
    svg {
      font-size: 1.4rem;
    }
  }
  .reserve-more {
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px;
    button {
      width: 100%;
      border: 0;
      padding: 5px 30px;
      font-size: 1.3rem;
      font-weight: 700;
    }
  }
`;
const sectionImg = [
  { src: './imgs/house.jpg', alt: '집 전체', name: '집 전체' },
  { src: './imgs/human.jpg', alt: '온수 욕조', name: '온수 욕조' },
];

const ReserveConfirmList = ({ item }) => {
  return (
    <ReserveConfirmListStyle>
      <div className="Big-img">
        <Img src={sectionImg[0].src} />
      </div>
      <div className="reserve-info">
        <div className="reserve-date">
          <TextStyle>
            {'2010'}년 {'01'}월 {'09'}일{item.checkIn}
          </TextStyle>
          ~
          <TextStyle>
            {'2010'}년 {'01'}월 {'09'}일{item.checkOut}
          </TextStyle>
        </div>
        <div className="reserve-title">
          <TextStyle blackmiddlebold>{'Namwon-eup'}</TextStyle>
        </div>
        <div className="reserve-link">
          <div className="small-img">
            <Img src={sectionImg[1].src} />
          </div>
          <div>
            <TextStyle>
              *무료감귤체험*오직 한 팀을 위한 500평 감귤 과수원
            </TextStyle>
          </div>
          <MdKeyboardArrowRight />
        </div>
      </div>
      <div className="reserve-more">
        <Button>
          <TextStyle>여행 계획 더 보기</TextStyle>
        </Button>
      </div>
    </ReserveConfirmListStyle>
  );
};

export default ReserveConfirmList;
