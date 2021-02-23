import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import { IoIosArrowForward } from 'react-icons/io';
const PersonalInfoHeadingStyle = styled.header`
  .a11yHidden {
    overflow: hidden;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    clip-path: circle(0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
  }
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
      <h1 className="a11yHidden">개인정보</h1>
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
