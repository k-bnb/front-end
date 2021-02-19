import React, { useRef } from 'react';
import styled from 'styled-components';
import Input from '../../atoms/atoms-main/Input';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import { BiWon } from 'react-icons/bi';

const ReCheckCashStyle = styled.div`
  padding: 0 20px;
  div {
    span {
      font-size: 1.3rem;
    }
  }
  .cashInput {
    display: flex;
    align-items: center;
    margin: 15px 0;
    div {
      position: relative;
      input {
        /* width: 300px; */

        padding: 20px 19px;
        &:focus {
          border: 2px solid #000;
        }
        &:focus + span {
          transition: 1s linear;
          font-size: 0.4rem;
        }
      }
      &::before {
        content: '₩';
        display: block;
        position: absolute;
        /* width: 10px; */
        font-size: 2rem;
        /* height: 10px; */
        bottom: 50%;
      
        left: 5px;
        transform: translateY(50%);
      }
      span {
        position: absolute;

        top: -6px;
        left: 0;
        color: rgba(0, 0, 0, 0.3);
        transform: translateY(50%);
        z-index: 0;
      }
    }

    span {
      display: block;

      margin-right: 5px;
      margin-left: 5px;
    }
  }
`;

const ReCheckCash = ({
  cost,
  costSearch,
  localMinCost,
  setLocalMinCost,
  localMaxCost,
  setLocalMaxCost,
 }) => {
  //  const changeMinCost = (e) => {
  //   setMinCost(e.target.value);
  //  };
  //  const changeMaxCost = (e) => {
  //   setMaxCost(e.target.value);
  //  };
  return (
    <ReCheckCashStyle>
      <div>
        <TextStyle>평균 월간 요금은 <BiWon/>3,323,124 입니다.</TextStyle>
      </div> 
      <div className="cashInput">
        <div>
          <Input name="minCost" value={localMinCost}  onChange={(e) => {
            setLocalMinCost(+e.target.value);
          }} type="text"/>{' '}
          <span>최소금액</span>
        </div>
        <span>{'-'}</span>{' '}
        <div>
          <Input type="text" value={localMaxCost} onChange={(e) => {
            setLocalMaxCost(+e.target.value);
          }} name="maxCost" />
          <span>최대금액</span>
        </div>
      </div>
    </ReCheckCashStyle>
  );
};

export default ReCheckCash;
