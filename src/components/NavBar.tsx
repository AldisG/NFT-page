import React, { FC, useState } from 'react';
import { MdClose, GiHamburgerMenu } from '../util/importedIcons';
import logo from '../img/logo.png';
import LightThemeBtn from './LightThemeBtn';

type Props = {
  changeTheme: () => void;
  theme: string;
};

const NavBar: FC<Props> = ({ changeTheme, theme }) => {
  const toggleNavBar = () => {
    setnavState(!navState);
  };

  const [navState, setnavState] = useState(false);
  return (
    <nav className="nav" id="nav">
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className={`links-container ${navState ? 'nav-visible' : ''}`}>
        <ul className="links">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Launch</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <LightThemeBtn theme={theme} changeTheme={changeTheme} />
        </ul>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          {navState ? (
            <MdClose onClick={toggleNavBar} />
          ) : (
            <GiHamburgerMenu onClick={toggleNavBar} />
          )}
        </div>
        {/* <div className="mode">
            <LightThemeBtn theme={theme} changeTheme={changeTheme} />
          </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
