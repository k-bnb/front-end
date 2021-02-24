import React from 'react';
import styled, { keyframes } from 'styled-components';

const animations = keyframes`
 0% {
   transform: translateY(30%);
 }
 25% {
  transform: translateY(25%);

 }
 50% {
  transform: translateY(0);

 }
 70% {
  transform: translateY(0%);
 }

 100% {
  transform: translateY(10%);
 }
`;
const animationsodd = keyframes`
 0% {
   transform: translateY(40%);
 }
 50% {
  transform: translateY(0);
 }
 70% {
  transform: translateY(35%);
 }

 100% {
  transform: translateY(-40%);
 }
`;
const PageLoadingStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    div {
      width: 10px;
      height: 10px;
      border-radius: 50%;

      &:nth-child(2n) {
        animation: ${animations} 0.3s ease-in alternate infinite forwards;
        background-color: #d84040;
      }
      &:nth-child(odd) {
        animation: ${animationsodd} 0.3s ease-in alternate infinite forwards;
        background-color: #237420;
      }
    }
  }
`;
const PageLoading = () => {
  return (
    <PageLoadingStyle>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </PageLoadingStyle>
  );
};

export default PageLoading;
