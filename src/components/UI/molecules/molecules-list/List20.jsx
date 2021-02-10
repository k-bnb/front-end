import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiWon } from 'react-icons/bi';
import Bookmark from '../../atoms/atoms-list/BookMark';
import Border from '../../atoms/atoms-list/Border';
import TextStyled from '../../atoms/atoms-list/Text';
import Imgs from '../../atoms/atoms-list/Imgs';
import ScoreText from './Score-Text';
import { Link } from 'react-router-dom';
// import ListCarousel from './ListCarousel';
// import { SliderData } from './SliderData';

// const Wrap = styled.ul`

// `

const List = styled.li`
  position: relative;
  width: 100%;
  height: 266px;
  padding: 0 8px;
  box-sizing: border-box;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
  border-top: 1px solid rgba(170,170,170,0.5);
  /* border-bottom: -1px;
  border-left : none;
  border-right : none; */
  align-items: center;

  .TextWrap {
    padding: 0 10px 20px 10px;
    line-height: 25px;
    
  }
  .Ellipsis {
    width: 416px;
    height: 46px;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    align-content: center;
  }
  span:first-child {
    width: 300px;
    height: 200px;
  }
  span:last-child {
    width:100%;
    margin-left: 16px;
    height : 200px;
    display : flex;
    flex-flow : column nowrap;
  }
  .TextWrap > div > a> .heart {
    position: absolute;
    right: 5px;
    top: 15px;
  }
  hr {
    width: 50px;
    text-align: left;
    color: #eee;
    margin: 0 0 15px 0;
    padding: 0;
  }
  .TextBottom {
    margin-top:30px;
    display:flex;
    justify-content: space-between;
  }

`;

const LodgingLists = ({alt,bathRoomNum,roomType, city, borough ,bedNum,bedRoomNum, roomImgUrlList ,cost, grade, id, name,peopleLimit,isCheck, isParking, isSmoking, commentCount ,...rest}) => {
  console.log(bathRoomNum, bedNum,bedRoomNum ,cost, grade, id, name, roomImgUrlList);
  return (
    <>      
      <List>
        <span>
          <Border carouselImg>
            {roomImgUrlList.map(src => (
              <Imgs carousalImg src={src} />
            ))}
          </Border>
        </span>
        <span className="TextWrap">
          <div className="TextHead">
            <TextStyled size="blackSmall">{city} {borough} {city || borough ? '의' : ''} {roomType}</TextStyled>
            <TextStyled className="Ellipsis" size="blackMiddle">
            {name} 
            </TextStyled>
            <Link to= '/'>
              <Bookmark className="heart" heart>
                <AiOutlineHeart />
              </Bookmark>
            </Link>
          </div>
          <hr />
          <TextStyled size="blackSmall">
            최대 인원 {peopleLimit}명. 침실{bedRoomNum}개. 침대 {bedNum}개. 욕실 {bathRoomNum}개
          </TextStyled>
          <TextStyled size="blackSmall">{isSmoking ? '흡연 가능' : '흡연 불가능'} {' '}
          {isParking ? '주차 가능' : '주차 불가능'}
          </TextStyled>
          <div className="TextBottom">
            <ScoreText 
            grade={grade} 
            commentCount={commentCount}/>
            <TextStyled className="cost" size="blackMiddleBold">
              <BiWon />
              {cost}/박
            </TextStyled>
          </div>
        </span>
      </List>
    </>
  );
};

export default LodgingLists;
