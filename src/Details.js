import React, { Component } from "react";
import Header from "./Header";
import arrow from "./static/arrow.svg";
import { Form, Text, Select } from "guestbell-forms";
import DatePicker from "react-datepicker";
import "./guestbell-forms.css";
import '../node_modules/react-datepicker/dist/react-datepicker.css';

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
      flexible: 0
    };
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
                      <Text
                        required={true}
                        label="Destination"
                        className={
                          this.state.destination === ""
                            ? "text-field-error"
                            : ""
                        }
                      />
                    </div>
                    <div className="multiple-fields">
                    <DatePicker>
                      </DatePicker>
                      
                      <img src={arrow} alt="arrow" className="arrow-img" />
                      <Text
                        required={true}
                        label="Check Out"
                        className={
                          this.state.checkOut === ""
                            ? "text-field-error special-cases"
                            : "special-cases"
                        }
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
                      />
                      <Text
                        required={true}
                        label="Children"
                        className={
                          this.state.children === ""
                            ? "text-field-error special-cases-2"
                            : "special-cases-2"
                        }
                      />
                    </div>
                    <div>
                      <p>Submit</p>
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
          `}
        </style>
      </div>
    );
  }
}

export default Details;
