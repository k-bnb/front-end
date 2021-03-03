import React from 'react';
import styled from 'styled-components';
import { BsPhone } from 'react-icons/bs';
import { BiMessage } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';
import '../../../index.css';
const HostInfoMainSectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 5px solid #ebebeb;
  .host-info {
    display: flex;

    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      span {
        font-size: 1.8rem;
        font-weight: 600;
      }
      button {
        padding: 0;
        text-decoration: underline;
        /* width: 90px; */
        margin-top: 10px;
        border: 0;

        background: none;
      }
    }
  }
  .host-info-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 23px;
    button {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 10px 0 10px 10px;

      background: none;
      border: 0;
      border-top: 2px solid rgba(0, 0, 0, 0.1);
      div {
        display: flex;
        align-items: center;
        svg {
          margin-right: 10px;
        }
      }
    }
  }
`;
const HostInfoMainSection = () => {
  return (
    <HostInfoMainSectionStyle>
      <h1 className="readable-hidden">호스트 정보</h1>
      <div className="host-info">
        <div>
          <span>호스트 Seo Jin님</span>
          <button>프로필 보기</button>
        </div>
        <div>
          <img src="" alt="호스트 프로필 사진" />
        </div>
      </div>
      <div className="host-info-btn">
        <button>
          <div>
            <BsPhone />
            <span>호스트에게 전화하기</span>
          </div>
          <IoIosArrowForward />
        </button>
        <button>
          <div>
            <BiMessage />
            <span>호스트에게 전화하기</span>
          </div>
          <IoIosArrowForward />
        </button>
      </div>
    </HostInfoMainSectionStyle>
  );
};

export default HostInfoMainSection;
