import { useRef } from 'react';
import styled, { css } from 'styled-components';

const ButtonStyle = styled.button`
  border: 1px solid #ddd;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: none;

  ${(props) =>
    props.disabled &&
    css`
      background-color: gray;
      cursor: default;
    `}
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
    ${(props) =>
    props.greenText &&
    css`
      color: #008489;
      font-size: 1.6rem;
      /* letter-spacing: -0.02em; */
      /* line-height: 58px; */
      font-weight: 600;
      /* border: 0; */
      &:hover {
        text-decoration: underline;
      }
    `}

  	${(props) =>
    props.save &&
    css`
      display: block;
      background-color: #008489;
      font-size: 1.6rem;
      padding: 10px 22px;
      color: #eee;
      font-weight: 800;
      border-radius: 5px;
    `}
`;

const Button = ({ children, disabled, ...rest }) => {
  console.log(disabled);
  return (
    <ButtonStyle disabled={disabled} {...rest}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
