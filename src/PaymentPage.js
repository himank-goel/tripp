import React, { Component } from "react";
import { Form, Text } from "guestbell-forms";
import "./guestbell-forms.css";

class PaymentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkIn: this.props.checkIn,
      checkOut: this.props.checkOut,
      id: this.props.id,
      noOfRooms: this.props.noOfRooms,
      price: this.props.price,
      name: "",
      phoneNumber: "",
      expDate: "",
      cvc: "",
      email: "",
      cardNo: ""
    };
    this.handleCvc = this.handleCvc.bind(this);
    this.handleExpiry = this.handleExpiry.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleCard = this.handleCard.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.confirmBooking = this.confirmBooking.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.modalRef = React.createRef();
  }

  onFocus(e) {
    e.currentTarget.type = "month";
  }

  handleName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handlePhone(event) {
    this.setState({
      phoneNumber: parseInt(String(event.target.value).substring(0, 10))
    });
  }

  handleExpiry(event) {
    this.setState({
      expDate: event.target.value
    });
  }

  handleCvc(event) {
    this.setState({
      cvc: parseInt(String(event.target.value).substring(0, 3))
    });
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleCard(event) {
    this.setState({
      cardNo: parseInt(String(event.target.value).substring(0, 16))
    });
  }

  confirmBooking() {
    const data = {
      roomId: this.state.id,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phoneNumber,
      cardDetails: this.state.cardNo,
      rooms: this.state.noOfRooms,
      checkInTime: this.state.checkIn,
      checkOutTime: this.state.checkOut,
      price: this.state.price
    };
    let response = fetch("http://1ab83ab7.ngrok.io/book", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
    if(response.status === 400) {
      alert("Some error happened");
      return;
    }
    const modal = this.modalRef.current;
    modal.style.display = "block";
  }

  closeModal() {
    const modal = this.modalRef.current;
    modal.style.display = "none";
  }

  render() {
    return (
      <div>
        <div>
          <Form className="form--container">
            <div className="left--column">
              <Text
                required={true}
                label="Name"
                value={this.state.name}
                onChange={this.handleName}
              />
              <Text
                required={true}
                label="Phone Number"
                type="number"
                value={this.state.phoneNumber}
                onChange={this.handlePhone}
              />
              <div className="middle--container">
                <Text
                  className="special-cases"
                  required={true}
                  label="Expiry Date"
                  onFocus={this.onFocus}
                  value={this.state.expDate}
                  onChange={this.handleExpiry}
                />
                <Text
                  className="special-cases"
                  required={true}
                  label="CVC"
                  value={this.state.cvc}
                  onChange={this.handleCvc}
                />
              </div>
            </div>
            <div className="right--column">
              <Text
                required={true}
                label="Email"
                type="email"
                onChange={this.handleEmail}
              />
              <Text
                required={true}
                label="Card Number"
                onChange={this.handleCard}
              />
              <div className="btn-handler">
                <button
                  type="submit"
                  className="circle-new"
                  onClick={this.confirmBooking}
                  value=""
                />
              </div>
            </div>
          </Form>
          <div id="myModal" class="modal" ref={this.modalRef}>
            <div class="modal-content">
              <span class="close" onClick={this.closeModal}>
                &times;
              </span>
              <p className="confirmed">Booking Confirmed!</p>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .confirmed {
              color: black;
              margin: 0 auto;
              font-size: 40px;
            }
            .form--container {
              display: flex;
              flex-direction: row;
              justify-content: space-around;
            }
            .left--column,
            .right--column {
              display: flex;
              flex-direction: column;
              width: 45%;
            }
            .middle--container {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            }
            .special-cases {
              width: 45%;
            }
            .circle-new {
              margin-top: 30px;
              width: 135px;
              height: 30px;
              border-radius: 7px;
              box-shadow: inset 0 0 0 60px #fff;
              position: relative;
              border: none;
              transition: all 0.5s ease-in-out;
            }
            .circle-new:focus {
              outline: none;
            }
            .circle-new:hover {
              background: transparent;
              box-shadow: inset 0 0 0 2px #fff;
              cursor: pointer;
            }
            .circle-new:before {
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
            .circle-new:hover:before {
              color: #fff;
            }
            .btn-handler {
              display: flex;
              flex-direction: row-reverse;
            }
            .modal {
              display: none; /* Hidden by default */
              position: fixed; /* Stay in place */
              z-index: 1; /* Sit on top */
              padding-top: 100px; /* Location of the box */
              left: 0;
              top: 0;
              width: 100%; /* Full width */
              height: 100%; /* Full height */
              overflow: auto; /* Enable scroll if needed */
              background-color: rgb(0, 0, 0); /* Fallback color */
              background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
            }
            .modal-content {
              background-color: #fefefe;
              margin: auto;
              padding: 20px;
              border: 1px solid #888;
              width: 70%;
              height: 170px;
            }

            /* The Close Button */
            .close {
              color: #aaaaaa;
              float: right;
              font-size: 28px;
              font-weight: bold;
            }

            .close:hover,
            .close:focus {
              color: #000;
              text-decoration: none;
              cursor: pointer;
            }
          `}
        </style>
      </div>
    );
  }
}

export default PaymentPage;
