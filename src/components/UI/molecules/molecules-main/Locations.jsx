import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  destinationInput,
  locationInput,
  searching,
} from '../../../../modules/search';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import Img from '../../atoms/atoms-main/Img';
import TextStyle from '../../atoms/atoms-main/TextStyle';

const Locations = ({ src, alt, name, coords, subtitle, ...rest }) => {
  console.log(coords);
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
  const locationSearch = {
    latitude: coords?.lat,
    longitude: coords?.lng,
    latitudeMax: coords?.lat + 0.04,
    latitudeMin: coords?.lat - 0.04,
    longitudeMax: coords?.lng + 0.08,
    longitudeMin: coords?.lng - 0.08,
  };
  const searchByRegion = () => {
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

  return (
    <>
      <div
        className="locations-img"
        onClick={searchByRegion}
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
