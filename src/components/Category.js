import React from "react";
import '../styles/Category.css';

export default function Category() {
    return (
        <div className="d-flex align-items-center">
            <div className="photo">
                <img className="position-absolute" src={require('../images/desktop/image-graphic-design.jpg')} />
                <div className="position-relative graphic-design ">
                    <div className="position-absolute">
                        <h2 className="d-flex justify-content-center">Graphic design</h2>
                        <p className="mt-4">  Great design makes you memorable. We deliver artwork that underscores your 
                            brand message and captures potential clients’ attention.</p>
                        </div>
                </div>
            </div>
            <div className="photo">
                <img className="position-absolute" src={require('../images/desktop/image-photography.jpg')} />
                <div className="position-relative photography ">
                    <div className="position-absolute">
                        <h2 className="d-flex justify-content-center">Photography</h2>
                        <p className="mt-4">Increase your credibility by getting the most stunning, 
                        high-quality photos that improve your business image.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}