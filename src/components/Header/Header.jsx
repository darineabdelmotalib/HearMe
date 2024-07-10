import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.png";

function Header() {

  return (
    <header className="header">
        <img src={logo} className="header__logo"></img>
        <Link to="/" className="header__title-link">
          <p className="header__title">HearMe</p>
        </Link>
    </header>
  );
}

export default Header;
