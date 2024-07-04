import "./Header.scss"
import menu from "../../assets/icons/menu.png";

function Header() {
    return  (
        <header className="header">
            <img src={menu} className="header__menu header__menu--conditional"></img>
            <p className="header__title">HearMe</p>
        </header>
    )
}

export default Header;