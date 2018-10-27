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
      dataReceived: false,
      roomList: []
    };
    this.setFields = this.setFields.bind(this);
    this.dataNotRecieved = this.dataNotRecieved.bind(this);
  }

  async setFields(destination, checkIn, checkOut, roomType, adults, children) {
    let response = await fetch(`http://1ab83ab7.ngrok.io/get-rooms?location=${destination}&type=${roomType}&adults=${adults}&children=${children}&checkInTime=${checkIn}&checkOutTime=${checkOut}`);
    if(response.status === 400) {
      alert("Check your input fields");
      return;
    } 
    let roomList = await response.json();
    
    console.log(roomList);

    this.setState({
      destination,
      checkIn,
      checkOut,
      roomType,
      adults,
      children,
      roomList,
      dataReceived: true
    });
  }

  dataNotRecieved(){
    this.setState({
      dataReceived: false
    });
  }

  render() {
    return (
      <div className="outer--main">
        <Header />
        {!this.state.dataReceived ? (
          <Inputs setFields={this.setFields} />
        ) : (
          <OptionLayout
            roomList={this.state.roomList}
            checkIn={this.state.checkIn}
            checkOut={this.state.checkOut}
            dataNotRecieved={this.dataNotRecieved}
          />
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
