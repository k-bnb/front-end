import { useEffect, useRef, useState } from 'react';
// import Slider from 'react-slick';
import styled from 'styled-components';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import Img from '../../atoms/atoms-main/Img';
import ArrowButton from './ArrowButton';

const CarouselStyle = styled.div`
  div {
    /* background-color: red; */
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;

    .left {
      width: 50px;
      height: 50px;
      /* background-color: red; */
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      top: 50%;
      transform: translateY(-50%) rotate(180deg);
    }

    .carousel-group {
      display: flex;
      justify-content: center;

      .slide {
        justify-content: flex-start;
        overflow: hidden;
        width: 20%;
        display: flex;
        box-sizing: border-box;
        /* padding: 30px; */
      }
    }
    .right {
      display: flex;
      width: 50px;
      height: 50px;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
`;

const Carousel = ({ carouselImg }) => {
  const mySlide = useRef();
  const mySlideImg = useRef();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const length = carouselImg.length;

  if (!Array.isArray(carouselImg) || carouselImg.length <= 0) return null;

  const leftClick = (e) => {
    const slide = mySlide.current;
    setCurrent((state) => (state -= slide.offsetWidth));
    if (current < 0) {
      setCurrent((state) => (state = 0));
    }
    [...mySlide.current.children].forEach((image) => {
      image.style.transform = `translateX(-${current}px)`;
    });
  };
  const rightClick = (e) => {
    const slide = mySlide.current;

    if (mySlideImg.current.offsetWidth < current) {
      setCurrent((state) => (state = current - slide.offsetWidth));
    }

    setCurrent((state) => (state += slide.offsetWidth));

    [...mySlide.current.children].forEach((image) => {
      image.style.transform = `translateX(-${current}px)`;
    });
    // slide.style.transform = `translateX(${current})`;
  };

  return (
    <CarouselStyle>
      <CircleDiv carouseldiv tabIndex='0'>
        <ArrowButton onClick={leftClick} className="left" />
        <div className="carousel-group" ref={mySlideImg}>
          <div className="slide" ref={mySlide}>
            {carouselImg.map(({ src, alt, name }, index) => {
              return <Img src={src} alt={alt} carouselimg />;
            })}
          </div>
        </div>
        <ArrowButton onClick={rightClick} className="right" />
      </CircleDiv>
    </CarouselStyle>
  );
};

export default Carousel;
