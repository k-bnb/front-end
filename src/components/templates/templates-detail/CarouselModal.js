import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import CloseBtn from '../../UI/atoms/atoms-detail/CloseBtn';
import Text from '../../UI/atoms/atoms-header/Text';
import { FiShare } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import SeeAllPhotosCarousel from '../../UI/organisms/organisms-detail/SeeAllPhotosCarousel';

const slideDown = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;

  }
  100% {
    transform: translateY(100%);
    opacity: 0;

  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const CarouselModalBlock = styled.div`
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  padding: 30px 25px;
  animation: ${slideUp} 0.4s ease-out forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation: ${slideDown} 0.4s ease-out forwards;
    `}
`;

const CarouselModalTopBlock = styled.div`
  display: flex;
  justify-content: space-between;

  .buttons-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 45px;
    svg {
      font-size: 13px;
    }
  }
`;

const photos = [
  'https://a0.muscache.com/im/pictures/144d8628-1123-4cd4-af93-dd81f47455cd.jpg?im_w=960',
  'https://a0.muscache.com/im/pictures/9471ef27-e408-4bc6-82b3-73d76bc7c693.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/4f91a3fc-f44e-4c07-a6d5-e653a18fcb5e.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/ff5353d8-7527-4671-bda3-eadb8a8a327c.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/b23d7c84-c948-4557-b141-4f36d738d2fa.jpg?im_w=1200',
];

const CarouselModal = ({ showModal, setShowModal }) => {
  const [current, setCurrent] = useState(0); // 현재 보는 사진의 index
  const [localShowModal, setLocalShowModal] = useState(showModal);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // current의 변화 감지
    if (localShowModal && !showModal) {
      setShowAnimation(true);
      setTimeout(() => {
        setShowAnimation(false);
      }, 400);
    }
    setLocalShowModal(showModal);
    return () => {
      setCurrent(0);
    };
  }, [localShowModal, showModal]);

  if (!localShowModal && !showAnimation) return null;
  return (
    <CarouselModalBlock disappear={!showModal}>
      <CarouselModalTopBlock>
        <CloseBtn
          carouselModal
          onClick={() => {
            setShowModal(false);
          }}
        />
        <Text>{`${current + 1} / ${photos.length}`}</Text>
        <div className="buttons-container">
          <FiShare className="share" />
          <BsHeart className="like" />
        </div>
      </CarouselModalTopBlock>
      <SeeAllPhotosCarousel
        photos={photos}
        current={current}
        setCurrent={setCurrent}
      />
    </CarouselModalBlock>
  );
};

export default CarouselModal;
