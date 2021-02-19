import React, { useState } from 'react';
import styled from 'styled-components';
import { SliderData } from './SliderData';

const Diver = styled.section`
  position: relative;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  .rigth-btn {
    position: absolute;
    top: 50%;
    left: 100px;
    z-index: 10;
    font-size: 3rem;
    cursor: pointer;
    /* user-select:none; */
  }
  .left-btn {
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    z-index: 10;
    cursor: pointer;
    /* user-select:none; */
  }
`;
const Ddiver = styled.div`
  .image {
    width: 300px;
    height: 200px;
    border-radius: 10px;
  }
  .slide {
    opacity: 0;
  }
  .slide.action {
    opacity: 1;
  }
`;

const ListCarousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = (e) => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = (e) => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Diver className="slider">
      <button className="left-btn" oncClick={prevSlide}>
        prev
      </button>
      <button className="rigth-btn" oncClick={nextSlide}>
        next
      </button>
      {SliderData.map((slide, index) => {
        return (
          <Ddiver
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt={slide.alt} className="image" />
            )}
            ;
          </Ddiver>
        );
      })}
    </Diver>
  );
};

export default ListCarousel;
