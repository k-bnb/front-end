import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PersonalTemplate from '../components/templates/templates-personal/PersonalTemplate';

const PersonalContainer = () => {
  const [fix, setFix] = useState('');

  const fixInfoBtn = (e) => {
    if (!e.target.matches('.btn')) return;
    if (e.target.name === 'name') {
      setFix((state) => ({
        name: true,
        gender: false,
        birth: false,
        emailAddress: false,
        cancel: true,
      }));
    } else if (e.target.name === 'gender') {
      setFix((state) => ({
        name: false,
        gender: true,
        birth: false,
        emailAddress: false,
        cancel: true,
      }));
    } else if (e.target.name === 'birth') {
      setFix((state) => ({
        name: false,
        gender: false,
        birth: true,
        emailAddress: false,
        cancel: true,
      }));
    } else if (e.target.name === 'emailAddress') {
      setFix((state) => ({
        name: false,
        gender: false,
        birth: false,
        emailAddress: true,
        cancel: true,
      }));
    }
  };

  const fixInfoBtnCancel = () => {
    setFix((state) => ({
      name: false,
      gender: false,
      birth: false,
      emailAddress: false,
      cancel: true,
    }));
  };

  const cancelclick = (e) => {
    if (!e.target.matches('.btn')) return;
    setFix((state) => '');
  };
  return (
    <PersonalTemplate
      fixInfoBtnCancel={fixInfoBtnCancel}
      fixInfoBtn={fixInfoBtn}
      fix={fix}
      cancelclick={cancelclick}
    />
  );
};

export default PersonalContainer;
