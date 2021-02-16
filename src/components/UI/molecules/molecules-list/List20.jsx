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
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    /* width: 100%; */
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
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      /* border-top:2px dashed red; */
    }
    .slide-group {
      /* display: flex; */
      /* position: relative; */
      width: 260px;
      /* border: 1px solid red; */
      /* overflow: hidden; */
      position: relative;

      .slide {
        /* flex-shrink: 0; */
        /* display: flex; */
        width: 100%;
        .slideDiv {
          /* display: flex; */
          /* flex-direction: column; */
          .slick-slider {
            /* display: inline-block; */
            .slick-arrow {
              /* bottom: 50%;
              transform: translateY(50%); */
              z-index: 1;
            }
            .slick-prev {
              position: absolute;
              left: 0;
              width: 30px;
              height: 30px;
              border-radius: 50%;
            }
            .slick-next {
              position: absolute;
              right: 0;
              width: 30px;
              height: 30px;
              border-radius: 50%;
            }
            .slick-dots {
              li {
                border: 0;
                display: inline !important;

                justify-content: flex-end;

                &:nth-child(1) {
                  position: absolute;
                  bottom: -210px;

                  left: 100px;
                }
                &:nth-child(2) {
                  position: absolute;
                  bottom: -210px;

                  left: 110px;
                }
                &:nth-child(3) {
                  position: absolute;
                  bottom: -210px;

                  left: 120px;
                }
                &:nth-child(4) {
                  position: absolute;
                  bottom: -210px;

                  left: 130px;
                }
                &:nth-child(5) {
                  position: absolute;
                  bottom: -210px;

                  left: 140px;
                }
              }
            }

            .slick-list {
              display: flex;
              flex-direction: column;

              .slick-track {
                display: flex;

                .slick-slide {
                  display: flex;

                  div {
                    display: flex;

                    img {
                    }
                  }
                }
              }
            }
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* <ListCarousel slides={SliderData} /> */}
      <Wrap className="listWrap">
        <ULWrap>
          <li>
            <div className="slide-group" carouselImg>
              <div className="slide">
                <div className="slideDiv">
                  <Slider {...settings}>
                    {roomImgUrlList.map((src, i, arr) => (
                      <>
                        <Imgs
                          carousalImg
                          src={src}

                          // alt={alt}
                        />
                      </>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <Link to={`/detail/${id}`} key={id}>
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
