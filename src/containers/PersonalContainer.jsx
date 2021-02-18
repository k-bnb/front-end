import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import axios from '../../node_modules/axios/index';
import PersonalTemplate from '../components/templates/templates-personal/PersonalTemplate';
import { changeInputPerson } from '../modules/user';

const PersonalContainer = () => {
  const [fix, setFix] = useState('');
  const dispatch = useDispatch();
  const fixInfoBtn = (e) => {
    if (!e.target.matches('.btn')) return;
    if (e.target.name === 'name') {
      setFix((state) => ({
        name: true,
        img: false,
        birth: false,
        emailAddress: false,
        cancel: true,
      }));
    } else if (e.target.name === 'imageUrl') {
      setFix((state) => ({
        name: false,
        img: true,
        birth: false,
        emailAddress: false,
        cancel: true,
      }));
    } else if (e.target.name === 'birth') {
      setFix((state) => ({
        name: false,
        img: false,
        birth: true,
        emailAddress: false,
        cancel: true,
      }));
    } else if (e.target.name === 'emailAddress') {
      setFix((state) => ({
        name: false,
        img: false,
        birth: false,
        emailAddress: true,
        cancel: true,
      }));
    }
  };

  const fixInfoBtnCancel = () => {
    setFix((state) => ({
      name: false,
      img: false,
      birth: false,
      emailAddress: false,
      cancel: true,
    }));
  };

  const cancelclick = (e) => {
    if (!e.target.matches('.btn')) return;
    setFix((state) => '');
  };

  const personInfoChange = (e) => {
    console.log(e.target.name, e.target.value);

    if (e.target.name === 'imageUrl') {
      const imgArr = e.target.files[0];
      return;
    } else {
      dispatch(changeInputPerson(e.target.name, e.target.value));
    }
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
