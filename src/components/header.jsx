import React from "react";
import Timer from "./timer"
import "../styles/header.css";
import logo from "../assets/logo.jpg"

function header() {
  return(
    <div className="header-timer">
      <div className="header-parent">
        <img className="logo" src={logo} alt="Logo"/>
        <i className="fa-solid fa-arrow-left arrow"></i>
        <div><i className="fa-solid fa-lock fawesome"></i>Checkout</div>
        <div><i className="fa-regular fa-circle-question fawesome"></i><span className="help">Help</span></div>
      </div>
      <Timer/>
    </div>
  )
}

export default header;