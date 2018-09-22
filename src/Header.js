import React, { Component } from "react";
import logo from "./static/logo.svg";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link to="/" replace>
            <img src={logo} alt="Tripp. Logo" className="logo" />
          </Link>
        </div>
        <style>
          {`      
            .header {
                flex-direction: column;
                display: flex;
                align-items: center;
                padding: 30px 54px;
            }
            .logo {
                width: 150px;
            }
            @media only screen and (min-width:961px) {
                .header {
                    align-items: flex-start;
                }
            }
         `}
        </style>
      </div>
    );
  }
}

export default Header;
