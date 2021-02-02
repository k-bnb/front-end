import React from 'react';
import styled from 'styled-components';
const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 18px;
  border: 0;
  margin: 0;
  color: #222;
  background-color: transparent;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  text-overflow: ellipsis;
  ::placeholder {
    font-weight: normal;
  }
  &:focus {
    outline: none;
  }
`;

const SearchInput = () => {
  return <StyledInput placeholder="어디로 여행가세요?" />;
};

export default SearchInput;
