import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import LodgingLists from '../../molecules/molecules-list/List20';
import PageNation from '../../molecules/molecules-list/PageNation';
import { Link } from 'react-router-dom';
import Imgs from '../../atoms/atoms-list/Imgs';
import Border from '../../atoms/atoms-list/Border';
import TextStyled from '../../atoms/atoms-list/Text';
import Bookmark from '../../atoms/atoms-list/BookMark';
import ScoreText from '../../molecules/molecules-list/Score-Text';
import { BsHeartFill } from 'react-icons/bs';
import { BiWon } from 'react-icons/bi';

const PcSize = styled.main`
  min-height: calc(100vh - 80px);
`;

const TabletSize = styled.main`
  width : 100vw;
  min-height : calc(100vh - 80px);
`;
const MobileSize = styled.main`
  width :100vw;
  min-height : calc(100vh - 0px);
  /* background-color : purple; */
  padding : 0 30px;
  ul{
    list-style:none;
    padding : 0;
    margin :0;
  }
  li{
    height : 608px;
    position : relative;
    min-height : 400px;
    padding: 8px 0 12px 0;
    box-sizing : border-box;
    display : inline-block;
    flex-flow : row no-wrap;
    justify-content : space-between;
    align-items : center;
    /* border : 1px solid blue; */
  }
  .TextWrap {
    padding : 0 10px 10px;
    line-height : 25px;
  }
  span:first-child {
    width: 678px;
    height: 452px;
  }
  span:last-child {
    width:100%;
    display : flex;
    flex-flow : column nowrap;
  }
  .heart{
    position: absolute;
    right: 45px;
    top: 35px;
    font-size:25px;
  }
  .heartimg{
    fill: rgba(0, 0, 0, 0.5);
    stroke: white;
    stroke-width: 1;
    overflow: visible;
  }
  .cost{
    display : flex;
    flex-flow : row nowrap;
  }
  
`;

const ListStyle = ({room, totalPage, pageNationClick}) => {
  const isPc = useMediaQuery({
    query: '(min-width: 1127px)', //1025 px 이상인 경우에만 적용(1127이상.)
  });
  const isTablet = useMediaQuery({
    query: `(min-width: 744px)and (max-width: 1126px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: 743px)`, //744px 이하인 경우에만 적용(744이하.)
  });
  console.log(room);
  return (
    <>
      {isPc && (
        <PcSize className="Listmain">
          {room.map(({bathRoomNum, roomType, city, borough  ,bedNum,bedRoomNum ,cost, grade, id, name ,peopleLimit, isCheck, isParking, isSmoking, commentCount,roomImgUrlList}) => {
          return (
            <Link to={`/detail/${id}`} key={id} style={{textDecoration:'none'}}>
              <LodgingLists bathRoomNum={bathRoomNum} city={city} borough={borough} isCheck={isCheck} isParking={isParking} isSmoking={isSmoking} commentCount={commentCount} bedNum={bedNum} roomImgUrlList={roomImgUrlList} roomType={roomType} peopleLimit={peopleLimit} bedRoomNum={bedRoomNum} cost={cost} grade={grade} id={id} name={name} />
            </Link>
          )})}
          <PageNation totalPage={totalPage} pageNationClick={pageNationClick}/>
        </PcSize>
      )}
      {isTablet && (
        <TabletSize className="Listmain">
          {room.map(({bathRoomNum, roomType, city, borough ,bedNum,bedRoomNum ,cost, grade, id, name ,peopleLimit, isCheck, isParking, isSmoking, commentCount,roomImgUrlList}) => {
          return (
            <Link to={`/detail/${id}`} key={id} style={{textDecoration:'none'}}>
            <LodgingLists bathRoomNum={bathRoomNum}  city={city} borough={borough}  isCheck={isCheck} isParking={isParking} isSmoking={isSmoking} commentCount={commentCount} bedNum={bedNum} roomImgUrlList={roomImgUrlList} roomType={roomType} peopleLimit={peopleLimit} bedRoomNum={bedRoomNum} cost={cost} grade={grade} id={id} name={name} />
            </Link>
          )})}
          <PageNation totalPage={totalPage} pageNationClick={pageNationClick} />
        </TabletSize>
      )}
      {isMobile && (
        <MobileSize className="Listmain">
          {room.map(({bathRoomNum, roomType, city, borough ,bedNum,bedRoomNum ,cost, grade, id, name ,peopleLimit, isCheck, isParking, isSmoking, commentCount,roomImgUrlList}) => {
          return (
            <Link to={`/detail/${id}`} key={id} style={{textDecoration:'none'}}>   
              <li>
                <span>
                  <Border size='bigCarouselImg'>
                    {roomImgUrlList.map(src => (
                      <Imgs size ='carousalBigImg' src={src} />
                    ))}
                  </Border>
                </span>
                <span className="TextWrap">
                  <div className="TextHead">
                    <ScoreText 
                      grade={grade} 
                      commentCount={commentCount}/>
                    <TextStyled size="blackSmall">{city} {borough} {city || borough ? '의' : ''} {roomType}</TextStyled>
                    <TextStyled type="Ellipsis" size="blackMiddle">
                    {name} 
                    </TextStyled>
                    <Link to= '/'>
                      <Bookmark Mobileheart className="heart">
                        <BsHeartFill className="heartimg"/>
                      </Bookmark>
                    </Link>
                  </div>
                  <TextStyled className="cost" size="blackMiddleBold">
                    <BiWon />
                    {cost}/<TextStyled size="blackMiddle">박</TextStyled>
                  </TextStyled>                  
                </span>
              </li>
            </Link>
          )})}
          <PageNation totalPage={totalPage} pageNationClick={pageNationClick} style={{borderTop:'0'}}/>
        </MobileSize>
      )}
    </>
  );
};
export default ListStyle;
