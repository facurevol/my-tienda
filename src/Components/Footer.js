import React from "react";

import { Link } from 'react-router-dom';
import "./Footer.css";

import instagram from "./../img/instagram.svg";
import facebook from "./../img/facebook.svg";
import logo from "./../img/logoFooter.svg";


function Footer() {
    return (
        <div className="desktop-container-footer">
            <div className="logo-container-footer">
                <Link to="/">
                    <img className="logo-ecommerce-footer" src={logo} alt="Casa Pelgo" />
                </Link>
            </div>
            <hr className="line-redes"></hr>
            <div className="container-logo-redes">
                <div className="text-rigts"><p>Derechos reservados Casa Pelgo®</p></div>
                <div className="logo-redes">
                    <a href="https://www.instagram.com/casapelgo/">
                        <img src={instagram} href="https://www.facebook.com/casapelgo" alt="Casa Pelgo" />
                    </a>
                    <a href="https://www.facebook.com/casapelgo">
                        <img src={facebook} href="https://www.facebook.com/casapelgo" alt="Casa Pelgo" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;