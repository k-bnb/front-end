import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  destinationInput,
  locationInput,
  searching,
} from '../../../../modules/search';
import Button from '../../atoms/atoms-main/Button';
import TextStyle from '../../atoms/atoms-main/TextStyle';

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
  const getPosition = () =>
    new Promise((res, rej) =>
      navigator.geolocation.getCurrentPosition(res, rej, {
        timeout: 5000,
        maximumAge: Infinity,
      }),
    );

  const searchNearBy = async () => {
    try {
      console.log('he');
      const position = await getPosition();
      console.log('he1');
      const locationSearch = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeMax: position.coords.latitude + 0.04,
        latitudeMin: position.coords.latitude - 0.04,
        longitudeMax: position.coords.longitude + 0.08,
        longitudeMin: position.coords.longitude - 0.08,
      };
      console.log(locationSearch, 'lsdkfjsldkjf23094230948230980#(802)(*$)(*0');
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
    <div className="RoomLink" id="content">
      <TextStyle whiteMainBold>이제, 여행은</TextStyle>
      <TextStyle whiteMainBold>가까운 곳에서</TextStyle>
      <Button normal onClick={searchNearBy}>
        <TextStyle blacknormal> 근처의 숙소 둘러보기</TextStyle>
      </Button>
    </div>
  );
};

export default RoomsLink;
