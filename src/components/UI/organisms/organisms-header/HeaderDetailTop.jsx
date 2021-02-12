import React from 'react';
import ProfileToggleModalContainer from '../../../../containers/header-containers/ProfileToggleModalContainer';
import Logo from '../../atoms/atoms-header/Logo';
import Text from '../../atoms/atoms-header/Text';
import styled, { css } from 'styled-components';

const HeaderDetailTopBlock = styled.header`
  text-align: center;
  height: 80px;
  padding-top: 30px;
  background-color: white;
  transition: 0.1s ease-in;
  position: relatvie;
  z-index: 9999;
  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.1);
  ${(props) =>
    props.isClicked &&
    css`
      height: 180px;
    `};
`;

const HeaderDetailTop = ({ isScrolled, isClicked }) => {
  return (
    <HeaderDetailTopBlock isScrolled={isScrolled} isClicked={isClicked}>
      <Logo isScrolled={true} />

      {isClicked && (
        <Text noPadding bold black after>
          숙소
        </Text>
      )}
      <ProfileToggleModalContainer />
    </HeaderDetailTopBlock>
  );
};

export default HeaderDetailTop;
