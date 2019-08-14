/* eslint react/prop-types: 0 */
import React from "react";

class AddressField extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="addressContainer">
        <h1>
          {this.props.address.formatted_address}
        </h1>
      </div>
    );
  }
}

export default AddressField;
