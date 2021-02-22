import React from 'react';
import styled from 'styled-components';
import CircleButton from '../../atoms/atoms-header/CircleButton';
import TextStyle from '../../atoms/atoms-main/TextStyle';
const ReCheckBedStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    .option {
      font-size: 1.2rem;
    }
    .numbers {
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: rgb(113, 113, 113);
        &.zero {
          background: none;
          cursor: not-allowed;
          border-color: rgba(0, 0, 0, 0.1);
          color: rgba(0, 0, 0, 0.1);
        }
      }
      span {
        display: block;
        width: 20px;
        text-align: center;
        z-index: -1;
      }
    }
  }
`;
const ReCheckBedCount = React.memo(
  ({ bedNum, bedRoomNum, bathRoomNum, minusBtn, plusBtn }) => {
    return (
      <ReCheckBedStyle>
        <h1>침실과 침대</h1>
        <div>
          <div>
            <TextStyle className="option">침대 수</TextStyle>
          </div>
          <div className="numbers">
            <CircleButton
              name="bedNum"
              value={bedNum}
              minus
              onClick={minusBtn}
              disabled={bedNum === 0 ? 'false' : ''}
              className={bedNum === 0 && 'zero'}
            />
            <TextStyle>{bedNum}</TextStyle>
            <CircleButton name="bedNum" value={bedNum} onClick={plusBtn} />
          </div>
        </div>
        <div>
          <div>
            <TextStyle className="option">침실 수</TextStyle>
          </div>
          <div className="numbers">
            <CircleButton
              minus
              name="bedRoomNum"
              value={bedRoomNum}
              onClick={minusBtn}
              className={bedRoomNum === 0 && 'zero'}
            />
            <TextStyle>{bedRoomNum}</TextStyle>
            <CircleButton
              name="bedRoomNum"
              value={bedRoomNum}
              onClick={plusBtn}
            />
          </div>
        </div>
        <div>
          <div>
            <TextStyle className="option">욕실 수</TextStyle>
          </div>
          <div className="numbers">
            <CircleButton
              minus
              name="bathRoomNum"
              value={bathRoomNum}
              onClick={minusBtn}
              className={bathRoomNum === 0 && 'zero'}
            />
            <TextStyle>{bathRoomNum}</TextStyle>
            <CircleButton
              name="bathRoomNum"
              value={bathRoomNum}
              onClick={plusBtn}
            />
          </div>
        </div>
      </ReCheckBedStyle>
    );
  },
);

export default ReCheckBedCount;
