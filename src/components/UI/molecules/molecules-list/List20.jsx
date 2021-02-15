import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiWon } from 'react-icons/bi';
import Bookmark from '../../atoms/atoms-list/BookMark';
import Border from '../../atoms/atoms-list/Border';
import TextStyled from '../../atoms/atoms-list/Text';
import Imgs from '../../atoms/atoms-list/Imgs';
import ScoreText from './Score-Text';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
// import ListCarousel from './ListCarousel';
// import { SliderData } from './SliderData';

const Wrap = styled.div`
  /* width:100%; */
  height: auto;
  /* min-height: 5013px;/ */
  /* padding: 0 24px; */
  box-sizing: border-box;
`;

const ULWrap = styled.ul`
  list-style: none;
  display: inline-block;
  padding: 0;
  /* width: 808px; */
  /* height: 5013px; */
  /* height: 100px; */
  li {
    /* width: 792px; */
    position: relative;
    width: 100%;
    min-width: 500px;
    /* max-width: 90px; */
    height: 266px;
    padding: 24px 8px;
    box-sizing: border-box;
    display: flex;
    flex-flow: row no-wrap;
    justify-content: space-between;
    /* border-bottom: 1px solid #000; */
    align-items: center;

    :nth-child(1) {
      border-top: 2px solid #000;
      /* border-top:2px dashed red; */
    }
    .slide-group {
      display: flex;
      position: relative;
      width: 300px;
      overflow: hidden;
      .slide {
        flex-shrink: 0;
        display: flex;
        width: 100%;
        .slideDiv {
          display: flex;
          width: 100%;
          justify-content: flex-start;

          transform: translateX(0);

          img {
            width: 100%;
          }
        }
      }
      .btn-group {
        /* opacity: 0; */
        button {
          bottom: 50%;
          width: 30px;
          height: 30px;
          transform: translateY(50%);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          border: 0;
          outline: none;
          cursor: pointer;
          /* opacity: 0; */
          &:hover {
            width: 35px;
            height: 35px;
          }
        }
        .next {
          position: absolute;
          /* z-index: 100; */

          right: 10px;
        }
        .prev {
          position: absolute;

          left: 10px;
          /* z-index: 100; */
        }
      }
    }
  }
  a {
    display: block;
  }
  span {
    /* box-sizing:border-box; */
  }
  a {
    text-decoration: none;
    padding: 30px 10px 20px 10px;
    .TextWrap {
      /* width: 100%; */
      line-height: 25px;
    }
    .TextHead {
      /* width: 100%; */
    }
    .Ellipsis {
      width: 416px;
      /* width: 100%; */
      height: 46px;
      /* margin-right: 20px; */
      display: block;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      align-content: center;
    }
    span:first-child {
      /* background-color: yellow; */
      /* box-sizing:border-box; */
      width: 300px;
      height: 100%;
    }
    span:last-child {
      /* background-color: #fff;max-width: 100%;
      height: auto; */
      /* width: 492px; */
      width: 100%;
      margin-left: 16px;
      height: 100%;
    }
    .TextWrap > div > .heart {
      position: absolute;
      right: 15px;
      top: 5px;
    }
    hr {
      width: 50px;
      text-align: left;
      color: #eee;
      margin: 0 0 15px 0;
      padding: 0;
    }
    .TextBottom {
      display: flex;
      /* box-sizing:border-box; */
      flex-flow: row nowrap;
      justify-content: space-between;
      height: 93px;
      align-items: flex-end;
      padding: 0 15px;
    }
    /* .sleep{
    padding-right: 10px;
  } */
  }
`;

