import React, { Children } from 'react';
import styled from 'styled-components';

const PersonalInfoListyle = styled.li`
  display: flex;

  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  div {
    span {
      margin-bottom: 10px;
      display: flex;
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
