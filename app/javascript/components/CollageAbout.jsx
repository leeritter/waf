import React from "react";
import { Link } from "react-router-dom";
import GestureUnderline from "./GestureUnderline";

// Image assets
import img_00 from '../../assets/images/about-00.jpg';
import img_01 from '../../assets/images/about-01.jpg';
import img_02 from '../../assets/images/about-02.jpg';
import img_03 from '../../assets/images/about-03.jpg';
import img_04 from '../../assets/images/about-04.jpg';

const CollageAbout = (props) => {

    return (
        <div className="cmpt-collage">
            <div className="cmpt-collage__wrapper">
                <div className="global-container">
                    <div className="cmpt-collage__text">
                        <span className="cmpt-collage__text-title">About Us</span>
                        <GestureUnderline text="Learn More" url="/about" isLight />
                    </div>
                    <div className="cmpt-collage__images">
                        <img className="cmpt-collage__img-00" src={img_00} />
                        <img className="cmpt-collage__img-01" src={img_01} />
                        <img className="cmpt-collage__img-02" src={img_02} />
                        <img className="cmpt-collage__img-03" src={img_03} />
                        <img className="cmpt-collage__img-04" src={img_04} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollageAbout;