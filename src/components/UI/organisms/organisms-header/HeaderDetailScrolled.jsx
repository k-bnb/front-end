import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { FiShare } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import Text from '../../atoms/atoms-header/Text';
import ReserveBtn from '../../atoms/atoms-detail/ReserveBtn';
import Grade from '../../atoms/atoms-detail/Grade';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const HeaderDetailScrolledBlock = styled.div`
  width: 100%;
  height: 80px;
  padding: 30px 80px 0 80px;
  background-color: white;
  transition: 0.1s ease-in;
  position: fixed;
  z-index: 9999;
  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.1);

  ul {
    width: 200px;
    height: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
  }

  .header-detail-list {
    cursor: pointer;
  }

  .header-detail-list:hover {
    border-bottom: 4px solid black;
  }
  .share {
    position: absolute;
    top: 30px;
    font-size: 16px;
    cursor: pointer;
    right: 120px;
  }
  .like {
    position: absolute;
    top: 30px;
    font-size: 16px;
    cursor: pointer;
    right: 80px;
  }

  ${(props) =>
    props.showButton &&
    css`
      .share {
        right: 540px;
      }
      .like {
        right: 500px;
      }
      .box {
        animation: ${fadeIn} 0.4s ease;
        position: absolute;
        top: 10px;
        right: 80px;
      }
      button {
        vertical-align: middle;
        margin-top: 10px;
      }

      .grade {
        position: absolute;
        top: 25px;
        left: -5px;
      }
    `}
  ${(props) =>
    props.disappear &&
    css`
      .box {
        z-index: 1;
        animation: ${fadeOut} 0.4s ease;
        position: absolute;
        top: 10px;
        right: 80px;
      }

      .grade {
        position: absolute;
        top: 25px;
        left: -5px;
      }

      button {
        vertical-align: middle;
        margin-top: 10px;
      }
    `}
`;

const HeaderDetailScrolled = ({
  showButton,
  scrollToHandler,
  scrollToElement,
  reviewRef,
  facilityRef,
}) => {
  const [localShowButton, setLocalShowButton] = useState(showButton);
  const [displayAnimation, setDisplayAnimation] = useState(false);

  useEffect(() => {
    if (localShowButton && !showButton) {
      setDisplayAnimation(true);
      setTimeout(() => setDisplayAnimation(false), 400);
    }
    setLocalShowButton(showButton);
  }, [localShowButton, showButton]);

  return (
    <HeaderDetailScrolledBlock showButton={showButton} disappear={!showButton}>
      <ul>
        <Text
          noPadding
          className="header-detail-list"
          onClick={() => {
            scrollToHandler(80); // 사진으로 이동
          }}
        >
          사진
        </Text>
        <Text
          noPadding
          className="header-detail-list"
          onClick={() => {
            scrollToElement(facilityRef); // 편의시설로 이동
          }}
        >
          편의시설
        </Text>
        <Text
          noPadding
          className="header-detail-list"
          onClick={() => {
            scrollToElement(reviewRef);
          }}
        >
          후기
        </Text>
        <Text noPadding className="header-detail-list">
          위치
        </Text>
      </ul>
      <FiShare className="share" />
      <BsHeart className="like" />
      {!displayAnimation && !localShowButton ? null : (
        <div className="box">
          <Text className="reserve-notice">
            예약 확정 전에는 요금이 청구되지 않습니다.
          </Text>
          <ReserveBtn half={true} />
          <Grade small={true} />
        </div>
      )}
    </HeaderDetailScrolledBlock>
  );
};

export default HeaderDetailScrolled;
