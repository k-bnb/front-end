import React from 'react';
import Input from '../../atoms/atoms-main/Input';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import { BiCheck } from 'react-icons/bi';
import styled from 'styled-components';

const ReCheckRoomTypeStyle = styled.div`
  .checkRooms {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    .checkRooms-group {
      display: flex;
      align-items: center;
      width: 280px;

      .box-div {
        position: relative;
        input {
          visibility: hidden;
          margin-right: 30px;
        }
        input:checked + label {
          border: 1px solid #bcbcbc;
          cursor: pointer;
          background-color: #000;
          svg {
            color: #eee;

            font-size: 3rem;
          }
        }
        label {
          top: 0;
          position: absolute;
          border-radius: 5px;
          width: 20px;
          height: 20px;
          border: 1px solid rgba(0, 0, 0, 0.3);
          cursor: pointer;
          display: flex;

          justify-content: center;
          align-items: center;
          svg {
            color: #eee;

            font-size: 3rem;
          }
        }
      }
      div {
        margin-bottom: 20px;
        /* background-color: black; */
        display: flex;
        flex-direction: column;

        h2 {
          /* display: block; */
          padding: 0;
          margin: 0;
          font-weight: 600;
          /* border: 1px solid; */
        }
        span {
          font-size: 1.3rem;
          word-spacing: 0.1rem;
        }
      }
    }
  }
`;

const ReCheckRoomType = ({ roomTypes, roomType }) => {
  console.log(roomType);
  return (
    <ReCheckRoomTypeStyle>
      <div className="checkRooms">
        <div className="checkRooms-group">
          <div className="box-div">
            <Input
              type="checkbox"
              id="AllHouse"
              name="Entire home/apt"
              onChange={roomTypes}
              checked={roomType === 'Entire home/apt' ? true : false}
            />
            <label htmlFor="AllHouse" aria-label="집 전체">
              <BiCheck />
            </label>
          </div>
          <div>
            <h2>집 전체</h2>
            <TextStyle>집 전체를 단독으로 사용합니다.</TextStyle>
          </div>
        </div>
        <div className="checkRooms-group">
          <div className="box-div">
            <Input
              type="checkbox"
              id="singleRoom"
              onChange={roomTypes}
              name="Private room"
              checked={roomType === 'Private room' ? true : false}
            />
            <label htmlFor="singleRoom" aria-label="개인실">
              <BiCheck />
            </label>
          </div>
          <div>
            <h2>개인실</h2>
            <TextStyle>
              침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께
              이용할 수도 있습니다.
            </TextStyle>
          </div>
        </div>
        <div className="checkRooms-group">
          <div className="box-div">
            <Input
              type="checkbox"
              name="hotelroom"
              id="hotelRoom"
              onChange={roomTypes}
              checked={roomType === 'hotelroom' ? true : false}
            />
            <label htmlFor="hotelRoom" aria-label="호텔 객실">
              <BiCheck />
            </label>
          </div>
          <div>
            <h2>호텔 객실</h2>
            <TextStyle>
              부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다.
            </TextStyle>
          </div>
        </div>
        <div className="checkRooms-group">
          <div className="box-div">
            <Input
              type="checkbox"
              name="Shared room"
              id="multiroom"
              onChange={roomTypes}
              checked={roomType === 'Shared room' ? true : false}
            />
            <label htmlFor="multiroom" aria-label="다인실">
              <BiCheck />
            </label>
          </div>
          <div>
            <h2>다인실</h2>
            <TextStyle>
              사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께
              이용합니다.
            </TextStyle>
          </div>
        </div>
      </div>
    </ReCheckRoomTypeStyle>
  );
};

export default ReCheckRoomType;