const LodgingLists = ({
  alt,
  bathRoomNum,
  roomType,
  city,
  borough,
  bedNum,
  bedRoomNum,
  roomImgUrlList,
  cost,
  grade,
  id,
  name,
  peopleLimit,
  isCheck,
  isParking,
  isSmoking,
  commentCount,
}) => {
  const DIRECTIOM_TYPE = {
    next: 'NEXT',
    prev: 'PREV',
  };
  const btnOpcity = useRef();
  console.log(btnOpcity);
  const [imgs, setImages] = useState({
    img: roomImgUrlList,
    current: 3,
    needTransition: true,
    direction: '',
  });
  const slideRef = useRef(null);
  const IMG_LENGTH = imgs.img.length;

  console.log(IMG_LENGTH);
  console.log(imgs.img);

  const handleSliderTranslateEnd = () => {
    console.log('handelend');
    console.log(imgs.direction);
    switch (imgs.direction) {
      case DIRECTIOM_TYPE.next:
        vaildNextSlider();
        break;
      case DIRECTIOM_TYPE.prev:
        vaildPrevSlider();
        break;
      default:
        break;
    }
  };

  const vaildNextSlider = () => {
    const { img, current } = imgs;

    // console.log(img);
    if (current > img.length - 1) {
      setTimeout(() => {
        slideRef.current.style.transition = 'none';
      }, 0);
      setImages((state) => ({
        ...state,
        needTransition: false,
        current: 0,
      }));
    }
    const imgSlide = [...img, ...img.slice(0, 1)].slice(-img.length);

    setImages((state) => ({
      ...state,
      needTransition: false,

      img: imgSlide,
    }));
  };
  const vaildPrevSlider = () => {
    const { img, current } = imgs;
    if (current <= 0) {
      setTimeout(() => {
        slideRef.current.style.transition = 'none';
      }, 0);
      setImages((state) => ({
        ...state,
        needTransition: false,
        current: img.length,
      }));
    }
    const imgSlide = [...img.slice(-1), ...img].slice(0, img.length);
    setImages((state) => ({
      ...state,
      needTransition: false,

      img: imgSlide,
    }));
  };
  console.log(imgs);
  const nextClick = () => {
    let num = imgs.current + 1;
    // if (num > IMG_LENGTH) return;
    setImages((state) => ({
      ...state,
      needTransition: true,
      current: num,
      direction: DIRECTIOM_TYPE.next,
    }));
    console.log('num', num);
  };
  const prevClick = () => {
    let num = imgs.current - 1;
    // if (num < 0) return;
    setImages((state) => ({
      ...state,
      needTransition: true,
      current: num,
      direction: DIRECTIOM_TYPE.prev,
    }));
  };

  const transLateVal = () => {
    return -(imgs.current * 100);
  };

  const sliderStyle = () => {
    if (imgs.needTransition) {
      return {
        transform: `translateX(${transLateVal()}%)`,
        transition: 'transform 0.3s ease-in-out',
      };
    }
    return {
      transform: `translateX(${transLateVal()}%)`,
    };
  };
  return (
    <>
      {/* <ListCarousel slides={SliderData} /> */}
      <Wrap className="listWrap">
        <ULWrap>
          <li>
            <div className="slide-group" carouselImg>
              <div className="slide">
                <div
                  className="slideDiv"
                  style={sliderStyle()}
                  onTransitionEnd={handleSliderTranslateEnd}
                  ref={slideRef}
                >
                  {/* <Imgs carousalImg src={imgs.img[imgs.img.length]} /> */}

                  {roomImgUrlList.map((src, i, arr) => (
                    <>
                      <Imgs
                        carousalImg
                        src={src}

                        // alt={alt}
                      />
                    </>
                  ))}
                  <Imgs carousalImg src={imgs.img[0]} />
                </div>
              </div>
              <div className="btn-group" ref={btnOpcity}>
                <button onClick={prevClick} className="prev">
                  <MdKeyboardArrowLeft />
                </button>
                <button onClick={nextClick} className="next">
                  <MdKeyboardArrowRight />
                </button>
              </div>
            </div>
            <Link to={`/detail/1`} key={id}>
              <span className="TextWrap">
                <div className="TextHead">
                  <TextStyled size="blackSmall">
                    {city} {borough} {city || borough ? '의' : ''} {roomType}
                  </TextStyled>
                  <TextStyled className="Ellipsis" size="blackMiddle">
                    {name}
                  </TextStyled>
                  <Bookmark className="heart" heart>
                    <AiOutlineHeart />
                  </Bookmark>
                </div>
                <hr />
                <TextStyled size="blackSmall">
                  최대 인원 {peopleLimit}명. 침실{bedRoomNum}개. 침대 {bedNum}
                  개. 욕실 {bathRoomNum}개
                </TextStyled>
                <TextStyled size="blackSmall">
                  {isSmoking ? '흡연 가능' : '흡연 불가능'}{' '}
                  {isParking ? '주차 가능' : '주차 불가능'}
                </TextStyled>
                <div className="TextBottom">
                  <ScoreText grade={grade} commentCount={commentCount} />
                  <TextStyled className="sleep" size="blackMiddleBold">
                    <BiWon />
                    {cost}/박
                  </TextStyled>
                </div>
              </span>
            </Link>
          </li>
        </ULWrap>
      </Wrap>
    </>
  );
};

export default LodgingLists;
