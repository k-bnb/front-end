import FooterStr from '../../UI/organisms/organisms-list/FooteStr';
import MainStyle from '../../UI/organisms/organisms-main/MainStyle';
import Section3Style from '../../UI/organisms/organisms-main/Section3Style';
import SectionStyle from '../../UI/organisms/organisms-main/SectionStyle';
import SessionStyle from '../../UI/organisms/organisms-main/SessionStyle';
import SloganStyle from '../../UI/organisms/organisms-main/SloganStyle';

const Main = ({ imgs, sectionImg, sloganImg, section3Img }) => {
  return (
    <>
      <MainStyle />
      <SessionStyle imgs={imgs} />
      <SectionStyle sectionImg={sectionImg} />
      <SloganStyle sloganImg={sloganImg} />
      <Section3Style section3Img={section3Img} />
      <FooterStr />
    </>
  );
};

export default Main;
