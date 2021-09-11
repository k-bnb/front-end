import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  destinationInput,
  locationInput,
  roomTypeInput,
  searching,
} from '../../../../modules/search';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import Img from '../../atoms/atoms-main/Img';
import TextStyle from '../../atoms/atoms-main/TextStyle';

const Locations = ({
  src,
  alt,
  name,
  coords,
  subtitle,
  isRoomType,
  ...rest
}) => {
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

  const searchByRegion = () => {
    console.log('searchByRegion');
    const locationSearch = {
      latitude: coords?.lat,
      longitude: coords?.lng,
      latitudeMax: coords?.lat + 0.04,
      latitudeMin: coords?.lat - 0.04,
      longitudeMax: coords?.lng + 0.08,
      longitudeMin: coords?.lng - 0.08,
    };
    dispatch(destinationInput(name));
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
      `/rooms?location_search=${name}&lat=${locationSearch.latitude}&lng=${locationSearch.longitude}&min_lat=${locationSearch.latitudeMin}&max_lat=${locationSearch.latitudeMax}&min_lng=${locationSearch.longitudeMin}&max_lng=${locationSearch.longitudeMax}&check_in=${checkDateSearch.startDate}&check_out=${checkDateSearch.endDate}&adults=${guestSearch.numOfAdult}&children=${guestSearch.numOfKid}&infants=${guestSearch.numOfInfant}`,
    );
  };

  const searchByRoomType = () => {
    console.log(alt, 'alt********', 'search BY Room TYPE');
    const locationSearch = {
      latitude: 37.541,
      longitude: 126.986,
      latitudeMax: 37.545,
      latitudeMin: 37.537,
      longitudeMax: 126.994,
      longitudeMin: 126.978,
    };
    dispatch(destinationInput('서울'));
    dispatch(roomTypeInput({ roomType: alt }));
    dispatch(
      locationInput({
        latitude: 37.541,
        longitude: 126.986,
        latitudeMax: 37.545,
        latitudeMin: 37.537,
        longitudeMax: 126.994,
        longitudeMin: 126.978,
      }),
    );
    dispatch(
      searching({
        id: 0,
        locationSearch,
        checkDateSearch,
        guestSearch,
        costSearch,
        roomType: alt,
        bedNum,
        bedRoomNum,
        bathRoomNum,
      }),
    );
    history.push(
      `/rooms?location_search=${'서울'}&lat=${locationSearch.latitude}&lng=${
        locationSearch.longitude
      }&min_lat=${locationSearch.latitudeMin}&max_lat=${
        locationSearch.latitudeMax
      }&min_lng=${locationSearch.longitudeMin}&max_lng=${
        locationSearch.longitudeMax
      }&check_in=${checkDateSearch.startDate}&check_out=${
        checkDateSearch.endDate
      }&adults=${guestSearch.numOfAdult}&children=${
        guestSearch.numOfKid
      }&infants=${guestSearch.numOfInfant}`,
    );
  };

  return (
    <>
      <div
        className="locations-img"
        onClick={isRoomType ? searchByRoomType : searchByRegion}
        style={{ cursor: 'pointer' }}
      >
        <CircleDiv {...rest}>
          <Img src={src} alt={alt} {...rest} />
        </CircleDiv>
        <TextStyle {...rest}>{name}</TextStyle>
        {subtitle && <TextStyle>{subtitle}</TextStyle>}
      </div>
    </>
  );
};

export default Locations;
