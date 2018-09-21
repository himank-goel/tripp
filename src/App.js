import React, { Component } from "react";
import logo from "./static/logo.svg";
import illustration from "./static/lp-image.svg";

class App extends Component {
  render() {
    return (
      <div className="outer--main">
        <div className="header">
          <img src={logo} alt="Tripp. Logo" className="logo" />
        </div>
        <div className="content--outer">
          <div className="text-content">
            <div className="text">
              <div className="big-heading">
                <span>
                  Book Your
                  <br /> Stay
                </span>
              </div>
              <div className="main-text">
                <span>
                  At hotels, inns, B&B’s,
                  <br />
                  guest houses and apartments
                </span>
              </div>
              <div>
                <button type="submit" class="circle" value="" />
              </div>
            </div>
          </div>
          <div className="image-content">
            <div>
              <img
                src={illustration}
                alt="Landing Page Illustration"
                className="lp-image"
              />
            </div>
          </div>
        </div>
        <style>
          {`
            .outer--main {
              color: white;
              font-family: Sofia;
            }
						.header {
              flex-direction: column;
              display: flex;
              padding: 30px 54px;
						}
						.logo {
							width: 150px;
            }
            .content--outer {
              display: flex;
              align-items: flex-start;
              flex-direction: row;
              justify-content: space-between;
              padding-top: 2%;
            }
            .text-content, .image-content {
              flex: 1;
            }
            .text {
              padding-left: 108px;
              padding-top: 90px;
              display: flex;
              flex-direction: column;
            }
            .big-heading {
              font-weight: 700;
              font-size: 45px; 
              line-height: 45px;
            }
            .main-text {
              font-weight: 200;
              font-size: 25px;
              padding-top: 15px;
            }
            .circle {
              width: 60px;
              height: 60px;
              margin-top: 15px;
              border-radius: 50%;
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
            }
            .circle:before {
              content:"\\25BA";
              display: block;
              color: #44abff;
              font-size: 15px;
              position: absolute;
              top: 50%;
              left: 50%;
              margin: -9px 0 0 -5px;
              transition: all 0.5s ease-in-out;
            }
            .circle:hover:before {
              color: #fff;
            }
            .lp-image {
              max-width: 700px;
            }
					`}
        </style>
      </div>
    );
  }
}

export default App;
