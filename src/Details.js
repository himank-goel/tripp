import React, { Component } from "react";
import Header from "./Header";
import Inputs from "./Inputs";
import OptionLayout from "./OptionLayout";

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
      dataReceived: true,
      roomList: [
        { id: 101, location: "New Delhi", address: "Aerocity", type: "Standard", price: 8150, capacity: 3, numberOfRooms: 3 },
        { id: 111, location: "New Delhi", address: "Greater Kailash", type: "Standard", price: 7450, capacity: 2, numberOfRooms: 4 },
        { id: 121, location: "New Delhi", address: "Noida", type: "Standard", price: 9250, capacity: 5, numberOfRooms: 2 }
      ]
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
          <OptionLayout roomList={this.state.roomList} checkIn={this.state.checkIn} checkOut={this.state.checkOut} />
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
