import React, { useEffect } from 'react';
import Portal from '../../../node_modules/@reach/portal/dist/index';
import styled from 'styled-components';
import LoaderIcon from 'react-loader-icon';

const LoadingModalBlock = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  .loader-img {
    position: absolute;
    z-index: 1;
    background-color: white;
    border-radius: 30px;
    height: 10px;
  }
`;

const LoadingModal = () => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return (
    <Portal>
      <LoadingModalBlock>
        <LoaderIcon type={'bubbles'} className="loader-img" />
      </LoadingModalBlock>
    </Portal>
  );
};

export default LoadingModal;
