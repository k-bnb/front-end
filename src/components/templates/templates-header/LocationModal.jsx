import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import Text from '../../UI/atoms/atoms-header/Text';
import { useClickOutside } from '../../../lib/useClickOutside';
import { destinationInput, locationInput } from '../../../modules/search';
import { useSelector } from 'react-redux';

const StyledLocModal = styled.div`
  position: absolute;
  top: 90px;
  left: 0;
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
    padding-left: 30px;
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
  setNavModalState,
  dispatch,
}) => {
  let locationRef = useClickOutside(() => {
    console.log('locartion start');
    setNavModalState({
      location: false,
      checkIn: false,
      checkOut: false,
      guest: false,
    });
  });

  return (
    <StyledLocModal
      isScrolled={isScrolled}
      isClicked={isClicked}
      className="location-modal"
      ref={locationRef}
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
        dispatch(destinationInput('가까운 여행지 둘러보기'));
        dispatch(
          locationInput({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeMax: position.coords.latitude + 0.04,
            latitudeMin: position.coords.latitude - 0.04,
            longitudeMax: position.coords.longitude + 0.08,
            longitudeMin: position.coords.longitude - 0.08,
          }),
        );
      }, // 성공시 콜백함수
      () => null, // 실패시 콜백함수, 따로 처리 안해줘서 null 반환
    );
  }
};

export default LocationModal;
