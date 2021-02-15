import styled, { css } from 'styled-components';

const ImgStyle = styled.img`
  /* object-fit:cover; */
  ${(props) =>
    props.size === 'carousalImg' &&
    css`
      width: 300px;
      height: 200px;
      border-radius: 8px;
    `}
  ${(props) =>
    props.size === 'carousalBigImg' &&
    css`
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      object-fit:cover;
    `}
`;

const Imgs = ({ src, alt, size, ...rest }) => {
  return (
    <div>
      <ImgStyle src={src} size={size} {...rest} alt={alt} />
    </div>
  );
};

export default Imgs;
