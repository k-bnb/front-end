import React from 'react';
import styled from 'styled-components';

const StyledSkipNav = styled.a`
  position: absolute;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  z-index: 9999;
  border-radius: 10px;
  font-size: 18px;
  line-height: 0px;

  &:focus {
    padding: 30px;
    overflow: auto;
    clip: auto;
    display: inline-block;
    position: absolute;
    overflow: auto;
    text-decoration: none;
    background-color: #ece6e6;
    border: 1px solid gray;
    color: #202020;
    background-color: lightgray;
    z-index: 9999;
    vertical-align: middle;
    top: 0;
    left: 0;
    white-space: nowrap;
  }
`;

const SkipNabigation = () => {
  return <StyledSkipNav href="#content">콘텐츠로 바로가기</StyledSkipNav>;
};

export default SkipNabigation;
