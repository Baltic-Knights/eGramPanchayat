import React, { Component } from 'react'
import './styles.css';
import Geocode from 'react-geocode';
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
Geocode.setApiKey("AIzaSyCAIcQc27TZC5bpIoBt_2AnU5lHGIiZQ2s");
Geocode.enableDebug();
class Maps extends Component {
  // state = {
  //   address: '',
  //   city: '',
  //   area: '',
  //   state: '',
  //   zoom: 15,
  //   height: 400,
  //   mapPosition: {
  //     lat: 0,
  //     lng: 0
  //   },
  //   markerPosition: {
  //     lat: 0,
  //     lng: 0
  //   }
  // }
  // getCity = (addressArray) => {
  //   let city = "";
  //   for (let index = 0; index < addressArray.length; index++) {
  //     if (addressArray[index].types[0] && 'administrative_area_level_2' === addressArray[index].types[0]) {
  //       city = addressArray[index].long_name;
  //       return city;
  //     }
  //   }
  // }
  // MarkerDragged = (event) => {
  //   let newLat = event.latLng.lat();
  //   let newLng = event.latLng.lng();
  //   Geocode.fromLatLng(newLat, newLng)
  //     .then(response => {
  //       const address = response.results[0].formatted_address;
  //       const addressArray = response.results[0].address_components;
  //       const city = this.getCity(addressArray);
  //       console.log(city);
  //     })
  // }

  render() {
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 16.995237807472055, lng: 74.30745251030498 }}
      >
        <Marker
          draggable={true}
          onDragEnd={this.MarkerDragged}
          position={{ lat: 16.995237807472055, lng: 74.30745251030498 }}
        >
          <InfoWindow>
            <div>Tandulwadi,Sangli,Maharashtra</div>
          </InfoWindow>
        </Marker>
      </GoogleMap>));
    return (
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCAIcQc27TZC5bpIoBt_2AnU5lHGIiZQ2s&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`,marginLeft:`20px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
export default Maps;