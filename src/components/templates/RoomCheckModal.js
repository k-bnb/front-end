import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { useClickOutside } from '../../lib/useClickOutside';
import Modal from '../../portal/Modal';
import { roomCheck } from '../../lib/api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { changeIsChecked } from '../../modules/detail';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const slideUp = keyframes`
  0% {
    transform: translate(-50%, 100%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
`;
const slideDown = keyframes`
  0% {
    transform: translate(-50%, -50%);
  }
  100% {
    transform: translate(-50%, 100%);
  }
`;

const RoomCheckModalBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  animation: ${fadeIn} 0.35s ease;

  ${(props) =>
    props.disappear &&
    css`
      animation: ${fadeOut} 0.35s ease;
    `}
`;

const RoomCheckSection = styled.section`
  position: relative;
  top: 50%;
  left: 50%;
  width: 50vw;
  height: 30vh;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  background-color: white;
  text-align: center;
  animation: ${slideUp} 0.35s ease forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation: ${slideDown} 0.35s ease;
    `}

  .close-button {
    position: absolute;
    top: 15px;
    left: 20px;
    font-size: 25px;
    padding: 5px;
    cursor: pointer;
    transition-duration: 0.3s;
    transition-property: transform;

    &:hover {
      background-color: lightgray;
      border-radius: 50%;
    }
    &:active {
      transform: scale(0.92);
    }
  }
`;

const RoomCheckFormTitle = styled.h2`
  padding: 20px;
  font-size: 16px;
  text-align: center;
  border-bottom: 1px solid lightgray;
`;

const RoomCheckFormArticle = styled.article`
  width: 100%;
  text-align: center;
  font-size: 17px;
  margin-top: 30px;
`;

const RoomCheckButton = styled.button`
  background-color: #d70466;
  border: none;
  color: white;
  width: 120px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  bottom: 20px;
  cursor: pointer;
  transition-duration: 0.3s;
  transition-property: transform;
  outline: none;

  &:active {
    transform: scale(0.97);
  }

  & + & {
    margin-left: 10px;
  }

  ${(props) =>
    props.btnType === 'save' &&
    css`
      left: 150px;
    `}

  ${(props) =>
    props.btnType === 'cancel' &&
    css`
      background-color: rgba(0, 0, 0, 0.7);
      right: 150px;
    `}
`;

const RoomCheckModal = ({
  isRoomCheckModalOpen,
  setIsRoomCheckModalOpen,
  modal,
  setModal,
  formState,
  setFormState,
  isList,
}) => {
  const dispatch = useDispatch();
  const [localIsRoomCheckModalOpen, setLocalIsRoomCheckModalOpen] = useState(
    isRoomCheckModalOpen,
  );
  const [displayAnimation, setDisplayAnimation] = useState(false);

  const { id: roomId, isChecked } = useSelector(({ detail }) => detail.infoRes);

  const { token } = useSelector(({ auth }) => auth);

  const closeOutsideClick = (e) => {
    if (e.target.classList.contains('room-check-modal-block'))
      setIsRoomCheckModalOpen(false);
  };

  const addRoomCheckList = async () => {
    if (!token) {
      setIsRoomCheckModalOpen(false);
      setModal(true);
      setFormState('login');
      return;
    }
    const res = await roomCheck({
      token:
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4NiIsImlhdCI6MTYxNDc1MDk2MywiZXhwIjoxNjE1NjE0OTYzfQ.YFbkQNiRqi_jWNG-xHmWyxi2pvzNhXpd8fBOWNX4T3QO-VuNKaEHgHB_k7_toFVvbqbiyG7Cin5qAw0yc8FH2g',
      roomId,
    });
    dispatch(changeIsChecked({ isChecked: res.data.isChecked }));
    setIsRoomCheckModalOpen(false);
  };

  useEffect(() => {
    if (localIsRoomCheckModalOpen && !isRoomCheckModalOpen) {
      setDisplayAnimation(true);
      setTimeout(() => {
        setDisplayAnimation(false);
      }, 350);
    }
    setLocalIsRoomCheckModalOpen(isRoomCheckModalOpen);
  }, [isRoomCheckModalOpen, localIsRoomCheckModalOpen]);

  if (!localIsRoomCheckModalOpen && !displayAnimation) return null;
  return (
    <RoomCheckModalBlock
      className="room-check-modal-block"
      disappear={!isRoomCheckModalOpen}
      onClick={closeOutsideClick}
    >
      <RoomCheckSection disappear={!isRoomCheckModalOpen}>
        <AiOutlineClose
          onClick={() => {
            setIsRoomCheckModalOpen(false);
          }}
          className="close-button"
        />
        {!isChecked && (
          <>
            <RoomCheckFormTitle>목록에 저장하기</RoomCheckFormTitle>
            <RoomCheckFormArticle>
              찜하기 목록에 저장하시겠습니까?
            </RoomCheckFormArticle>
            <RoomCheckButton btnType="save" onClick={addRoomCheckList}>
              저장하기
            </RoomCheckButton>
            <RoomCheckButton
              btnType="cancel"
              onClick={() => {
                setIsRoomCheckModalOpen(false);
              }}
            >
              취소
            </RoomCheckButton>
          </>
        )}
        {isChecked && (
          <>
            <RoomCheckFormTitle>목록에서 제거하기</RoomCheckFormTitle>
            <RoomCheckFormArticle>
              찜하기 목록에서 제거하시겠습니까?
            </RoomCheckFormArticle>
            <RoomCheckButton btnType="save" onClick={addRoomCheckList}>
              제거하기
            </RoomCheckButton>
            <RoomCheckButton
              btnType="cancel"
              onClick={() => {
                setIsRoomCheckModalOpen(false);
              }}
            >
              취소
            </RoomCheckButton>
          </>
        )}
      </RoomCheckSection>
    </RoomCheckModalBlock>
  );
};

export default RoomCheckModal;
