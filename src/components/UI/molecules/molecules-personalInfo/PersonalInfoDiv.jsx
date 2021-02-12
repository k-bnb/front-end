import React from 'react';
import styled from 'styled-components';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import TextStyle from '../../atoms/atoms-main/TextStyle';

const PersonlInfoDivStyle = styled.div`
  svg {
    height: 40px;
    width: 40px;
    display: block;
    fill: rgb(96, 182, 181);
  }
  div {
    h2 {
      font-size: 1.8rem;
      color: #484848;
    }
  }
  div {
    font-size: 1.6rem;
    color: #484848;
  }
`;

const PersonalInfoDiv = ({ children }) => {
  return <PersonlInfoDivStyle>{children}</PersonlInfoDivStyle>;
};

export default PersonalInfoDiv;
