import styled, { keyframes, css } from 'styled-components';
import React, { useEffect, useState } from 'react';
import CircleDiv from '../../atoms/atoms-main/DivStyle';

const boxFade = keyframes`
	0% {
		transform: translateY(100%);
	}
	50% {

    transform: translateY(50%);
	}
	100% {

    transform: translateY(0%);

	}
`;

const boxFade1 = keyframes`
	0% {
		/* width: 0; */

	
    transform: translateY(0%);
	}
	50% {

    transform: scale(0.5);
		transform: translateY(70%);
	}
	100% {

    transform: scale(0);
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
    return (
      props.disappear &&
      css`
        animation: ${boxFade1} 0.4s ease-in alternate forwards;
      `
    );
  }}
`;

const ReserveCancelModal = ({
  children,
  cancelModalState,
  cancelModal,
  active,
}) => {
  const [animation, setAnimation] = useState(false);
  const [localModalState, setLocalModalState] = useState(cancelModalState);
  useEffect(() => {
    if (localModalState && !cancelModalState) {
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
      }, 2000);
    }
    setLocalModalState(cancelModalState);
  }, [localModalState, cancelModalState]);
  if (!animation && !localModalState) return null;

  return (
    <Modaldiv className="bg" disappear={!cancelModalState}>
      <CircleDiv>{children}</CircleDiv>
    </Modaldiv>
  );
};
export default ReserveCancelModal;
