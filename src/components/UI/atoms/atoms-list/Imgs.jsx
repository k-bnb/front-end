import styled, { css } from './styled-components';

const ImgStyle = styled.img`
  ${(props) =>
    props.carousalImg &&
    css`
      width: 300px;
      height: 200px;
      border-radius: 8px;
    `}
  ${(props) =>
    props.carousalBihImg &&
    css`
      width: 100%;
      height: 100%;
      border-radius: 8px;
    `}
`;

const Imgs = ({ src, alt, ...rest }) => {
  console.log(src, 44);
  return (
    <div>
      <ImgStyle src={src} {...rest} alt={alt} />
    </div>
  );
};

export default Imgs;
