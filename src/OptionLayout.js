import React, { Component } from "react";
import PaymentPage from "./PaymentPage";

function RoomCard({ room, open, toggleDetailsDisplay, bookRoom }) {
  return (
    <div className="max--outer">
      <div
        className={
          room.id === open ? "card--outer--main clicked" : "card--outer--main"
        }
      >
        <div className="card--outer">
          <div className="card--inner">
            <div className="left-details">
              <div className="location-details">
                <span className="hotel-name">Hotel Tripp.</span>
                <span>
                  <span className="address-details">{room.address}, </span>
                  <span>{room.location}</span>
                </span>
              </div>
              <div className="price-details">
                <span className="price">₹ {room.price}</span>
              </div>
              <div className="more-details">
                <span
                  onClick={() => {
                    toggleDetailsDisplay(room.id);
                  }}
                  className="more-details"
                >
                  {room.id === open ? "less details" : "more details"}
                </span>
              </div>
            </div>
            <div className="right-details">
              <button
                type="submit"
                className="circle"
                value=""
                onClick={() => {
                  bookRoom(room.id, room.price, room.numberOfRooms);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          room.id === open
            ? "further-details--outer"
            : "further-details--outer closed-further"
        }
      >
        <div className="further-details--inner">
          <div className="further-left">
            <div>Room:</div>
            <div>No of Rooms:</div>
            <div>Capacity/Room:</div>
          </div>
          <div className="further-right">
            <div>{room.type}</div>
            <div>{room.numberOfRooms}</div>
            <div>{room.capacity}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

class OptionLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomList: this.props.roomList,
      checkIn: this.props.checkIn,
      checkOut: this.props.checkOut,
      id: null,
      price: null,
      noOfRooms: null,
      openRoomDetails: 0,
      paymentPage: false
    };
    this.toggleDetailsDisplay = this.toggleDetailsDisplay.bind(this);
    this.bookRoom = this.bookRoom.bind(this);
  }

  toggleDetailsDisplay(roomId) {
    if (this.state.openRoomDetails !== roomId) {
      this.setState({
        openRoomDetails: roomId
      });
    } else {
      this.setState({
        openRoomDetails: 0
      });
    }
  }

  bookRoom(id, price, noOfRooms) {
    this.setState({
      paymentPage: true,
      id,
      price,
      noOfRooms
    });
  }

  render() {
    const RoomCards = this.state.roomList.map(room => {
      return (
        <RoomCard
          room={room}
          open={this.state.openRoomDetails}
          toggleDetailsDisplay={this.toggleDetailsDisplay}
          bookRoom={this.bookRoom}
        />
      );
    });
    return (
      <div>
        <div className="inner--main">
          <div className="container--outer">
            {this.state.roomList.length !== 0 ? (
              !this.state.paymentPage ? (
                <div className="content">
                  <div className="heading">
                    <span>You can choose from the following</span>
                  </div>
                  <div className="cards--container">{RoomCards}</div>
                </div>
              ) : (
                <div className="content">
                  <div className="heading">
                    <span>Enter Payment Details</span>
                  </div>
                  <PaymentPage
                    checkIn={this.state.checkIn}
                    checkOut={this.state.checkOut}
                    id={this.state.id}
                    noOfRooms={this.state.noOfRooms}
                    price={this.state.price}
                  />
                </div>
              )
            ) : (
              <div className="content">
                <div className="heading">
                  <span>We found no available rooms</span>
                </div>
                <div className="sub-heading">
                  <span>
                    You can alter you search queries by clicking below
                  </span>
                </div>
                <div className="btn-postn">
                  <button
                    type="submit"
                    className="circle circle--new"
                    onClick={this.props.dataNotRecieved}
                    value=""
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <style jsx>
          {`
            .container--outer {
              width: 80%;
              margin: 0 auto;
              min-height: 360px;
              margin-top: 50px;
              background: rgba(255, 255, 255, 0.3);
              border-radius: 30px;
            }
            .content {
              padding: 30px 60px;
              color: white;
              font-family: Sofia;
            }
            .heading {
              font-weight: 700;
              font-size: 30px;
            }
            .sub-heading {
              font-weight: 500;
              font-size: 20px;
              margin-top: 20px;
            }
            .cards--container {
              display: flex;
              justify-content: space-around;
              flex-wrap: wrap;
            }
            .max--outer {
              width: 40%;
            }
            .card--outer--main {
              height: 160px;
              margin-top: 30px;
              background: rgba(255, 255, 255, 0.3);
              border-radius: 15px;
              padding: 15px 20px;
              transition: all 0.3s ease-in;
            }
            .clicked {
              background: rgba(255, 255, 255, 0.5);
              border-radius: 15px 15px 0 0;
              -webkit-box-shadow: 0px 5px 38px -9px rgba(0, 0, 0, 0.75);
              -moz-box-shadow: 0px 5px 38px -9px rgba(0, 0, 0, 0.75);
              box-shadow: 0px 9px 25px -8px rgba(0, 0, 0, 0.75);
            }
            .card--outer {
              height: 100%;
            }
            .card--inner {
              display: flex;
              justify-content: space-between;
              height: 100%;
              font-size: 19px;
              font-weight: 300;
            }
            .left-details {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .location-details {
              display: flex;
              flex-direction: column;
            }
            .hotel-name {
              font-size: 22px;
            }
            .address-details,
            .price {
              font-weight: 500;
            }
            .more-details {
              font-size: 15px;
              font-weight: 200;
              text-decoration: underline;
            }
            .right-details {
              display: flex;
              flex-direction: column-reverse;
            }
            .circle {
              margin-top: 20px;
              width: 135px;
              height: 30px;
              border-radius: 7px;
              box-shadow: inset 0 0 0 60px #fff;
              position: relative;
              border: none;
              transition: all 0.5s ease-in-out;
            }
            .circle:focus {
              outline: none;
            }
            .circle:hover {
              background: transparent;
              box-shadow: inset 0 0 0 2px #fff;
              cursor: pointer;
            }
            .circle:before {
              content: "Book Now";
              display: block;
              color: #a494ff;
              font-size: 15px;
              position: absolute;
              top: 45%;
              left: 29%;
              margin: -9px 0 0 -5px;
              transition: all 0.5s ease-in-out;
            }
            .circle--new:before {
              content: "Alter";
              font-size: 18px;
              font-weight: 500;
              top: 39%;
              left: 38%;
            }
            .circle:hover:before {
              color: #fff;
            }
            .more-details {
              cursor: pointer;
            }
            .further-details--outer {
              height: 120px;
              background: rgba(255, 255, 255, 0.3);
              border-radius: 0 0 15px 15px;
              padding: 15px 20px;
              transition: opacity 0.5s ease-in, height 0.3s ease-in;
              opacity: 1;
            }
            .closed-further {
              height: 0;
              opacity: 0;
              transition: opacity 0.3s ease-in, height 0.5s ease-in;
            }
            .further-details--inner {
              display: flex;
              font-size: 19px;
              font-weight: 300;
            }
            .further-right {
              font-weight: 400;
              margin-left: 30px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default OptionLayout;
