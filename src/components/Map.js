import React from "react";
import {Marker, withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";
import LocationSearchInput from './LocationSearchInput.js'
import getLatLng from 'react-places-autocomplete'

const Map = withScriptjs(withGoogleMap((props) =>{
  return (
    <div>
      <GoogleMap
        defaultZoom={14}
        center={ 
          { lat: props.lat, 
            lng: props.lon, 
          } 
        }
        >
        <Marker
          position={
            { lat: props.lat, 
              lng: props.lon, 
            }}
        />
      </GoogleMap>
    </div>
    );
  }
))

class MapWrapper extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      lat: 40.7128,
      lon:-74.0060,
      address: '',
      addressComponents: []
    }
    this.updateAddress = this.updateAddress.bind(this)
  }

  updateAddress = (shortAddress, longAddress, cords)=> {
    longAddress.then(results => this.setState({
      addressComponents: results[0]}, 
      function() {console.log(this.state.addressComponents)}
    ))
    cords.then(fetchedCords => this.setState({
        address: shortAddress,
        lat: fetchedCords['lat'],
        lon: fetchedCords['lng'],
    }))
  }

  render (){
    return(
      <div>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHjH4Ffk9ErA78BfBkzKlO1K-JfWdcRXc&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          lat={this.state.lat}
          lon={this.state.lon}
        />
        <LocationSearchInput callBack={this.updateAddress}/>
      </div>
    )
  }
}


export default MapWrapper;
