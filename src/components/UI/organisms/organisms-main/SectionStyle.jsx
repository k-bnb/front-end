import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import ArrowButton from '../../molecules/molecules-main/ArrowButton';
import Locations from '../../molecules/molecules-main/Locations';
const SectionPc = styled.section`
  display: flex;
  padding: 50px 80px;
  flex-flow: column;
  z-index: 0;
  span {
    margin-bottom: 3%;
  }
  div {
    display: flex;
    justify-content: center;
    .locations-img {
      flex-flow: column;
      align-items: flex-start;
      img {
        margin-bottom: 3%;
        margin-right: 5px;
      }
    }
  }
`;
const SectionTablet = styled.section`
  display: flex;
  padding: 50px 80px;
  flex-flow: column;
  position: relative;
  overflow: hidden;
  z-index: -1;
  .leftbtn {
    background-color: #ffffff;
    position: absolute;
    left: 60px;
    top: 50%;
    z-index: 1;
    display: none;
    transform: translateY(50%) rotate(180deg);
    justify-content: center;
    align-items: center;
    svg {
      font-size: 1.2rem;
    }
  }
  span {
    margin-bottom: 3%;
  }

  .img-group {
    display: flex;

    /* justify-content: center; */

    .locations-img {
      flex-flow: column;
      align-items: flex-start;
      justify-content: center;
      margin-right: 10px;
      min-width: 100px;
      img {
        margin-bottom: 3%;
        margin-right: 5px;
      }
      &:last-child {
        display: none;
      }
    }
  }
  button {
    background-color: #ffffff;
    position: absolute;
    right: 80px;
    top: 50%;
    transform: translateY(50%);
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 1.2rem;
    }
  }
`;

const SectionMobile = styled.section`
  display: flex;
  padding: 50px 80px;
  flex-flow: column;
  position: relative;
  overflow: hidden;
  z-index: -1;
  .leftbtn {
    background-color: #ffffff;
    position: absolute;
    left: 60px;
    top: 50%;
    z-index: 1;
    display: none;
    transform: translateY(50%) rotate(180deg);
    justify-content: center;
    align-items: center;
    svg {
      font-size: 1.2rem;
    }
  }

  span {
    margin-bottom: 3%;
  }

  .img-group {
    display: flex;
    .locations-img {
      flex-flow: column;
      align-items: flex-start;
      justify-content: center;
      margin-right: 20px;
      img {
        margin-bottom: 3%;
        margin-right: 5px;
      }
      &:last-child {
        display: none;
      }
    }
  }
  button {
    background-color: #ffffff;
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(50%);
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 1.2rem;
    }
  }
`;
const SectionStyle = ({ sectionImg }) => {
  const isPc = useMediaQuery({
    query: '(min-width: 900px)',
  });
  const isTablet = useMediaQuery({
    query: `(min-width: 800px)and (max-width: 900px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: 800px)`,
  });
  const groupImg = useRef();

  const rightclick = () => {
    const RightBtn = document.querySelector('.rightbtn');
    const LeftBtn = document.querySelector('.leftbtn');

    if (RightBtn.classList.contains('rightbtn')) {
      groupImg.current.lastChild.style.display = 'flex';
      groupImg.current.style.transitionDuration = '1s';
      groupImg.current.style.transform = 'translateX(-260px)';
      RightBtn.style.display = 'none';
      LeftBtn.style.display = 'flex';
    }
  };

  const leftclick = () => {
    const RightBtn = document.querySelector('.rightbtn');
    const LeftBtn = document.querySelector('.leftbtn');

    if (LeftBtn.classList.contains('leftbtn')) {
      LeftBtn.style.display = 'none';
      RightBtn.style.display = 'flex';
      groupImg.current.style.transform = 'translateX(0)';
    }
  };
  return (
    <>
      {isPc && (
        <SectionPc className="section">
          <TextStyle blackBold>어디에서나, 여행은 살아보는 거야!</TextStyle>
          <div className="img-group">
            {sectionImg.map(({ src, alt, name }, i) => {
              return (
                <Locations
                  key={i}
                  src={src}
                  alt={alt}
                  name={name}
                  isRoomType={true}
                  bigImg
                  blackmiddlebold
                  bigimgSize
                />
              );
            })}
          </div>
        </SectionPc>
      )}
      {isTablet && (
        <SectionTablet className="section">
          <ArrowButton className="leftbtn" onClick={leftclick} />
          <TextStyle blackBold>어디에서나, 여행은 살아보는 거야!</TextStyle>
          <div ref={groupImg} className="img-group">
            {sectionImg.map(({ src, alt, name }, i) => {
              return (
                <Locations
                  key={i}
                  src={src}
                  alt={alt}
                  name={name}
                  isRoomType={true}
                  bigImg
                  blackmiddlebold
                  bigimgSize
                />
              );
            })}
          </div>
          <ArrowButton className="rightbtn" onClick={rightclick} />
        </SectionTablet>
      )}
      {isMobile && (
        <SectionMobile className="section">
          <ArrowButton className="leftbtn" onClick={leftclick} />
          <TextStyle blackBold>어디에서나, 여행은 살아보는 거야!</TextStyle>
          <div ref={groupImg} className="img-group">
            {sectionImg.map(({ src, alt, name }, i) => {
              return (
                <Locations
                  key={i}
                  src={src}
                  alt={alt}
                  name={name}
                  isRoomType={true}
                  bigImg
                  blackmiddlebold
                  bigimgSize
                />
              );
            })}
          </div>
          <ArrowButton className="rightbtn" onClick={rightclick} />
        </SectionMobile>
      )}
    </>
  );
};

export default SectionStyle;
