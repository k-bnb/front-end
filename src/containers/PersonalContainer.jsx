import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import axios from '../../node_modules/axios/index';
import PersonalTemplate from '../components/templates/templates-personal/PersonalTemplate';
import { changeInputPerson, changeInputPersonSubmit } from '../modules/user';

const PersonalContainer = () => {
  const [fix, setFix] = useState('');
  const { token } = useSelector((state) => state.auth);
  const userRes = useSelector((state) => state.user.userRes);
  const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
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
    if (e.target.name === 'name') {
      dispatch(changeInputPerson(e.target.name, userInfo.name));
    } else if (e.target.name === 'imageUrl') {
      dispatch(changeInputPerson(e.target.name, userInfo.unageUrl));
    } else if (e.target.name === 'emailAddress') {
      dispatch(changeInputPerson('email', userInfo.email));
    }
    setFix((state) => '');
  };

  const ChangeInputBtn = (e) => {
    console.log(e.target.name, e.target.value);

    dispatch(changeInputPersonSubmit(token, e.target.name, e.target.value));
    setTimeout(() => {
      setFix((state) => ({
        name: false,
        img: false,
        birth: false,
        emailAddress: false,
        cancel: true,
      }));
    }, 1000);

    sessionStorage.setItem(
      'userInfo',
      JSON.stringify({
        name: userRes?.name,
        email: userRes?.email,
        birth: userRes?.birth,
        imageUrl: userRes?.imageUrl,
      }),
    );
  };
  const personInfoChange = (e) => {
    if (e.target.name === 'imageUrl') return;

    dispatch(changeInputPerson(e.target.name, e.target.value));
  };

  const loading = useSelector(
    (lo) => lo.loading['user/CHANGE_INPUT_PERSON_SUBMIT'],
  );

  return (
    <PersonalTemplate
      fixInfoBtnCancel={fixInfoBtnCancel}
      fixInfoBtn={fixInfoBtn}
      fix={fix}
      setFix={setFix}
      cancelclick={cancelclick}
      personInfoChange={personInfoChange}
      name={userRes?.name}
      email={userRes?.email}
      birth={userRes?.birth}
      imageUrl={userRes?.imageUrl}
      ChangeInputBtn={ChangeInputBtn}
      userInfo={userInfo}
      loading={loading}
    />
  );
};

export default PersonalContainer;
