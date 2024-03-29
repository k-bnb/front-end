import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Modal from '../../../../portal/Modal';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import ConfirmModal from './ConfirmModal';
const ReserveCancelStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100vw;

  .text {
    span {
      font-size: 3.4rem;
      color: #db75df;
    }
  }
  .radio-group {
    p {
      font-size: 2rem;
      padding: 0;
      margin: 0;
      margin-bottom: 10px;
    }
    div {
      display: block;

      input {
        vertical-align: super;
      }
      label {
        margin-left: 10px;

        vertical-align: super;
      }
    }
  }
  div {
    .okBtn {
      padding: 10px 30px;
      background-color: #fff;
      border-radius: 15px;
      border: 0;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-color 0.3s;
      font-size: 1.5rem;
      font-weight: 800;
      ${(props) =>
        props.disabled ||
        css`
          &:hover {
            background-color: #fff;
          }
        `}
      &:hover {
        background-color: #db75df;
        svg {
          color: red;
        }
      }
    }
    .cancel {
      position: absolute;
      top: 10px;
      right: 20px;
      background: none;
      padding: 10px 30px;

      border-radius: 15px;
      border: 0;
      cursor: pointer;
      color: #fff;
      font-size: 2.4rem;
      padding: 0 10px;
      &:hover {
        background: none;
        font-size: 2.7rem;
        font-weight: 700;
      }
    }
  }
