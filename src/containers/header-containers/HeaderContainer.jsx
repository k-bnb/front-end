import React from 'react';
import { withRouter } from 'react-router-dom';
import HeaderMain from '../../components/templates/templates-header/HeaderMain';

const HeaderContainer = (props) => {
  return <HeaderMain />;
};

export default withRouter(HeaderContainer);
