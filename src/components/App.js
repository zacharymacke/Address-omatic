/* eslint react/prop-types: 0 */
import React from 'react';
import '../styles/App.css';
import MapWrapper from './Map.js';

class App extends React.Component {
  render(){
    return (
      <div>
        <MapWrapper
        />
      </div>
    )
  }
}

export default App;
