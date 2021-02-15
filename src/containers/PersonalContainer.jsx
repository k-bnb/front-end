import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PersonalTemplate from '../components/templates/templates-personal/PersonalTemplate';
import {
  changeInputPerson,
  inputReset,
  resetInputPerson,
} from '../modules/person';

const PersonalContainer = () => {
  const [fix, setFix] = useState('');
  const dispatch = useDispatch();
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
    dispatch(resetInputPerson());
  };

  const personInfoChange = (e) => {
    console.log(e.target.name, e.target.value);
    dispatch(changeInputPerson(e.target.name, e.target.value));
  };
  return (
    <PersonalTemplate
      fixInfoBtnCancel={fixInfoBtnCancel}
      fixInfoBtn={fixInfoBtn}
      fix={fix}
      cancelclick={cancelclick}
      personInfoChange={personInfoChange}
    />
  );
};

export default PersonalContainer;
