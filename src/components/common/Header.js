import React from "react";
import Logotype from "./Logotype.png";
import "./Header.css";
import HeaderBanner from "./HeaderBanner";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <img src={Logotype} alt="logo " />
        </div>
        <nav className="header__navigation">
          <a href="/">Home</a>
          <a href="/">Recipes</a>
          <a href="/">Article</a>
          <a href="/">Contact</a>
          <a href="/">Purchase</a>
        </nav>
      </div>
      <HeaderBanner />
    </>
  );
};

export default Header;
