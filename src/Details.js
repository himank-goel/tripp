import React, { Component } from "react";
import Header from "./Header";
import { Form, Text, Select } from "guestbell-forms";
import "./guestbell-forms.css";

class Details extends Component {
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
                      <Text required={true} label="Destination" />
                    </div>
                    <div className="multiple-fields">
                      <Text required={true} label="Start Date" />
                      <Text required={true} label="End Date" />
                    </div>
                    <div>
                      <p>Flexible Travel Dates</p>
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
                      <Text required={true} label="Start Date" />
                      <Text required={true} label="End Date" />
                    </div>
                    <div>
                      <p>Flexible Travel Dates</p>
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
              justify-content: space-between;
            }
            .set--one, set--two {
              display: flex;
              flex-direction: column;
              padding: 0 10px; 
            }
            .multiple-fields {
              display: flex;
              flex-direction: row;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Details;
