import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FiLoader } from 'react-icons/fi';
import styled, { css, keyframes } from 'styled-components';
const ani = keyframes`
	0% {
		transform: translateY(0%);
	}
	50% {

    transform: translateY(50%);
	}
	100% {

    transform: translateY(100%);

	}
`;
const ani1 = keyframes`
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

const rotateAni = keyframes`
 0% {
   transform: rotate(0deg);
 }

 100% {
   transform: rotate(360deg);
   
 }
`;
const ConfirmModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  animation: ${ani1} 0.3s ease-in alternate forwards;
  ${(props) =>
    props.disapear &&
    css`
      animation: ${ani} 0.3s ease-in alternate forwards;
    `}
  div {
    /* width: 400px; */
    /* height: 300px; */

    border-radius: 15px;
    padding: 10%;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      padding: 0;
      margin-bottom: 20px;
    }
    button {
      border-radius: 5px;
      padding: 10px 20px;
      border: 1px solid rgba(0, 0, 0, 0.3);
    }
  }

  .loading {
    svg {
      animation: ${rotateAni} 1.2s ease-in-out infinite;
      font-size: 5rem;
    }
  }
`;
const ConfirmModal = ({ miniModalCancelBtn, miniModal }) => {
  const loading = useSelector((lo) => lo.loading['user/RESERVATION_CANCEL']);
  console.log(loading);

  console.log(miniModal);
  const [animation, setAnimation] = useState(false);
  const [localModalState, setlocalModalState] = useState(miniModal);
  useEffect(() => {
    if (localModalState && !miniModal) {
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
      }, 2000);
    }
    setlocalModalState(miniModal);
  }, [localModalState, miniModal]);
  if (!animation && !localModalState) return null;
  return (
    <ConfirmModalStyle disapear={!miniModal}>
      {loading && (
        <div className="loading">
          <FiLoader />
        </div>
      )}
      {!loading && (
        <div>
          <h1>예약이 취소되었습니다!</h1>
          <button onClick={miniModalCancelBtn}>닫기</button>
        </div>
      )}
    </ConfirmModalStyle>
  );
};

export default ConfirmModal;
