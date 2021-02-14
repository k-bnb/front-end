import React from 'react';
import { Link } from 'react-router-dom';
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
    props.size === 'Pcheart' &&
    css`
			width:28px;
			height:28px;
			border-radius : 50%;
      color:#000;
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
    props.size === 'Mobileheart' &&
    css`
			width:28px;
			height:28px;
			border-radius : 50%;
			padding: 0;
			margin:0;
    `}
    
    ${(props) =>
    props.number &&
    css`
      width : 20px;
      height: 20px;
      padding : 0;
      &:hover{
        background:#f7f7f7;
        color:red;
        border-color:#222;
      }
      &:focus{
        background:#222;
        color:blue;
      }
    `}
`;

const buttonStyle = css`
  border: 1px solid #b0b0b0;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
`

const StyledButton = styled.button`
  /* 공통 스타일 */
  ${buttonStyle}

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
    margin-left: 14px;
  }
  &:disabled{
    cursor:not-allowed;
    color : purple;
    background : green;
  }
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = (size, ...props) => {
  return props.to ? (<StyledLink {...props} />) : (<StyledButton size={size} number={props.number ? 1 : 0} {...props} />); //velopert-p793
};

Button.defaultProps = {
  color: 'yellow',
  size: 'medium',
};

export default Button;
