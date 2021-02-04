import styled from 'styled-components';

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

const Input = ({ type, placeholder, ...rest }) => {
  console.log(type, placeholder);
  return <InputStyle type={type} placeholder={placeholder} {...rest} />;
};

export default Input;
