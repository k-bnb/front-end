import CircleDiv from '../../atoms/atoms-main/DivStyle';
import Img from '../../atoms/atoms-main/Img';
import TextStyle from '../../atoms/atoms-main/TextStyle';

const Locations = ({ src, alt, name, subtitle, ...rest }) => {
  return (
    <>
      <div className="locations-img">
        <CircleDiv {...rest}>
          <Img src={src} alt={alt} {...rest} />
        </CircleDiv>
        <TextStyle {...rest}>{name}</TextStyle>
        {subtitle && <TextStyle>{subtitle}</TextStyle>}
      </div>
    </>
  );
};

export default Locations;
