import React, { Component } from "react";
import Header from "./Header";
import Inputs from "./Inputs";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: "",
      checkIn: "",
      checkOut: "",
      roomType: "",
      adults: 0,
      children: 0,
      dataReceived: false
    };
    this.setFields = this.setFields.bind(this);
  }

  setFields(destination, checkIn, checkOut, roomType, adults, children) {
    this.setState({
      destination,
      checkIn,
      checkOut,
      roomType,
      adults,
      children,
      dataReceived: true
    });
  }

  render() {
    return (
      <div className="outer--main">
        <Header />
        {!this.state.dataReceived ? (
          <Inputs setFields={this.setFields} />
        ) : (
          <div>helo</div>
        )}
        <style>
          {`
            
          `}
        </style>
      </div>
    );
  }
}

export default Details;
