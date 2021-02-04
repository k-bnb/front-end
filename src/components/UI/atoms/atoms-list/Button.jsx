import styled, { css } from 'styled-components';

const sizeStyles = css`
  ${(props) =>
    props.size === 'large' &&
    css`
      height: 30px;
      font-size: 20px;
      padding: 8px 16px;

    `}

  ${(props) =>
    props.size === 'normal' &&
    css`
      height: 14px;
      font-size: 16px;
      padding: 8px 16px;

    `}
	
	${(props) =>
    props.size === 'small' &&
    css`
      height: 10px;
      font-size: 14px;
      padding: 8px 16px;

    `}
	${(props) =>
    props.size === 'heart' &&
    css`
			width:48px;
			height:48px;
			border-radius : 50%;
			font-size:1.5rem;
			padding: 0;
			margin:0;
			background-color:none;
      &:hover{
        background:#f7f7f7;
        border-color:#222;
      }
      &:active{
        background: #f7f7f7;
        border-color:#222;
        transform: scale(0.92);
      }
    `}
    
    ${(props) =>
    props.size === 'number' &&
    css`
      width : 20px;
      height: 20px;
      &:hover{
        background:#f7f7f7;
        border-color:#222;
      }
      &:focus{
        background:#222;
        color:white;
      }
    `}
		
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  /* display : inline-flex; */
  border: 1px solid #b0b0b0;
  border-radius: 30px;
  cursor: pointer;
  outline: none;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
	background: #fff;
  &:hover {
    background: #fff;
    border-color: #222;
  }
  &:active {
    background: pink;
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

const Button = ({ children, size, ...rest }) => {
  return (
    <StyledButton size={size} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: 'yellow',
  size: 'medium',
};

export default Button;
