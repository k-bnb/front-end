import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiWon } from 'react-icons/bi';
import Imgs from '../../atoms/atoms-list/Imgs';
import Bookmark from '../../atoms/atoms-list/BookMark';
import Border from '../../atoms/atoms-list/Border';
import Score from '../../atoms/atoms-list/Score';
import TextStyled from '../../atoms/atoms-list/Text';

const Wrap = styled.div`
  width: 840px;
  min-height: 5013px;
  padding: 0 24px;
  box-sizing: border-box;
  
`;

const ULWrap = styled.ul`
  list-style: none;
  display: inline-block;
  padding: 0;
  width: 808x;
  height: 5013px;

  li {
    width: 792px;
    height: 266px;
    padding: 24px 8px;
    box-sizing: border-box;
    display: flex;
    flex-flow: row no-wrap;
    justify-content: space-between;
    border-bottom: 1px solid #000;
    align-items: center;
    :nth-child(1) {
      /* background : #ccc; */
      border-top: 2px solid #000;
      /* border-bottom: none; */
    }
  }
  span {
    /* box-sizing:border-box; */
  }
  .TextWrap {
    padding: 0 10px 20px 10px;
    line-height: 25px;
  }
  .TextHead {
    position: relative;
  }
  .Ellipsis {
    width: 416px;
    height: 46px;
    margin-right: 16px;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    align-content: center;
  }
  span:first-child {
    background-color: yellow;
    /* box-sizing:border-box; */
    width: 300px;
    height: 200px;
  }
  span:last-child {
    background-color: #fff;
    width: 492px;
    margin-left: 16px;
    height: 100%;
  }
  .TextWrap > div > .heart {
    position: absolute;
    right: -15px;
    top: -10px;
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

const LodgingLists = ({ alt, ...rest }) => {
  return (
    <Wrap className="listWrap">
      <ULWrap>
        <li>
          <span>
            <Border carouselImg>
              <Imgs
                carousalImg
                src="https://a0.muscache.com/im/pictures/02a7fd89-b923-4541-aff6-a6eeff4d4445.jpg?im_w=1200"
                alt={alt}
                {...rest}
              />
            </Border>
          </span>
          <span className="TextWrap">
            <div className="TextHead">
              <TextStyled size="blackSmall">jinjin의 아파트 전체</TextStyled>
              <TextStyled className="Ellipsis" size="blackMiddle">
                동서남북역 도보1분/아파트전체/호텔급 풀옵션/반려동물 불가/금연
                존
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
              <Score className="Score">3.45(462)</Score>
              <TextStyled className="sleep" size="blackMiddleBold">
                <BiWon />
                325,900/박
              </TextStyled>
            </div>
          </span>
        </li>
      </ULWrap>
    </Wrap>
  );
};

export default LodgingLists;
