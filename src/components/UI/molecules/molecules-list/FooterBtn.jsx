import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/atoms-main/Button';
import TextStyle from '../../atoms/atoms-main/TextStyle';

const FooterBtnStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  align-items: center;
  padding: 15px 15px 15px 0;
  button {
    /* width: 50px; */
    color: rgb(255, 255, 255);
    font-weight: 800;
    font-size: 1.7rem;
    border-radius: 10px;
    background-color: rgb(0, 0, 0);
    padding: 10px 20px;
  }
`;

const FooterBtn = ({ searchBtn }) => {
  return (
    <FooterBtnStyle>
      <Button onClick={searchBtn}>
        <TextStyle>저장</TextStyle>
      </Button>
    </FooterBtnStyle>
  );
};

export default FooterBtn;
