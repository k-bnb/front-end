import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
// import TextStyle from '../../atoms/atoms-main/TextStyle';
import Locations from '../../molecules/molecules-main/Locations';

const SectionPc = styled.section`
  display: grid;
  padding: 50px 80px;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 13px;

  align-items: center;
  .locations-img {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;

    img {
      margin-right: 10px;
    }
  }
`;

const SectionTablet = styled.section`
  display: grid;
  padding: 50px 80px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px 13px;

  align-items: center;

  .locations-img:last-child {
    display: none;
  }

  .locations-img:first-child {
    display: none;
  }

  .locations-img {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;

    img {
      margin-right: 10px;
    }
  }
`;

const SectionMobile = styled.section`
  display: grid;
  padding: 0px 80px 10px 30px;
  grid-template-columns: repeat(4, 500px);
  gap: 0px 13px;

  align-items: center;
  overflow: hidden;
  .locations-img {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;

    img {
      margin-right: 10px;
    }
  }
`;
/* width: 100%; */

const SessionStyle = ({ imgs }) => {
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
        <SectionPc>
          {imgs.map(({ src, alt, name }, i) => {
            return (
              <Locations
                src={src}
                key={i}
                alt={alt}
                name={name}
                smallImg
                blackmiddlebold
                imgSize
              />
            );
          })}
        </SectionPc>
      )}
      {isTablet && (
        <SectionTablet>
          {imgs.map(({ src, alt, name }, i) => {
            return (
              <Locations
                src={src}
                key={i}
                alt={alt}
                name={name}
                smallImg
                blackmiddlebold
                imgSize
              />
            );
          })}
        </SectionTablet>
      )}
      {isMobile && (
        <SectionMobile>
          {imgs.map(({ src, alt, name }, i) => {
            return (
              <Locations
                src={src}
                key={i}
                alt={alt}
                name={name}
                smallImg
                blackmiddlebold
                imgSize
              />
            );
          })}
        </SectionMobile>
      )}
    </>
  );
};

export default SessionStyle;
