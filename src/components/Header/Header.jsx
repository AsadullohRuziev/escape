import React from "react";
import Centerword from "../Centerword/Centerword";
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        <h1>
          <a href="#">Escape.</a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#categories">CATEGORIES</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hero">
          <h1>Let's do it together.</h1>
          <p>We travel the world in search of stories. Come along for the ride.</p>
          <button className="btn">View Latest Posts</button>
      </div>
    </header>
  );
};

export default Header;
