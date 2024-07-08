import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";

function Header() {

  return (
    <header className="header">
      <Link to="/" className="header__title">
        <p className="header__title">HearMe</p>
      </Link>
    </header>
  );
}

export default Header;
