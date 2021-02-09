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
  /* max-width: 100%; */
  width:100%;
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
    width:100%;
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

const LodgingLists = ({alt, ...rest}) => {
  return (
    <>
      {/* <ListCarousel slides={SliderData} /> */}
      <Wrap className="listWrap">
        <ULWrap>
          <li>
            <span>
              <Border carouselImg>
                <Imgs
                  carousalImg
                  src="https://a0.muscache.com/im/pictures/02a7fd89-b923-4541-aff6-a6eeff4d4445.jpg?im_w=1200"
                  // alt={alt}
                  {...rest}
                />
                {/*<Imgs
                  carousalImg
                  src="https://a0.muscache.com/im/pictures/02a7fd89-b923-4541-aff6-a6eeff4d4445.jpg?im_w=1200"
                  alt={alt}
                  {...rest}
                /> */}
              </Border>
            </span>
            <span className="TextWrap">
              <div className="TextHead">
                <TextStyled size="blackSmall">jinjin의 아파트 전체</TextStyled>
                <TextStyled className="Ellipsis" size="blackMiddle">
                  동서남북역 도보1분/아파트전체/호텔급 풀옵션/반려동물 불가/금연
                  존/고성방가금지/시티뷰 
                </TextStyled>
                <Bookmark className="heart" heart>
                  <AiOutlineHeart />
                </Bookmark>
              </div>
              <hr />
              <TextStyled size="blackSmall">
                최대 인원 4명. 침실2개. 침대 4개. 욕실 1개
              </TextStyled>
              <TextStyled size="blackSmall">주차. 난방. 무선인터넷</TextStyled>
              <div className="TextBottom">
                <ScoreText />
                <TextStyled className="sleep" size="blackMiddleBold">
                  <BiWon />
                  325,900/박 
                  
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
