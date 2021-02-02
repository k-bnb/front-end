import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import Locations from '../../molecules/molecules-main/Locations';

const SloganPc = styled.div`
  display: flex;
  padding: 50px 80px;
  background-color: #000;
  flex-flow: column;

  color: #ffffff;

  span {
    /* margin-left: 10px; */
    line-height: 1.4;
  }
  div {
    display: flex;
    font-size: 0.9rem;
    justify-content: center;
    .locations-img {
      flex-flow: column;
      align-items: flex-start;
      /* margin-right: 1%; */
      img {
        margin-top: 5%;
        margin-bottom: 6px;
      }
    }
  }
`;

const SloganTablet = styled.div`
  display: flex;
  padding: 50px 80px;
  background-color: #000;
  flex-flow: column;

  color: #ffffff;

  span {
    /* margin-left: 10px; */
    line-height: 1.4;
    /* font-size: 1rem; */
  }
  div {
    span {
      /* margin-left: 10px; */
      /* line-height: 1.6; */
    }
    span {
      font-size: 0.7rem;
    }
    display: flex;
    font-size: 0.9rem;
    justify-content: center;
    .locations-img {
      flex-flow: column;
      align-items: flex-start;
      /* margin-right: 1%; */
      img {
        margin-top: 5%;
        margin-bottom: 6px;
      }
    }
  }
`;

const SloganMobile = styled.div`
  display: flex;
  padding: 50px 80px;
  background-color: #000;
  flex-flow: column;

  color: #ffffff;

  span {
    /* margin-left: 10px; */
    line-height: 1.4;
  }
  div {
    display: flex;
    font-size: 0.9rem;
    /* justify-content: center; */
    span {
      font-size: 0.7rem;
    }
    .locations-img {
      flex-flow: column;
      align-items: flex-start;
      /* margin-right: 1%; */
      img {
        margin-top: 5%;
        margin-bottom: 6px;
      }
    }
  }
`;

const SloganStyle = ({ sloganImg }) => {
  const isPc = useMediaQuery({
    query: '(min-width: 900px)',
  });
  const isTablet = useMediaQuery({
    query: `(min-width: 800px)and (max-width: 900px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: 800px)`,
  });

  return (
    <>
      {isPc && (
        <SloganPc>
          <TextStyle whiteBold>세상을 만나는 특별한 방법</TextStyle>
          <TextStyle whiteMiddleSmallBold>
            현지 전문가와 함께하는 독특한 액티비티를 직접 체험하거나 온라인으로
            만나보세요.
          </TextStyle>
          <div>
            {sloganImg.map(({ src, alt, name, subtitle }) => {
              return (
                <Locations
                  src={src}
                  alt={alt}
                  name={name}
                  bigImg
                  whiteMiddleSmallBold
                  imgSize
                  subtitle={subtitle}
                />
              );
            })}
          </div>
        </SloganPc>
      )}
      {isTablet && (
        <SloganTablet>
          <TextStyle whiteBold>세상을 만나는 특별한 방법</TextStyle>
          <TextStyle whiteMiddleSmallBold>
            현지 전문가와 함께하는 독특한 액티비티를 직접 체험하거나 온라인으로
            만나보세요.
          </TextStyle>
          <div>
            {sloganImg.map(({ src, alt, name, subtitle }) => {
              return (
                <Locations
                  src={src}
                  alt={alt}
                  name={name}
                  bigImg
                  whiteMiddleSmallBold
                  imgSize
                  subtitle={subtitle}
                />
              );
            })}
          </div>
        </SloganTablet>
      )}
      {isMobile && (
        <SloganMobile>
          <TextStyle whiteBold>세상을 만나는 특별한 방법</TextStyle>
          <TextStyle whiteMiddleSmallBold>
            현지 전문가와 함께하는 독특한 액티비티를 직접 체험하거나 온라인으로
            만나보세요.
          </TextStyle>
          <div>
            {sloganImg.map(({ src, alt, name, subtitle }) => {
              return (
                <Locations
                  src={src}
                  alt={alt}
                  name={name}
                  bigImg
                  whiteMiddleSmallBold
                  imgSize
                  subtitle={subtitle}
                />
              );
            })}
          </div>
        </SloganMobile>
      )}
    </>
  );
};

export default SloganStyle;
