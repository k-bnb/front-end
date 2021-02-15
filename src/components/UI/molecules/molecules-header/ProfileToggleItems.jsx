import React, { useEffect, useState } from 'react';
import Text from '../../atoms/atoms-header/Text';
import styled from 'styled-components';
import Modal from '../../../../portal/Modal';
import AuthModalContainer from '../../../../containers/AuthModalContainer';
import { logout } from '../../../../modules/auth';

const ProfileToggleItemUl = styled.ul`
  list-style: none;
  width: fit-content;
  padding: 5px 0 5px;
  margin: 0;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  align-self: start;
  justify-content: space-around;
  box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.49);
  overflow: scroll;
  background-color: white;
  .login {
    font-weight: 600;
  }
`;

const ProfileToggleItemLi = styled.li`
  width: 220px;
  height: 35px;
  line-height: 35px;
  padding-left: 20px;
  text-align: left;
  font-size: 14px;

  cursor: pointer;
  &:hover {
    background: #f7f7f7;
  }
`;

const ProfileToggleItems = ({
  isOpen,
  setIsOpen,
  formState,
  setFormState,
  token,
  dispatch,
}) => {
  const [modal, setModal] = useState(false);

  const displayLoginModal = (e) => {
    e.preventDefault();
    console.log('loginClick');
    setFormState('login');
    setModal(true);
  };

  const displayRegisterModal = (e) => {
    e.preventDefault();
    console.log('registerClick');
    setFormState('register');
    setModal(true);
  };

  const clickOutside = (e) => {
    // 모달 창의 내부를 클릭한게 아니라면 창을 닫아주는 함수
    // 로그인/회원가입 모달이 열려있지 않고, 프로필 아래의 토글 모달영역 내부가 아닐때.
    if (isOpen && !modal)
      if (
        e.target.matches('.profile-toggle-modal > li') ||
        e.target.matches('.profile-toggle-modal')
      ) {
        return;
      } else if (
        e.target.closest('form') &&
        e.target.closest('form').className === 'auth-modal-form'
      ) {
        return;
      }

    setIsOpen(false);
  };

  // 로그아웃 함수
  const requestLogOut = () => {
    dispatch(logout());
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', clickOutside);

    return () => {
      window.removeEventListener('click', clickOutside);
    };
  }, []);
  console.log(token);

  return (
    <>
      <ProfileToggleItemUl className="profile-toggle-modal">
        {!token && (
          <>
            <ProfileToggleItemLi onClick={displayLoginModal} className="login">
              로그인
            </ProfileToggleItemLi>
            <ProfileToggleItemLi
              onClick={displayRegisterModal}
              className="register"
            >
              회원가입
            </ProfileToggleItemLi>
          </>
        )}
        {token && (
          <>
            <ProfileToggleItemLi>예약 내역</ProfileToggleItemLi>
            <ProfileToggleItemLi onClick={requestLogOut}>
              로그 아웃
            </ProfileToggleItemLi>
          </>
        )}
      </ProfileToggleItemUl>
      {modal && (
        <Modal>
          <AuthModalContainer
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            modal={modal}
            setModal={setModal}
            formState={formState}
            setFormState={setFormState}
          />
        </Modal>
      )}
    </>
  );
};

export default ProfileToggleItems;
