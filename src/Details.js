import React, { Component } from "react";
import Header from "./Header";
import arrow from "./static/arrow.svg";
import { Link } from "react-router-dom";
import { Form, Text, Select } from "guestbell-forms";
import "./guestbell-forms.css";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: "",
      checkIn: "",
      checkOut: "",
      roomType: "",
      adults: 0,
      children: 0
    };
    this.handleDestination = this.handleDestination.bind(this);
    this.handleCheckIn = this.handleCheckIn.bind(this);
    this.handleCheckOut = this.handleCheckOut.bind(this);
    this.handleAdults = this.handleAdults.bind(this);
    this.handleChildren = this.handleChildren.bind(this);
    this.handleRoomType = this.handleRoomType.bind(this);
    this.validate = this.validate.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onFocus(e) {
    e.currentTarget.type = "date";
  }

  handleDestination(event) {
    this.setState({
      destination: event.target.value
    });
  }

  handleCheckIn(event) {
    this.setState({
      checkIn: event.target.value
    });
  }

  handleCheckOut(event) {
    this.setState({
      checkOut: event.target.value
    });
  }

  handleRoomType(event) {
    this.setState({
      roomType: event.target.value
    });
  }

  handleAdults(event) {
    this.setState({
      adults: parseInt(event.target.value)
    });
  }

  handleChildren(event) {
    this.setState({
      children: parseInt(event.target.value)
    });
  }

  validate() {
    if (
      this.state.destination === "" ||
      this.state.roomType === "" ||
      this.state.checkIn === "" ||
      this.state.checkOut === "" ||
      this.state.children === 0 ||
      this.state.adults === 0
    ) {
      alert("One or more required fields are empty");
    }
    else if ((this.state.adults + this.state.children) > 120) {
      alert("Total booking capacity exceeded");
    }
  }

  render() {
    return (
      <div className="outer--main">
        <Header />
        <div className="inner--main">
          <div className="container--outer">
            <div className="content">
              <div className="heading">
                <span>Where do you want to Stay ?</span>
              </div>
              <Form className="container">
                <div className="form">
                  <div className="set--one">
                    <div>
                      <Select
                        className="select-dest"
                        required={true}
                        label={"Destination"}
                        values={[
                          { value: "delhi", label: "New Delhi" },
                          { value: "mumbai", label: "Mumbai" },
                          { value: "hydrabad", label: "Hydrabad" },
                          { value: "kolkata", label: "Kolkata" }
                        ]}
                        onChange={this.handleDestination}
                      />
                    </div>
                    <div className="multiple-fields">
                      <Text
                        required={true}
                        label="Check In"
                        className={
                          this.state.checkIn === ""
                            ? "text-field-error special-cases"
                            : "special-cases"
                        }
                        onFocus={this.onFocus}
                        onChange={this.handleCheckIn}
                        value={this.state.checkIn}
                      />
                      <img src={arrow} alt="arrow" className="arrow-img" />
                      <Text
                        required={true}
                        label="Check Out"
                        className={
                          this.state.checkOut === ""
                            ? "text-field-error special-cases"
                            : "special-cases"
                        }
                        onFocus={this.onFocus}
                        onChange={this.handleCheckOut}
                        value={this.state.checkOut}
                      />
                    </div>
                  </div>
                  <div className="set--two">
                    <div>
                      <Select
                        required={true}
                        label={"Room Type"}
                        values={[
                          { value: "S", label: "Standard" },
                          { value: "D", label: "Deluxe" },
                          { value: "SD", label: "Super Deluxe" }
                        ]}
                        onChange={this.handleRoomType}
                      />
                    </div>
                    <div className="multiple-fields">
                      <Text
                        required={true}
                        label="Adults"
                        className={
                          this.state.adults === ""
                            ? "text-field-error special-cases-2"
                            : "special-cases-2"
                        }
                        onChange={this.handleAdults}
                        value={this.state.adults}
                        type={'number'}
                      />
                      <Text
                        required={true}
                        label="Children"
                        className={
                          this.state.children === ""
                            ? "text-field-error special-cases-2"
                            : "special-cases-2"
                        }
                        onChange={this.handleChildren}
                        value={this.state.children}
                        type={'number'}
                      />
                    </div>
                    <div className="btn-postn">
                      {/* <Link to="/details" replace> */}
                      <button
                        type="submit"
                        className="circle"
                        value=""
                        onClick={this.validate}
                      />
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <style>
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
            .form {
              margin-top: 20px;
              display: flex;
              flex-direction: row;
              justify-content: space-around;
            }
            .set--one, .set--two {
              display: flex;
              flex-direction: column;
              width: 45%;
            }
            .multiple-fields {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
            }
            option {
              background: #a692ff;
              font-weight: 300;
            }
            .select-dest option {
              background: #8fadfe;
            }
            .arrow-img {
              width: 30px;
              height: 9%;
              margin: 0 0.8em;
            }
            .special-cases {
              margin-right: 0;
              max-width: 38%;
            }
            .special-cases-2 {
              max-width: 42%;
            }
            .btn-postn {
              display: flex;
              flex-direction: row-reverse;
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
              content: "Submit";
              display: block;
              color: #a494ff;
              font-size: 15px;
              position: absolute;
              top: 43%;
              left: 38%;
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

export default Details;
