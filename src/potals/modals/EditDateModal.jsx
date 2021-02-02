import React from 'react';
import styled from 'styled-components';

const BgContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  z-index: 100;
  background: #fff;
  width: 66.1rem;
  height: 46rem;
  border: 0.1rem solid #000;
  border-radius: 1.6rem;
`;

const EditDateModal = ({ setActive }) => {
  const closeClick = () => {
    setActive(false);

    document.body.style.overflow = 'auto';
  };

  return (
    <BgContainer>
      <Container>
        <h1>하이</h1>
        <button onClick={closeClick}>X</button>
      </Container>
    </BgContainer>
  );
};

export default EditDateModal;
