import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import menu from "../../assets/icons/menu.png";

function Header() {


  return (
    <header className="header">
      <p className="header__title">HearMe</p>
    </header>
  );
}

export default Header;
