import React from 'react';
import styled, { css } from 'styled-components';

const TextBlock = styled.span`
  padding: 10px 5px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(34, 34, 34);

  ${(props) =>
    props.small &&
    css`
      font-size: 12px;
    `}

  ${(props) =>
    props.big &&
    css`
      font-size: 16px;
    `}

  ${(props) =>
    props.bold &&
    css`
      font-weight: 600;
    `}

    ${(props) =>
    props.white &&
    css`
      color: white;
    `}

    ${(props) =>
    props.gray &&
    css`
      color: rgb(113, 113, 113);
    `}

    ${(props) =>
    props.bigger &&
    css`
      font-size: 20px;
    `}

    ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
    `}

    ${(props) =>
    props.noPadding &&
    css`
      padding: 0;
    `}

    ${(props) =>
    props.emoticonBox &&
    css`
      height: 24px;
      width: 24px;
      fill: currentColor;
    `} 

    ${(props) =>
    props.block &&
    css`
      display: block;
    `} /* ${(props) =>
    props.after &&
    props.black &&
    css`
      position: relative;
      &::after {
        content: '';
        display: inline-block;
        width: 17px;
        height: 3px;
        position: absolute;
        top: 25px;
        left: 4px;
        background-color: black;
      }
    `}

    ${(props) =>
    props.after &&
    props.white &&
    css`
      position: relative;
      &::after {
        content: '';
        display: inline-block;
        width: 17px;
        height: 3px;
        position: absolute;
        top: 25px;
        left: 4px;
        background-color: white;
      }
    `} */
`;

const Text = (props) => {
  return <TextBlock {...props}>{props.children}</TextBlock>;
};

export default Text;