`;
const ReserveCancel = ({
  cancel,
  cancelBtn,
  list,
  reservationConfirmBtn,
  roomId,
  item,
  reservationId,
  resonChange,
  miniModal,
  disabledBtn,
}) => {
  // const [clickReservationId, setClickReservationId] = useState(
  //   checkId.reservationId,
  // );

  console.log(reservationId);
  // setClickReservationId(checkId);

  // console.log(clickReservationId);
  console.log(disabledBtn);
  return (
    <>
      <ReserveCancelStyle>
        <div className="text">
          <TextStyle>예약을 취소하시겠습니까?</TextStyle>
        </div>
        <div className="radio-group" onChange={resonChange}>
          <p>예약 취소 이유는?</p>
          <div>
            <input
              type="radio"
              name="reason"
              value="지인과의 약속이 취소했기 때문에"
              id="own"
            />
            <label htmlFor="own" value="지인과의 약속이 취소했기 때문에">
              지인과의 약속이 취소했기 때문에
            </label>
            <div>
              <input
                id="two"
                type="radio"
                value="장난으로 예약하다가 실수로 예약 해서"
                name="reason"
              />
              <label htmlFor="two">장난으로 예약하다가 실수로 예약 해서</label>
            </div>
            <div>
              <input
                id="three"
                value="숙소가 마음에 안들어서"
                type="radio"
                name="reason"
              />
              <label htmlFor="three">숙소가 마음에 안들어서</label>
            </div>
            <div>
              <input
                id="fore"
                value="나의 집하고 거리가 너무 멀기 때문에"
                type="radio"
                name="reason"
              />
              <label htmlFor="fore">나의 집하고 거리가 너무 멀기 때문에</label>
            </div>
          </div>
        </div>
        <div>
          <button
            name="reservationId"
            value={roomId}
            onClick={reservationConfirmBtn}
            className="okBtn"
            disabled={disabledBtn}
            style={
              disabledBtn
                ? { cursor: 'not-allowed', backgroundColor: '#fff' }
                : { cursor: 'pointer' }
            }
          >
            <svg
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{
                height: '32px',
                width: '32px',
                display: 'block',
                fill: 'rgb(96, 182, 181)',
              }}
            >
              <path d="m18.5 22a .5.5 0 1 1 .5-.5.5.5 0 0 1 -.5.5zm3.73-12.54a19.71 19.71 0 0 0 -5.88-.4c-.66.06-1.26.15-1.84.25a5.89 5.89 0 0 1 .36 2.66c-.22 2.57-1.93 4.51-3.82 4.34s-3.25-2.39-3.03-4.95a6.13 6.13 0 0 1 .27-1.3c-.16-.01-.3 0-.46-.02a27.97 27.97 0 0 1 -5.2-.8.5.5 0 0 0 -.63.48v9.14a.5.5 0 0 0 .34.47 17.04 17.04 0 0 0 5.49.86c3.14 0 5.83-.98 8.52-.98a23.25 23.25 0 0 1 5.65.82.5.5 0 0 0 .62-.48v-9.6a.5.5 0 0 0 -.39-.49zm-17.23-5.96a.5.5 0 1 0 -.5.5.5.5 0 0 0 .5-.5zm-2.5-1.5h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm20 20h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1z"></path>
              <path
                d="m21.59 6.02a23.21 23.21 0 0 0 -1.45-.26 21.33 21.33 0 0 0 -4.83-.2 26.76 26.76 0 0 0 -3.13.48l-.46.09a16.94 16.94 0 0 1 -4.87.4 18.25 18.25 0 0 1 -3.37-.53 11.23 11.23 0 0 1 -1.24-.4 4.54 4.54 0 0 1 -.39-.17.62.62 0 0 0 -.87.55v1.45a.5.5 0 0 0 1 0v-.86a12.83 12.83 0 0 0 1.24.39 17.42 17.42 0 0 0 1.73.36c-.17 1.82-1.75 2.68-3.47 2.68a.5.5 0 0 0 -.5.5v6.75c0 .76 3.14 1.85 5.83 1.85a24.54 24.54 0 0 0 4.51-.49 21.51 21.51 0 0 1 4.01-.48q.32 0 .66.02a19.02 19.02 0 0 1 3.07.45 24.07 24.07 0 0 1 1.77.47 1.5 1.5 0 0 0 .47.03c.4-.03.68-.15.68-.61a425.81 425.81 0 0 0 0-1.5.5.5 0 0 0 -1 0 230.48 230.48 0 0 0 0 1.08 25.1 25.1 0 0 0 -1.71-.45c-.24-.05-.47-.09-.7-.13a3.79 3.79 0 0 1 2.91-2.5.5.5 0 0 0 .48-.5c0-.3.01-.68.02-1.25l.05-1.74c.05-1.73.07-3.19.07-4.81a.7.7 0 0 0 -.54-.69zm-19.59 11.23v-.22a1.39 1.39 0 0 1 0 .22zm1.15.24a8.18 8.18 0 0 1 -1.03-.43 4.27 4.27 0 0 1 -.12-.06v-1.28a2.53 2.53 0 0 1 2.11 2.06c-.33-.08-.65-.17-.96-.28zm17.9-6-.05 1.74-.02.84a4.91 4.91 0 0 0 -3.38 3.25 17.2 17.2 0 0 0 -1.55-.16q-.36-.02-.71-.02a22.22 22.22 0 0 0 -4.18.49 23.71 23.71 0 0 1 -4.34.48 11.31 11.31 0 0 1 -1.7-.14c-.08-1.68-1.23-2.83-3.13-3.27v-3.72a3.94 3.94 0 0 0 3.95-3.52c.27.03.55.06.84.08a17.86 17.86 0 0 0 5.12-.42l.46-.09a25.89 25.89 0 0 1 3.01-.46 17.46 17.46 0 0 1 2.18-.04 4.56 4.56 0 0 0 3.53 3.39c-.01.51-.02 1.03-.04 1.58zm.06-2.6a3.63 3.63 0 0 1 -2.51-2.3 22.37 22.37 0 0 1 2.4.33l.12.03c0 .66-.01 1.3-.02 1.95zm-6.49 1.14a6.5 6.5 0 0 1 .26 2.48c-.24 2.82-2.16 5-4.37 4.8-2.2-.2-3.72-2.68-3.48-5.5a6.48 6.48 0 0 1 .67-2.39c.14-.28.29-.55.39-.7a.5.5 0 1 1 .83.55 8.08 8.08 0 0 0 -.33.6 5.49 5.49 0 0 0 -.56 2.02c-.2 2.32.99 4.27 2.57 4.41s3.08-1.57 3.28-3.89a5.5 5.5 0 0 0 -.21-2.1.5.5 0 1 1 .95-.3z"
                fill="#484848"
              ></path>
            </svg>
            예약 취소
          </button>
          <button name="cancel" onClick={cancelBtn} className="cancel">
            x
          </button>
        </div>
      </ReserveCancelStyle>
    </>
  );
};

export default ReserveCancel;
