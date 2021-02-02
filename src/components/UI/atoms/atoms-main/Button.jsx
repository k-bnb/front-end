import { useRef } from 'react';
import styled, { css } from 'styled-components';

const ButtonStyle = styled.button`
  border: 1px solid #ddd;
  cursor: pointer;
  outline: none;
  background: none;
  ${(props) =>
    props.submitBtn &&
    css`
      padding: 10px 0;
      height: 40px;
      background-color: rgb(255, 90, 95);
      border-radius: 5px;
      color: #eee;
    `}

  ${(props) =>
    props.circlehover &&
    css`
      /* width: 50px; */
      width: 30px;
      height: 30px;
      border-radius: 50%;
      &:hover {
        background-color: rgba(235, 231, 231, 0.9);
      }
    `}
	${(props) =>
    props.circle &&
    css`
      /* width: 50px; */
      width: 30px;
      height: 30px;
      border-radius: 50%;
    `}
	${(props) =>
    props.large &&
    css`
      border-radius: 50px;
      max-width: 500px;
      width: 80vw;
    `}

	${(props) =>
    props.small &&
    css`
      width: 70px;
    `}

	${(props) =>
    props.normal &&
    css`
      background-color: white;
      &:hover {
        background-color: rgba(235, 231, 231);
      }
    `} 
	padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const Button = ({ children, ...rest }) => {
  return <ButtonStyle {...rest}>{children}</ButtonStyle>;
};

export default Button;
