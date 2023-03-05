import React from "react";

export default function About() {
    return (
        <div className="about d-flex align-items-center">
            <div className="informations d-flex align-items-center">
                <div className="container2">
                    <div className="about-info">
                        <div className="pb-3"><h1>Transform your brand</h1></div>
                        <div className="pb-3"><p> We are a full-service creative agency specializing in helping brands grow fast. 
                        Engage your clients through compelling visuals that do most of the marketing for you.</p></div>
                        <div><button>Learn more</button></div>
                    </div>
                </div>
            </div>
            <div className="photo">
                <img src={require('../images/desktop/image-transform.jpg')} />

            </div>
        </div>
    )
}


 