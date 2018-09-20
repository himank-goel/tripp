import React, { Component } from "react";
import logo from "./static/logo.svg";

class App extends Component {
  render() {
    return (
      <div className="outer--main">
        <div className="header">
          <img src={logo} alt="Tripp. Logo" className="logo" />
        </div>
        <style>
          {`
						.header {
							padding-left: 54px;
							padding-top: 30px;
						}
						.logo {
							width: 130px;
						}
					`}
        </style>
      </div>
    );
  }
}

export default App;
