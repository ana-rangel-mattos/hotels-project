import "./Header.css";
import {useContext, useState} from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import {ThemeContext} from "../../context/ThemeContext.jsx";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen((open) => !open);
  }

  const { handleToggleTheme } = useContext(ThemeContext);

  return(
    <header className="header">
      <p className="logo">Hotels</p>
      <div className="toggle-theme" onClick={handleToggleTheme}></div>
      <HiMenu className="menu-bars" onClick={handleToggleMenu}/>
      <nav className={`${isMenuOpen ? "nav-mobile" : "nav"}`}>
        <ul>
          <li>
            <Link to="/hoteis">Home</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastrar Hotel</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;