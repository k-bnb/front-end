import styled, { css, keyframes } from 'styled-components';
import React, { Children, useCallback } from 'react';
import CircleDiv from '../../UI/atoms/atoms-main/DivStyle';

const boxFade = keyframes`
	0% {
		opacity: 0;
		transform: translateY(100%);
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 1;
	}
`;

const Modaldiv = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

  .login-group {
    display: flex;
    justify-content: flex-start;

    &.active {
      animation: ${boxFade} 0.2s ease-in alternate forwards;
    }
  }
  .or {
    position: relative;
    &::before {
      content: '또는';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: rgb(255, 255, 255);
      transform: translateX(-50%) translateY(-50%);
      color: rgb(0, 0, 0, 0.4);
      text-align: center;
      width: 65px;
    }
  }
`;

const ModalTemplate = ({ children, modal, setModal, signup, onSubmit }) => {
  const bgClick = useCallback(
    (e) => {
      if (!e.target.matches('.bg')) return;
      setModal(false);
    },
    [setModal],
  );

  return (
    <Modaldiv className="bg" onClick={bgClick}>
      <form onSubmit={onSubmit}>
        <CircleDiv
          className={modal ? 'login-group active' : 'login-group'}
          logindiv
          style={signup && { width: '590px' }}
        >
          {children}
        </CircleDiv>
      </form>
    </Modaldiv>
  );
};

export default ModalTemplate;
