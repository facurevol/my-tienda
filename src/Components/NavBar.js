/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return <div className='nav'>
    <div className='imgNavBar'><img src='public/casaPelgo.svg' alt="Casa Pelgo" /></div>
    <ul className="nav">
      <li className="nav">
        <a className="nav" href="#!">Home</a>
      </li>
      <li className="nav">
        <a className="nav" href="#!">Accesorios</a>
      </li>
      <li className="nav">
        <a className="nav" href="#!">Deco</a>
      </li>
      <li className="nav">
        <a className="nav" href="#!">Novedades</a>
      </li>
    </ul>
  </div>
}