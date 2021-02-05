import styled, { css } from 'styled-components';

const ImgStyle = styled.img`
  /* object-fit:cover; */
  ${(props) =>
    props.carousalImg &&
    css`
      width: 300px;
      height: 200px;
      border-radius: 8px;
    `}
  ${(props) =>
    props.carousalBigImg &&
    css`
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      /* margin: 20px; */
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
