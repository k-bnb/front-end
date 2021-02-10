import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import { IoIosArrowForward } from 'react-icons/io';
const PersonalInfoHeadingStyle = styled.header`
  width: 100%;
  margin-left: 20px;
  div {
    display: flex;
    align-items: center;

    margin-bottom: 10px;
    a {
      font-size: 1.4rem;
      text-decoration: none;
      color: #000;
      margin-right: 10px;
      &:hover {
        text-decoration: underline;
      }
      &:focus {
        color: #000;
      }
    }
    svg {
      font-size: 1.4rem;
      margin-right: 10px;
    }
    span {
      font-size: 1.4rem;
    }
  }
  h1 {
    padding: 0;
    margin: 0;

    font-size: 3.2rem;
    font-weight: 800;
  }
`;

const PersonalInfoHead = () => {
  return (
    <PersonalInfoHeadingStyle>
      <div>
        <Link to="/">계정</Link>
        <IoIosArrowForward />
        <TextStyle>개인정보</TextStyle>
      </div>
      <h1>개인정보</h1>
    </PersonalInfoHeadingStyle>
  );
};

export default PersonalInfoHead;
