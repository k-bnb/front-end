import { React } from "react";
// import def from "../../../../../../../../AppData/Local/Microsoft/TypeScript/4.1/node_modules/ajv/dist/vocabularies/format/format";
import { InfoWindow, withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

function GoogleMapUse() {
  // const [locate, setLocate] = useState({
  const state={
    address: '',
    city: '',
    area: '',
    state: '',
    zoom: 15,
    height: 400,
    mapPosition: {
      lat: 0,
      lng: 0,
    },
    markerPosition: {
      lat: 0,
      lng: 0,
    },
  };
      

  const MapWithAMarker = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker position={{ lat: -34.397, lng: 150.644 }}>
        <InfoWindow>
          <div>
            hello
          </div>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  ));
  return(
    <>
      <MapWithAMarker
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_xBt2bNTPYZU5k4EbxIkTfsrsHgpZnaE&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      />
    </>
  );
}



export default GoogleMapUse;