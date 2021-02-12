import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiWon } from 'react-icons/bi';
import Bookmark from '../../atoms/atoms-list/BookMark';
import Border from '../../atoms/atoms-list/Border';
import TextStyled from '../../atoms/atoms-list/Text';
import Imgs from '../../atoms/atoms-list/Imgs';
import ScoreText from './Score-Text';
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
    border-bottom: 1px solid #000;
    align-items: center;

    :nth-child(1) {
      border-top: 2px solid #000;
      /* border-top:2px dashed red; */
    }
    /* .slice {
      background-color: red;
      display: flex;

      overflow: hidden;
      div {
        width: 500%;
        display: flex;
        img {
          width: 100%;
        }
      }
    } */
  }
  span {
    /* box-sizing:border-box; */
  }
  .TextWrap {
    /* width: 100%; */
    padding: 0 10px 20px 10px;
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
  ...rest
}) => {
  return (
    <>
      {/* <ListCarousel slides={SliderData} /> */}
      <Wrap className="listWrap">
        <ULWrap>
          <li>
            <div className="slice" carouselImg>
              {roomImgUrlList.map((src) => (
                <div>
                  <Imgs
                    carousalImg
                    src={src}
                    // alt={alt}
                  />
                </div>
              ))}
            </div>

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
                최대 인원 {peopleLimit}명. 침실{bedRoomNum}개. 침대 {bedNum}개.
                욕실 {bathRoomNum}개
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
          </li>
        </ULWrap>
      </Wrap>
    </>
  );
};

export default LodgingLists;
