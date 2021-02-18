import styled, { keyframes, css } from 'styled-components';
import React, { useCallback, useEffect, useState } from 'react';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
const boxFade = keyframes`
	0% {
		/* width: 0; */
		transform: translateY(100%);
	}
	50% {
		width: 50%;
	}
	100% {
		width: 100%;
    transform: translateY(0%);
	}
`;
const boxFade1 = keyframes`
	0% {
		/* width: 0; */
		width: 100%;
    transform: translateY(0%);
	}
	50% {
		width: 50%;
	}
	100% {
    width: 0%;
		transform: translateY(100%);
	}
`;
const Modaldiv = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0.5); */
  border-radius: 0;
  background-color: #000;
  border: 1px solid #000;
  transform: translateY(150%);
  padding: 30px 10px;
  animation: ${boxFade} 0.2s ease-in alternate forwards;
  ${(props) => {
    console.log(props.disappear);
    props.disappear &&
      css`
        animation: ${boxFade1} 0.2s ease-in alternate forwards;
      `;
  }}
`;
const ReserveCancelModal = ({ children, modalState, cancelModal }) => {
  console.log(modalState);
  const [animation, setAnimation] = useState(false);
  const [localModalState, setLocalModalState] = useState(modalState);
  useEffect(() => {
    if (localModalState && !modalState) {
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
      }, 400);
    }
    setLocalModalState(modalState);
  }, [localModalState, modalState]);

  if (!animation && !localModalState) return null;
  return (
    <Modaldiv className="bg" disappear={!modalState}>
      <CircleDiv>{children}</CircleDiv>
    </Modaldiv>
  );
};
export default ReserveCancelModal;
