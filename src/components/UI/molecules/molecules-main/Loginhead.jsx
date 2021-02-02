import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../../atoms/atoms-main/Button';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import TextStyle from '../../atoms/atoms-main/TextStyle';

const Loginhead = ({ name, modal, setModal }) => {
  const hide = (e) => {
    e.preventDefault();
    // props.setModal(false);
    setModal(false);
  };
  return (
    <CircleDiv className="login-text">
      <Button onClick={hide} circlehover>
        <AiOutlineClose />
      </Button>
      <TextStyle blackmiddlebold>{name}</TextStyle>
    </CircleDiv>
  );
};

export default Loginhead;
