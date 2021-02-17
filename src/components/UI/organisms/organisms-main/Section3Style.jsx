import { useMediaQuery } from 'react-responsive';
import styled, { createGlobalStyle } from 'styled-components';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import Locations from '../../molecules/molecules-main/Locations';

const SectionPc = styled.section`
  display: flex;
  padding: 50px 80px;
  flex-flow: column;
  span {
    margin-bottom: 3%;
  }
  div {
    display: flex;
    justify-content: center;
    .locations-img {
      flex-flow: column;
      /* align-items: flex-start; */
      img {
        margin-bottom: 3%;
        margin-right: 5%;
      }
    }
  }
`;

const SectionTablet = styled.section`
  display: flex;
  padding: 50px 80px;
  flex-flow: column;
  span {
    margin-bottom: 3%;
  }
  div {
    display: flex;
    justify-content: center;
    margin-right: 5px;
    .locations-img {
      flex-flow: column;

      /* align-items: flex-start; */
      img {
        margin-bottom: 3%;
        margin-right: 5%;
      }
    }
  }
`;

const SectionMobile = styled.section`
  display: flex;
  padding: 50px 80px;
  flex-flow: column;
  span {
    margin-bottom: 3%;
    font-size: 1.3rem;
  }
  div {
    display: flex;
    /* justify-content: center; */
    margin-right: 5px;
    .locations-img {
      flex-flow: column;
      /* align-items: flex-start; */

      img {
        margin-bottom: 3%;
        margin-right: 5%;
      }
    }
  }
`;

const Section3Style = ({ section3Img }) => {
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
        <SectionPc className="section">
          <TextStyle blackBold>
            수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.
          </TextStyle>
          <div className="img-group">
            {section3Img.map(({ src, alt, name }, i) => {
              return (
                <Locations
                  key={i}
                  src={src}
                  alt={alt}
                  name={name}
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
          <TextStyle blackBold>
            수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.
          </TextStyle>
          <div className="img-group">
            {section3Img.map(({ src, alt, name }, i) => {
              return (
                <Locations
                  key={i}
                  src={src}
                  alt={alt}
                  name={name}
                  bigImg
                  blackmiddlebold
                  bigimgSize
                />
              );
            })}
          </div>
        </SectionTablet>
      )}
      {isMobile && (
        <SectionMobile className="section">
          <TextStyle blackBold>
            수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.
          </TextStyle>
          <div className="img-group">
            {section3Img.map(({ src, alt, name }, i) => {
              return (
                <Locations
                  key={i}
                  src={src}
                  alt={alt}
                  name={name}
                  bigImg
                  blackmiddlebold
                  bigimgSize
                />
              );
            })}
          </div>
        </SectionMobile>
      )}
    </>
  );
};

export default Section3Style;
