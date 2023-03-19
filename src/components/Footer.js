import React from "react";
import Logo from '../images/logo.svg';
import Instagram from '../images/icon-instagram.svg';
import Pinterest from '../images/icon-pinterest.svg';
import Twitter from '../images/icon-twitter.svg';
import Facebook from '../images/icon-facebook.svg';
import '../styles/Footer.css';




export default function Footer() {
    return (
        <div className="footer">
            <div className="container4">
            <div className="footer-img d-flex justify-content-center"><img src={Logo} /></div>
            <div className="list justify-content-center d-flex mt-4 mb-5">
            <ul className="d-flex footer-chooser">
                    <li className="me-5">About</li>
                    <li className="me-5">Services</li>
                    <li >Projects</li>
                </ul>
            </div>
            <div className="d-flex justify-content-center social-media">
            <img className="me-4" src={Facebook} />
            <img  className="me-4" src={Instagram} />
            <img  className="me-4" src={Twitter} />
            <img src={Pinterest} />
            </div>
            </div>
        </div>
    )
}