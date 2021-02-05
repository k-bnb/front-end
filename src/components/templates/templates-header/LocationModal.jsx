import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import Portal from '../../../../node_modules/@reach/portal/dist/index';
import { changeInput } from '../../../modules/auth';
import loading from '../../../modules/loading';
import Text from '../../UI/atoms/atoms-header/Text';

const StyledLocModal = styled.div`
  position: absolute;
  top: 165px;
  left: 40vw;
  transform: translate(-50%, 0);
  border-radius: 40px;
  background-color: white;
  width: 500px !important;
  height: auto;
  padding: 25px 0 20px;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.6) !important;
  border: 0 !important;

  .nearby-outer-container {
    cursor: pointer;
    padding: 5px 0;
    display: flex;
  }

  .nearby-outer-container:hover {
    border-radius: 7px;
    background-color: rgb(241, 241, 241);
  }

  .nearby-icon-container {
    width: 20%;
  }

  .nearby-icon {
    border-radius: 10px;
  }
  .nearby-text {
    text-align: left;
    align-self: center;
    width: 90%;
  }

  ${(props) =>
    props.isScrolled &&
    props.isClicked &&
    css`
      top: 180px;
    `}
`;

const LocationModal = ({
  isScrolled,
  isClicked,
  setIsClicked,
  setCondition,
  initialCondition,
}) => {
  const clickOutSide = (e) => {
    console.log(e.target.firstChild); // 가까운 여행지 둘러보기
    if (e.target.matches('.location-modal')) {
      return;
    }
    setIsClicked(false);
    setCondition(initialCondition);
  };

  useEffect(() => {
    window.addEventListener('click', clickOutSide);

    return () => {
      window.removeEventListener('click', clickOutSide);
    };
  }, []);

  return (
    <StyledLocModal
      isScrolled={isScrolled}
      isClicked={isClicked}
      className="location-modal"
    >
      <div className="nearby-outer-container">
        <span className="nearby-icon-container">
          <img
            className="nearby-icon"
            src="./imgs/nearby-marker.png"
            alt="가까운 여행지 둘러보기"
            width="50px"
            height="50px"
          />
        </span>
        <Text big className="nearby-text" onClick={getNearbyAddress}>
          가까운 여행지 둘러보기
        </Text>
      </div>
    </StyledLocModal>
  );

  function getNearbyAddress() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position); // 현위치 반환
      }, // 성공시 콜백함수
      () => null, // 실패시 콜백함수, 따로 처리 안해줘서 null 반환
    );
  }
};

export default LocationModal;
