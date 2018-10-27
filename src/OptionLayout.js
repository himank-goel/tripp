import React, { Component } from "react";

function RoomCard({ room }) {
  return (
    <div className="card--outer--main">
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
              <span>more details</span>
            </div>
          </div>
          <div className="right-details">
              <button type="submit" className="circle" value="" />
            
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
      roomList: this.props.roomList
    };
  }

  render() {
    const RoomCards = this.state.roomList.map(room => {
      return <RoomCard room={room} />;
    });
    return (
      <div>
        <div className="inner--main">
          <div className="container--outer">
            <div className="content">
              <div className="heading">
                <span>You can choose from the following</span>
              </div>
              <div className="cards--container">{RoomCards}</div>
            </div>
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
            .cards--container {
              display: flex;
              justify-content: space-around;
              flex-wrap: wrap;
            }
            .card--outer--main {
              width: 40%;
              min-height: 160px;
              margin-top: 30px;
              background: rgba(255, 255, 255, 0.3);
              border-radius: 15px;
              padding: 15px 20px;
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
            .circle:hover:before {
              color: #fff;
            }
          `}
        </style>
      </div>
    );
  }
}

export default OptionLayout;
