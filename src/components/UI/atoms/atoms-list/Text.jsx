import styled, { css } from 'styled-components';

const SpanSt = styled.div`
  padding: 0;
  margin: 0;
  ${(props) =>
    props.size === 'blackSmall' &&
    css`
      color: #222;
      font-size: 14px;
      
      /* letter-spacing : 3px;
			line-height : 36px; */
    `}
  ${(props) =>
    props.size === 'blackSmallBold' &&
    css`
      color: #222;
      font-size: 14px;
      /* letter-spacing : 3px;
			line-height : 36px; */
      font-weight: 800;
    `}
	${(props) =>
    props.size === 'blackMiddle' &&
    css`
      color: #222;
      font-size: 18px;
      font-weight: 400;
      /* letter-spacing : 3px;
			line-height : 36px; */
    `}
	${(props) =>
    props.size === 'blackMiddleBold' &&
    css`
      color: #222;
      font-size: 18px;
      /* letter-spacing : 3px;
			line-height : 36px; */
      font-weight: 800;
    `}
	${(props) =>
    props.size === 'blackLarge' &&
    css`
      color: #222;
      font-size: 20px;
      /* letter-spacing : 3px;
			line-height : 36px; */
    `}
	${(props) =>
    props.size === 'blackLargeBold' &&
    css`
      color: #222;
      font-size: 30px;
      /* letter-spacing : 3px;
			line-height : 36px; */
      font-weight: 800;
    `}
  ${(props)=>
    props.type === 'Ellipsis' && 
    css`
      width: 416px;
      /* height: 46px; */
      display: block;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      align-content: center;
    `
  }
`;

const TextStyled = ({ children,type, size, ...rest }) => {
  return (
    <SpanSt type={type} size={size} {...rest}>
      {children}
    </SpanSt>
  );
};

export default TextStyled;
