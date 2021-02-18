import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/atoms-main/Button';
import Img from '../../atoms/atoms-main/Img';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { extractMonthDate } from '../../../../lib/extractMonthDate';
import Modal from '../../../../portal/Modal';
import ReserveCancelModal from './ReserveCancelModal';
import ReserveCancel from './ReserveCancel';
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
    .title {
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

const ReserveConfirmList = ({
  item,
  modalState,
  cancel,
  cancelBtn,
  cancelModal,
}) => {
  return (
    <ReserveConfirmListStyle>
      <div className="Big-img">
        <Img src={sectionImg[0].src} />
      </div>
      <div className="reserve-info">
        <div className="reserve-date">
          <TextStyle>
            {extractMonthDate(item.checkIn).year}년{' '}
            {extractMonthDate(item.checkIn).month}월{' '}
            {extractMonthDate(item.checkIn).date}일
          </TextStyle>
          ~
          <TextStyle>
            {extractMonthDate(item.checkOut).year}년{' '}
            {extractMonthDate(item.checkOut).month}월{' '}
            {extractMonthDate(item.checkOut).date}일
          </TextStyle>
        </div>
        <div className="reserve-title">
          <TextStyle blackmiddlebold>{item.roomName}</TextStyle>
        </div>
        <div className="reserve-link">
          <div className="small-img">
            <Img src={sectionImg[1].src} />
          </div>
          <div className="title">
            <TextStyle>
              *무료감귤체험*오직 한 팀을 위한 500평 감귤 과수원
            </TextStyle>
          </div>
          <MdKeyboardArrowRight />
        </div>
      </div>
      <div className="reserve-more">
        {item.status === '예약 완료' && (
          <>
            <Button onClick={cancel}>
              <TextStyle>예약 취소</TextStyle>
            </Button>

            <Modal>
              <ReserveCancelModal
                cancelModal={cancelModal}
                modalState={modalState}
              >
                <ReserveCancel
                  item={item}
                  cancel={cancel}
                  cancelBtn={cancelBtn}
                />
              </ReserveCancelModal>
            </Modal>
          </>
        )}
        {item.status === '이전 예약' && (
          <Button>
            <TextStyle>리스트 제거</TextStyle>
          </Button>
        )}
      </div>
    </ReserveConfirmListStyle>
  );
};

export default ReserveConfirmList;
