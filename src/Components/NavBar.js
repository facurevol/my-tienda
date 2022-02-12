
import React from "react";
import "./NavBar.css";
import logo from "./../img/casaPelgo.svg";
import CartWidget from "./CartWidget.js";
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="desktop-container">

      <div className="logo-container">
        <Link to="/">
          <img className="logo-ecommerce" src={logo} alt="Casa Pelgo" />
        </Link>
      </div>
      <ul className="nav-container">
        <li className="nav"><NavLink to="/">Home</NavLink></li>
        <li className="nav"><NavLink to="/categoria/cocina">Cocina</NavLink></li>
        <li className="nav"><NavLink to="/categoria/aromas">Aromas</NavLink></li>
        <li className="nav"><NavLink to="/categoria/hogar">Hogar</NavLink></li>
        <li className="nav"><NavLink to="/categoria/limpieza">Limpieza</NavLink></li>
      </ul>
      <div>
        <CartWidget />
      </div>

    </div>

  );
};

export default NavBar;
