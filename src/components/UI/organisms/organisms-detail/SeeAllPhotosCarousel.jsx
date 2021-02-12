import React from 'react';
import styled, { css } from 'styled-components';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const CarouselBlock = styled.div`
  position: relative;
  margin-top: 50px;

  .detail-carousel-prev-btn,
  .detail-carousel-next-btn {
    position: absolute;
    top: 50%;
    width: 45px;
    height: 45px;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid gray;
    transform: translateY(-50%);
    z-index: 1;
    cursor: pointer;
    svg {
      font-size: 18px;
    }

    &:disabled {
      display: none;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
  .detail-carousel-prev-btn {
    left: 0;
  }
  .detail-carousel-next-btn {
    right: 0;
  }
`;

const CarouselPhotoUl = styled.ul`
  position: relative;
  width: 80%;
  height: 600px;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  li {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    text-align: center;
  }
  .active-li {
    opacity: 1;
    transition-duration: 0.4s;
  }
  .non-active-li {
    opacity: 0;
  }

  img {
    vertical-align: middle; // 이미지 아래의 빈공간 없애기.
    width: 1000px;
    height: 600px;
    object-fit: contain;
  }
`;

const SeeAllPhotosCarousel = ({ photos, current, setCurrent }) => {
  console.log(photos[1]);
  return (
    <CarouselBlock>
      <button
        className="detail-carousel-prev-btn"
        onClick={() => {
          setCurrent(current - 1);
        }}
        disabled={!current}
      >
        <GrFormPrevious />
      </button>
      <button
        className="detail-carousel-next-btn"
        onClick={() => {
          setCurrent(current + 1);
        }}
        disabled={current === photos.length - 1}
      >
        <GrFormNext />
      </button>
      <CarouselPhotoUl>
        {photos.map((photo, index) => (
          <li className={current === index ? 'active-li' : 'non-active-li'}>
            <img
              src={`${photo}`}
              alt={`number ${index} pic`}
              className="carousel-photo"
            />
          </li>
        ))}
      </CarouselPhotoUl>
    </CarouselBlock>
  );
};

export default SeeAllPhotosCarousel;
