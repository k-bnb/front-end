import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PersonalContainer from '../../containers/PersonalContainer';

const PersonalInfoPage = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <>
      {!token && <Redirect to="/" />};
      <PersonalContainer />
    </>
  );
};

export default PersonalInfoPage;
