import React from 'react';
import Button from '../../atoms/atoms-main/Button';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import { IoIosArrowBack } from 'react-icons/io';
import styled from 'styled-components';
const BackLoginStyle = styled.div`
  width: 400px;
  /* margin: 2% 0; */
`;
const BackLogin = () => {
  return (
    <BackLoginStyle>
      <CircleDiv className="back">
        <TextStyle blacknormal>
          <IoIosArrowBack />
        </TextStyle>
        <Button className="signup">
          <TextStyle greentextLine>뒤로</TextStyle>
        </Button>
      </CircleDiv>
    </BackLoginStyle>
  );
};

export default BackLogin;
