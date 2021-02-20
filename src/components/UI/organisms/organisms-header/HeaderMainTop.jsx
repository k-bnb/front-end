import React from 'react';
import ProfileToggleModalContainer from '../../../../containers/header-containers/ProfileToggleModalContainer';
import Logo from '../../atoms/atoms-header/Logo';
import Text from '../../atoms/atoms-header/Text';
import styled, { css } from 'styled-components';

const HeaderMainTopBlock = styled.header`
  text-align: center;
  height: 80px;
  padding-top: 30px;
  background-color: transparent;
  transition: 0.1s ease-in;
  position: relatvie;
  z-index: 9999;

  ${(props) =>
    props.isScrolled &&
    css`
      background-color: white;
    `}
`;

const HeaderMainTop = ({ isScrolled, isClicked, formState, setFormState }) => {
  // Text는 스크롤 되면 사라진다.
  return (
    <HeaderMainTopBlock isScrolled={isScrolled}>
      <Logo isScrolled={isScrolled} />
      {!isScrolled && (
        <Text noPadding white bold after>
          숙소
        </Text>
      )}
      {isScrolled && isClicked && (
        <Text noPadding bold black after>
          숙소
        </Text>
      )}
      <ProfileToggleModalContainer
        formState={formState}
        setFormState={setFormState}
      />
    </HeaderMainTopBlock>
  );
};

export default HeaderMainTop;
