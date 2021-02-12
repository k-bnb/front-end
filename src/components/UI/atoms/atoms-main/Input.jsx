import styled from 'styled-components';
import React from 'react';
const InputStyle = styled.input`
  width: 100%;
  /* height: 100%; */
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  &::-webkit-input-placeholder {
    font-weight: 600;
    padding: 10px;
  }

  &:focus {
    border-radius: 5px;
    /* border: 1px; */
    border-color: #1be72c;
  }
`;

const Input = React.forwardRef(({ type, placeholder, ...rest }, ref) => {
  return (
    <InputStyle type={type} ref={ref} placeholder={placeholder} {...rest} />
  );
});

export default Input;
