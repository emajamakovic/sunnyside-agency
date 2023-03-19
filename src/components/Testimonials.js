import React from "react";
import emily from '../images/image-emily.jpg';
import jennie from '../images/image-jennie.jpg';
import thomas from '../images/image-thomas.jpg';
import '../styles/Testimonials.css';


export default function Testimonials(props) {
    return (
        <div className="client">
            <div><img src={require(`../images/${props.img}`)}/></div>
            <div className='desc pt-5'><p>{props.desc}</p></div>
            <div className='name pt-5'><a>{props.name}</a></div>
            <div className='proffesion pt-2'><p>{props.proffesion}</p></div>
        </div>
    )
}