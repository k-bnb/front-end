import styled, { css } from 'styled-components';

const activeStyles = css`
  ${(props) =>
    props.active === 'active' &&
    css`
      width: 100%;
      height: auto;
    `}
  ${(props) =>
    props.active === 'unactive' &&
    css`
      width: 840px;
      height: auto;
    `}
`;

const sizeStyles = css`
  ${(props) =>
    props.size === 'carouselImg' &&
    css`
      width: 300px;
      height: 200px;
      overflow:hidden;
    `}
  ${(props) =>
    props.size === 'bigCarouselImg' &&
    css`
      width:670px;
      max-width: 100%;
      max-height: 452px;
      margin-bottom: 10px;
      overflow:hidden;
    `}
  /* ${(props) =>
    props.size === 'bookmarkImg' &&
    css`
      width: 48px;
      height: 48px;
    `} */
  /* ${(props) =>
    props.size === 'bigBorder' &&
    css`
      max-width: 100%;
      height: auto;
      padding: 20px 0;
      margin: 0 20px;
      margin-bottom: 10px;
      overflow:hidden;
    `} */
`;

const BorderStyle = styled.div`
  /* 공통 스타일 */
  border-radius: 10px;
  box-sizing: border-box;

  /* 정적,동적 */
  ${activeStyles}

  /* 크기 */
  ${sizeStyles}
`;

const Border = ({ children, active, size, ...rest }) => {
  return (
    <BorderStyle active={active} size={size} {...rest}>
      {children}
    </BorderStyle>
  );
};

export default Border;
