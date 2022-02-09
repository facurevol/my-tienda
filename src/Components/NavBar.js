
import React from "react";
import "./NavBar.css";
import logo from "./../img/casaPelgo.svg";
import CartWidget from "./CartWidget.js";
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav">

      <div className="imgNavBar">
        <Link to="/">
          <img className="logo" src={logo} alt="Casa Pelgo" />
        </Link>
      </div>

      <ul className="nav">
        <li className="nav"><NavLink to="/">Home</NavLink></li>
        <li className="nav"><NavLink to="/categoria/cocina">Cocina</NavLink></li>
        <li className="nav"><NavLink to="/categoria/aromas">Aromas</NavLink></li>
        <li className="nav"><NavLink to="/categoria/bano">Baño</NavLink></li>
        <li className="nav"><NavLink to="/categoria/hogar">Hogar</NavLink></li>
        <li className="nav"><NavLink to="/categoria/limpieza">Limpieza</NavLink></li>
      </ul>
      <div className="nav">
        <CartWidget />
      </div>

    </div>

  );
};

export default NavBar;
