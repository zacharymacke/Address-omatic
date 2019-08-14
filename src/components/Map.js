/* eslint react/prop-types: 0 */
import React from "react";
import {Marker, withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";
import LocationSearchInput from './LocationSearchInput.js'
import getLatLng from 'react-places-autocomplete'
import AddressField from './AddressField.js';
import '../styles/map.css';


const Map = withScriptjs(withGoogleMap((props) =>{
  return (
    <div>
      <GoogleMap
        defaultZoom={14}
        center={ 
          { lat: props.lat, 
            lng: props.lon, 
          }}>
        {props.isMarkerShown && <Marker position={{ lat: props.lat, lng:props.lon }} onClick={props.onMarkerClick} />}
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
      addressComponents: [],
      isMarkerShown: false,
    }
    this.updateAddress = this.updateAddress.bind(this)
  }

  updateAddress = (shortAddress, longAddress, cords)=> {
    longAddress.then(results => this.setState({
      addressComponents: results[0]}
    ))
    cords.then(fetchedCords => this.setState({
        address: shortAddress,
        lat: fetchedCords['lat'],
        lon: fetchedCords['lng'],
    }))
  }

    componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }


  render (){
    return(
      <React.Fragment>
        <div className="titleBar">
          <h1 className="title">address-o-matic</h1>
        </div>
      <div className="mapContainer">
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHjH4Ffk9ErA78BfBkzKlO1K-JfWdcRXc&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div className="maptest" style={{ height: `450px` }} />}
          mapElement={<div className='mapElement' style={{ height: `100%` }} />}
          lat={this.state.lat}
          lon={this.state.lon}
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
        />
        <LocationSearchInput 
          callBack={this.updateAddress}
          className="locationInput"
        />
        <AddressField address={this.state.addressComponents}/>
      </div>
    </React.Fragment>
    )
  }
}

export default MapWrapper;
