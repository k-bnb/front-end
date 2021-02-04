import React from 'react';
import styled from 'styled-components';
import ModalTemplate from '../../../templates/templates-modal/ModalTemplate';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import AuthBtn from '../../molecules/molecules-modals-auth/AuthBtn';
import AuthGoogle from '../../molecules/molecules-modals-auth/AuthGoogle';
import AuthHead from '../../molecules/molecules-modals-auth/AuthHead';
import AuthRegisterdate from '../../molecules/molecules-modals-auth/AuthRegisterDate';
import AuthRegisterInputs from '../../molecules/molecules-modals-auth/AuthRegisterInputs';

const BtnContainer = styled.div`
  width: 40rem;
  height: 5rem;
  margin: 2.4rem 0;
`;

const RegisterOrganism = ({
  formState,
  setFormState,
  onChange,
  onSubmit,
  name,
  email,
  password,
  year,
  month,
  day,
  modal,
  setModal,
}) => {
  return (
    <ModalTemplate modal={modal} setModal={setModal} signup>
      <AuthHead name="회원가입" setModal={setModal} />
      <AuthGoogle />
      <CircleDiv borderline className="or" />
      <AuthRegisterInputs
        onChange={onChange}
        email={email}
        password={password}
      />
      <AuthRegisterdate name={name} year={year} month={month} day={day} />
      <BtnContainer>
        <AuthBtn name="회원가입" onSubmit={onSubmit} />
      </BtnContainer>
    </ModalTemplate>
  );
};

export default RegisterOrganism;
