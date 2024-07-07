import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import menu from "../../assets/icons/menu.png";

function Header() {
  const [shouldShowMenu, setShouldShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const hideMenuPaths = ['/', '/login', '/signup', '/getstarted', '/about'];
    const currentPath = location.pathname;

    if (currentPath.includes("/dashboard") || !hideMenuPaths.includes(currentPath)) {
      setShouldShowMenu(true);
    } else {
      setShouldShowMenu(false);
    }
  }, [location.pathname]);

  return (
    <header className="header">
      {shouldShowMenu && (
        <img
          src={menu}
          className="header__menu header__menu--conditional"
          alt="menu"
        />
      )}
      <p className="header__title">HearMe</p>

      
      
    </header>
  );
}

export default Header;
