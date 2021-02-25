import React from 'react';
import styled from 'styled-components';

const AccommodationPictures = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 50%);
  grid-gap: 8px;
  max-width: 1128px;
  width: 100%;
  max-height: calc(60vh - 64px);
  min-height: 300px;
  margin: 0 auto;
  border-radius: 12px;
  overflow-y: hidden;
  margin-top: 24px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.2s ease-in-out;
    :hover {
      cursor: pointer;
      filter: brightness(80%);
    }
  }
  .dot-square {
    width: 12px;
    height: 12px;
    margin-right: 4px;
  }

  .one {
    grid-column: 1/3;
    grid-row: 1/3;
    background: lightgray;
  }
  .two {
    grid-column: 3/4;
    grid-row: 1/2;
    background: lightgray;
  }
  .three {
    grid-column: 3/4;
    grid-row: 2/3;
    background: lightgray;
  }
  .four {
    grid-column: 4/5;
    grid-row: 1/2;
    background: lightgray;
  }
  .five {
    grid-column: 4/5;
    grid-row: 2/3;
    background: lightgray;
  }
`;

const ImgDetailBtn = styled.a`
  display: inline-block;
  position: absolute;
  bottom: 24px;
  right: 24px;
  z-index: 10;
  margin: 24px 0 0;
  padding: 7px 15px;
  border-radius: 8px;
  border: 1px solid #222;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #222;
  background: #fff;
  cursor: pointer;
  transition-duration: 0.2s;
  &:active {
    transform: scale(0.95);
  }
`;

const ImageFrame = ({
  setShowModal,
  setCurrent,
  ImageContainerRef,
  roomImgUrlList,
}) => {
  return (
    <AccommodationPictures ref={ImageContainerRef} tabIndex="1">
      <ImgDetailBtn
        tabIndex="1"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17 17"
          role="presentation"
          aria-hidden="true"
          focusable="false"
          className="dot-square"
        >
          <circle cx="1.5" cy="1.5" r="1.5"></circle>
          <circle cx="1.5" cy="8.5" r="1.5"></circle>
          <circle cx="8.5" cy="1.5" r="1.5"></circle>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <circle cx="15.5" cy="1.5" r="1.5"></circle>
          <circle cx="15.5" cy="8.5" r="1.5"></circle>
          <circle cx="1.5" cy="15.5" r="1.5"></circle>
          <circle cx="8.5" cy="15.5" r="1.5"></circle>
          <circle cx="15.5" cy="15.5" r="1.5"></circle>
        </svg>
        사진 모두 보기
      </ImgDetailBtn>
      <div
        className="one"
        onClick={() => {
          setShowModal(true);
          setCurrent(0);
        }}
      >
        <img src={roomImgUrlList[0]} alt="" />
      </div>
      <div
        className="two"
        onClick={() => {
          setShowModal(true);
          setCurrent(1);
        }}
      >
        <img src={roomImgUrlList[1]} alt="" />{' '}
      </div>
      <div
        className="three"
        onClick={() => {
          setShowModal(true);
          setCurrent(2);
        }}
      >
        <img src={roomImgUrlList[2]} alt="" />{' '}
      </div>
      <div
        className="four"
        onClick={() => {
          setCurrent(3);
          setShowModal(true);
        }}
      >
        <img src={roomImgUrlList[3]} alt="" />{' '}
      </div>
      <div
        className="five"
        onClick={() => {
          setCurrent(4);
          setShowModal(true);
        }}
      >
        <img src={roomImgUrlList[4]} alt="" />{' '}
      </div>
    </AccommodationPictures>
  );
};

export default ImageFrame;
