import React, { useEffect, useState } from 'react';
import Text from '../../atoms/atoms-header/Text';
import styled from 'styled-components';
import Modal from '../../../../portal/Modal';
import AuthModalContainer from '../../../../containers/AuthModalContainer';

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

const ProfileToggleItems = ({ setIsOpen, formState, setFormState }) => {
  const [modal, setModal] = useState(false);

  const displayLoginModal = (e) => {
    e.preventDefault();
    console.log('loginClick');
    setFormState('login');
    setModal(true);
    console.log(formState);
  };

  const displayRegisterModal = (e) => {
    e.preventDefault();
    console.log('registerClick');
    setFormState('register');
    setModal(true);
  };

  const clickOutside = (e) => {
    if (
      // 모달 창의 내부를 클릭한게 아니라면 창을 닫아주는 함수
      e.target.matches('.profile-toggle-modal > li') ||
      e.target.matches('.profile-toggle-modal') ||
      e.target.matches('.login-group.active')
    ) {
      if (!!e.target.classList[2]) {
        const formName = e.target.classList[2];
        setFormState(formName);
        // setIsOpen(false); // 로그인 / 회원가입 상태 변경 해주고 닫기
      }
      return;
    }
    // setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', clickOutside);

    return () => {
      window.removeEventListener('click', clickOutside);
    };
  }, []);

  return (
    <>
      <ProfileToggleItemUl className="profile-toggle-modal">
        <ProfileToggleItemLi onClick={displayLoginModal} className="login">
          로그인
        </ProfileToggleItemLi>
        <ProfileToggleItemLi
          onClick={displayRegisterModal}
          className="register"
        >
          회원가입
        </ProfileToggleItemLi>
      </ProfileToggleItemUl>
      {modal && (
        <Modal>
          <AuthModalContainer
            modal={modal}
            setModal={setModal}
            formState={formState}
          />
        </Modal>
      )}
    </>
  );
};

export default ProfileToggleItems;
