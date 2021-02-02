import Button from '../../UI/atoms/atoms-main/Button';
import CircleDiv from '../../UI/atoms/atoms-main/DivStyle';
import TextStyle from '../../UI/atoms/atoms-main/TextStyle';
import Carousel from '../../UI/molecules/molecules-main/Carousel';
import CircleProfile from '../../UI/molecules/molecules-main/CircleProfile';
const carouselImg = [
  { src: './imgs/house.jpg', alt: '집 전체', name: '집 전체' },
  { src: './imgs/human.jpg', alt: '온수 욕조', name: '온수 욕조' },
  { src: './imgs/nanlo.jpg', alt: '캠핑 및 글램핑', name: '캠핑 및 글램핑' },
  { src: './imgs/tent.jpg', alt: '독특한 공간', name: '독특한 공간' },
];
const CarouselPage = () => {
  return (
    <>
      <Carousel carouselImg={carouselImg} />
      <Button large>hello</Button>
      <Button small>hello</Button>
      <Button normal>hello</Button>
      <CircleDiv large>hello</CircleDiv>
      <TextStyle blackBold>hello</TextStyle>
      <CircleProfile />
    </>
  );
};

export default CarouselPage;
