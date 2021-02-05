import styled, { css } from 'styled-components';

const activeStyles = css`
  ${(props)=>
    props.active === 'active' &&
    css`
      width: 100%;
      height: auto;
    `
  }
  ${(props)=>
    props.active === 'unactive' &&
    css`
      width: 840px;
      height: auto;
    `
  }
`

const BorderStyle = styled.div`
  /* 공통 스타일 */
  border-radius: 10px;
  /* border: 5px dashed red; */
  box-sizing: border-box;

  /* 정적,동적 */
  ${activeStyles}

  /* 크기 */
  ${(props) =>
    props.carouselImg &&
    css`
      width: 300px;
      height: 200px;
    `}
  ${(props) =>
    props.bigCarouselImg &&
    css`
      max-width: 100%;
      height : auto;
      padding: 20px 0;
      margin : 0 20px;
    `}
  ${(props) =>
    props.bookmarkImg &&
    css`
      width: 48px;
      height: 48px;
    `}
  ${(props) =>
    props.bigBorder &&
    css`
      max-width: 100%;
      height : auto;
      padding: 20px 0;
      margin : 0 20px;
    `}
`;

const Border = ({ children, active, ...rest }) => {
  console.log(rest, 111);
  return <BorderStyle active={active} {...rest}>{children}</BorderStyle>;
};

export default Border;
