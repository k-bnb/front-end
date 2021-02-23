import React from 'react';
import styled from 'styled-components';

const PersonalInfoListyle = styled.li`
  /* display: flex; */
  position: relative;
  /* justify-content: space-between; */
  /* align-items: flex-start; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  list-style: none;
  &:last-child {
    margin-bottom: 0;
  }
  div {
    span {
      display: flex;
      margin-bottom: 10px;
      font-weight: 400;
      font-size: 1.6rem;
      color: #484848;
    }
    margin-bottom: 20px;
  }
  button {
    border: 0;
    span {
      font-size: 1.6rem;
    }
  }
`;

const PersonalInfoLi = ({ children }) => {
  return <PersonalInfoListyle>{children}</PersonalInfoListyle>;
};

export default PersonalInfoLi;
