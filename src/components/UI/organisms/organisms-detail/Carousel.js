import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import imgsrc1 from 'https://a0.muscache.com/im/pictures/144d8628-1123-4cd4-af93-dd81f47455cd.jpg?im_w=960';
import imgsrc2 from 'https://a0.muscache.com/im/pictures/9471ef27-e408-4bc6-82b3-73d76bc7c693.jpg?im_w=1200';
import imgsrc3 from 'https://a0.muscache.com/im/pictures/4f91a3fc-f44e-4c07-a6d5-e653a18fcb5e.jpg?im_w=1200';

const ImgContainer = styled.div`
  width: 60%;
  margin: auto;
  overflow: hidden;
`;
const CarouselSlide = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
`;
const Button = styled.button`
  border: 1px solid rgb(221, 221, 221);
  padding: 0.5em 2em;
  color: #888;
  border-radius: 50%;
  cursor: pointer;
`;
const SlideImg = styled.img`
  width: 100%;
  height: 70vh;
`;

const TOTAL_SLIDES = 2;
export function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const prevBtnRef = useRef('none');
  const nextBtnRef = useRef('none');

  const nextSlide = () => {
    if (currentSlide <= TOTAL_SLIDES) {
      setCurrentSlide(currentSlide + 1);
    } else {
      nextBtnRef.current.style.display = `none`;
    }
  };

  const prevSlide = () => {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      prevBtnRef.current.style.display = `none`;
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <ImgContainer>
      <CarouselSlide ref={slideRef}>
        <SlideImg src="https://a0.muscache.com/im/pictures/144d8628-1123-4cd4-af93-dd81f47455cd.jpg?im_w=960" />
        <SlideImg src="https://a0.muscache.com/im/pictures/9471ef27-e408-4bc6-82b3-73d76bc7c693.jpg?im_w=1200" />
        <SlideImg src="https://a0.muscache.com/im/pictures/4f91a3fc-f44e-4c07-a6d5-e653a18fcb5e.jpg?im_w=1200" />
      </CarouselSlide>
      <Button ref={prevBtnRef} onClick={prevSlide}>
        Prev
      </Button>
      <Button onClick={nextSlide}>Next</Button>
    </ImgContainer>
  );
}
