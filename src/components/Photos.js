import React from "react";

export default function Photos() {
    return (
        <div className="photos d-flex">
            <img src={require('../images/desktop/image-gallery-milkbottles.jpg')}/>
            <img src={require('../images/desktop/image-gallery-orange.jpg')}/>
            <img src={require('../images/desktop/image-gallery-cone.jpg')}/>
            <img src={require('../images/desktop/image-gallery-sugarcubes.jpg')}/>
        </div>
    )
}