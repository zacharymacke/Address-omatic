/* eslint react/prop-types: 0 */
import React from "react";
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import MapWrapper from './Map.js'
import '../styles/search.scss'

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
    //console.log(props)
  }
  handleChange = address => {
    this.setState({ address });
  };
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => 
       this.props.callBack(address, geocodeByAddress(address), 
         getLatLng(results[0]))
      )
  };
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>

            <div className="container">
              <div className="container__item">
                <form className="form">
                  <input
                    {...getInputProps({
                      placeholder: 'Where would you like to send?',
                      className: 'form__field',
                    })}
                  />
                  <button 
                    type='button'
                    className="btn btn--primary btn--inside uppercase"
                  >Seach</button>
                </form>
            </div>
          </div>

            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                return (
                  <div
                    key
                    {...getSuggestionItemProps(suggestion, {
                      className: 'suggestion-item'
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>

          </div>
        )}
      </PlacesAutocomplete>
    );

  }
}

export default LocationSearchInput
