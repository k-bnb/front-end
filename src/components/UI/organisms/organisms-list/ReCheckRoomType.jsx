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
      margin-top: 10px;
      margin-bottom: 10px;
      .box-div {
        position: relative;
        display: flex;
        width: 100%;

        input {
          visibility: hidden;
          position: absolute;

          &:checked + .svg-img {
            background-color: #000;

            svg {
              display: flex;
              color: #fff;
              font-size: 1.7rem;
              font-weight: 800;
            }
          }
        }
        .svg-img {
          position: absolute;
          left: 0;
          bottom: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: translateY(50%);
          border: 1px solid rgba(0, 0, 0, 0.4);
          border-radius: 3px;

          svg {
            display: none;
          }
        }
        label {
          margin-left: 35px;
          cursor: pointer;
          h2 {
            font-weight: 400;
            padding: 0;
            margin: 0;
          }
          span {
            line-height: 1.5;
            font-size: 1.4rem;
          }
        }
      }
    }
  }
`;

const ReCheckRoomType = ({ roomTypes, roomType }) => {
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
            <div className="svg-img">
              <BiCheck />
            </div>
            <label htmlFor="AllHouse" aria-label="집 전체">
              <h2>집 전체</h2>
              <TextStyle>집 전체를 단독으로 사용합니다.</TextStyle>
            </label>
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
            <div className="svg-img">
              <BiCheck />
            </div>

            <label htmlFor="singleRoom" aria-label="개인실">
              <h2>개인실</h2>
              <TextStyle>
                침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께
                이용할 수도 있습니다.
              </TextStyle>
            </label>
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
            <div className="svg-img">
              <BiCheck />
            </div>
            <label htmlFor="hotelRoom" aria-label="호텔 객실">
              <h2>호텔 객실</h2>
              <TextStyle>
                부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다.
              </TextStyle>
            </label>
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
            <div className="svg-img">
              <BiCheck />
            </div>
            <label htmlFor="multiroom" aria-label="다인실">
              <h2>다인실</h2>
              <TextStyle>
                사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께
                이용합니다.
              </TextStyle>
            </label>
          </div>
        </div>
      </div>
    </ReCheckRoomTypeStyle>
  );
};

export default ReCheckRoomType;
