import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  destinationInput,
  locationInput,
  searching,
} from '../../../../modules/search';
import Button from '../../atoms/atoms-main/Button';
import TextStyle from '../../atoms/atoms-main/TextStyle';
// import { useState } from 'react';
// import LoginPotal from '../../../../potals/modals/LoginModal';
// import Modal from '../../../../potals/modals/Modal';
// import AuthModalContainer from '../../../../containers/AuthModalContainer';

const RoomsLink = (props) => {
  const {
    checkDateSearch,
    guestSearch,
    costSearch,
    roomType,
    bedNum,
    bedRoomNum,
    bathRoomNum,
  } = useSelector((state) => state.search.searchReq);
  const dispatch = useDispatch();
  const history = useHistory();

  const searchNearBy = async () => {
    try {
      const position = await new Promise((res, rej) =>
        navigator.geolocation.getCurrentPosition(res, rej),
      );
      const locationSearch = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeMax: position.coords.latitude + 0.04,
        latitudeMin: position.coords.latitude - 0.04,
        longitudeMax: position.coords.longitude + 0.08,
        longitudeMin: position.coords.longitude - 0.08,
      };
      dispatch(destinationInput('가까운 여행지 둘러보기'));
      dispatch(locationInput(locationSearch));
      dispatch(
        searching({
          id: 0,
          locationSearch,
          checkDateSearch,
          guestSearch,
          costSearch,
          roomType,
          bedNum,
          bedRoomNum,
          bathRoomNum,
        }),
      );
      history.push(
        `/rooms?location_search=${'가까운 여행지 둘러보기'}&lat=${
          locationSearch.latitude
        }&lng=${locationSearch.longitude}&min_lat=${
          locationSearch.latitudeMin
        }&max_lat=${locationSearch.latitudeMax}&min_lng=${
          locationSearch.longitudeMin
        }&max_lng=${locationSearch.longitudeMax}&check_in=${
          checkDateSearch.startDate
        }&check_out=${checkDateSearch.endDate}&adults=${
          guestSearch.numOfAdult
        }&children=${guestSearch.numOfKid}&infants=${guestSearch.numOfInfant}`,
      );
    } catch (e) {
      console.log(e, 'eerror');
    }
  };

  return (
    <>
      <div className="RoomLink" id="content">
        <TextStyle whiteMainBold>이제, 여행은</TextStyle>
        <TextStyle whiteMainBold>가까운 곳에서</TextStyle>
        <Button normal onClick={searchNearBy}>
          <TextStyle blacknormal> 근처의 숙소 둘러보기</TextStyle>
        </Button>
      </div>
      {/* {modal && (
        <Modal>
          <AuthModalContainer modal={modal} setModal={setModal} />
        </Modal>
      )} */}
    </>
  );
};

export default RoomsLink;
