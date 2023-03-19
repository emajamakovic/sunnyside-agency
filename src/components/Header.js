import React from "react";
import Logo from '../images/logo.svg';
import Arrow from '../images/icon-arrow-down.svg';
import '../styles/Header.css';


export default function Navbar() {
    return (
        <div className="header">
           <img className="position-absolute main-photo" src={require('../images/desktop/image-header.jpg')} />
           <div className="position-relative d-flex w-100 container1">
            <img className="logo position-absolute" src={Logo} />
            <div className="position-absolute options">
                <ul className="d-flex">
                    <li className="li-item">About</li>
                    <li className="li-item">Services</li>
                    <li className="li-item">Projects</li>
                    <li className="li-contact">Contact</li>
                </ul>
            </div>
           </div>
           <div className="d-flex w-100 heading"><p className="position-relative">We are creatives</p></div>
           <div className="d-flex w-100 arrow"><img className="position-relative"  src={Arrow} /></div>
            
        </div>
    )
}