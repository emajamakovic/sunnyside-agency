import React from "react";
import '../styles/About.css';

export default function StandOut() {
    return (
        <div className="standout d-flex align-items-center">
            <div className="photo">
                <img src={require('../images/desktop/image-stand-out.jpg')} />

            </div>
            <div className="informations d-flex align-items-center">
                <div className="container2">
                    <div className="about-info">
                        <div className="pb-3"><h1>  Stand out to the right audience</h1></div>
                        <div className="pb-3"><p>   Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, 
                            we’ll build and extend your brand in digital places.</p></div>
                        <div><button>Learn more</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}