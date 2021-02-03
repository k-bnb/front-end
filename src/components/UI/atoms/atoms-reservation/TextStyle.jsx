import { Children } from 'react';
import styled, { css } from 'styled-components';

const StyleSpan = styled.span`
  ${(prop) =>
    prop.whiteMainBold &&
    css`
      color: #fff;
      font-size: 4rem;
      letter-spacing: -0.02em;
      line-height: 70px;
      font-weight: 800;
    `}

  ${(prop) =>
    prop.whiteMiddleSmallBold &&
    css`
      color: #fff;
      font-size: 1rem;
      letter-spacing: -0.02em;
      line-height: 70px;
      font-weight: 800;
    `}
    
	${(prop) =>
    prop.whiteMiddleBold &&
    css`
      color: #fff;
      font-size: 3.2rem;
      letter-spacing: -0.02em;
      line-height: 58px;
      font-weight: 600;
    `}

    ${(prop) =>
    prop.blacktextLine &&
    css`
      color: #222;
      font-size: 1rem;
      letter-spacing: -0.02em;
      text-decoration: underline;
      line-height: 58px;
      font-weight: 600;
    `}
    
  ${(prop) =>
    prop.greentextLine &&
    css`
      color: #008489;
      font-size: 1rem;
      letter-spacing: -0.02em;
      line-height: 58px;
      font-weight: 600;
      &:hover {
        text-decoration: underline;
      }
    `}
    
	${(prop) =>
    prop.blackBold &&
    css`
      color: #222;
      font-size: 1.9rem;
      letter-spacing: 3px;
      line-height: 36px;
      font-weight: 800;
    `}
    
    ${(prop) =>
    prop.whiteBold &&
    css`
      color: #eee;
      font-size: 1.9rem;
      letter-spacing: 3px;
      line-height: 36px;
      font-weight: 800;
    `}
    ${(prop) =>
    prop.blacknormal &&
    css`
      color: #222;
      font-size: 1rem;
      letter-spacing: normal;
      /* line-height: 36px; */
    `}

    ${(prop) =>
    prop.blackmiddlebold &&
    css`
      color: #222;
      font-size: 1rem;
      letter-spacing: normal;
      font-weight: 700;
    `}

		${(props) =>
    props.blackSmallBold &&
    css`
      color: #000;
      font-size: 1.2rem;
      font-weight: 600;
    `} 

		${(props) =>
    props.graySmallNormal &&
    css`
      color: #717171;
      font-size: 1.2rem;
      font-weight: 400;
    `}

    ${(props) =>
    props.blckMiddleTextLine &&
    css`
      font-size: 1.5rem;
      font-weight: 400;
      color: rgb(0, 0, 0);
      text-decoration: underline;
    `}

    ${(props) =>
    props.blackMiddleText &&
    css`
      font-size: 1.5rem;
      font-weight: 400;
      color: rgb(0, 0, 0);
    `}
`;

const TextStyle = ({ children, ...rest }) => {
  return <StyleSpan {...rest}>{children}</StyleSpan>;
};

export default TextStyle;
