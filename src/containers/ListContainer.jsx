import React from 'react';
import ListTemplate from '../components/templates/templates-list/ListTemplate';
import HeaderContainer from './header-containers/HeaderContainer';

const ListContainer = () => {
  return (
    <>
      {' '}
      <HeaderContainer />
      <ListTemplate />
    </>
  );
};

export default ListContainer;
