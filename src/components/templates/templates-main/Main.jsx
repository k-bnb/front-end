import ArticleStyle from '../UI/organisms/organisms-main/SloganStyle';
// import MainStyle from '../UI/organisms/organisms-main/MainStyle';
import SectionStyle from '../UI/organisms/organisms-main/SectionStyle';
import SessionStyle from '../UI/organisms/organisms-main/SessionStyle';
import SloganStyle from '../UI/organisms/organisms-main/SloganStyle';
import Section3Style from '../UI/organisms/organisms-main/Section3Style';
import MainStyle from '../../UI/organisms/organisms-main/MainStyle';

const Main = ({ imgs, sectionImg, sloganImg, section3Img }) => {
  return (
    <>
      <MainStyle />
      <SessionStyle imgs={imgs} />
      <SectionStyle sectionImg={sectionImg} />
      <SloganStyle sloganImg={sloganImg} />
      <Section3Style section3Img={section3Img} />
    </>
  );
};

export default Main;
