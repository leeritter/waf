import React from "react";
import { Link } from "react-router-dom";
import GestureCircle from "./GestureCircle";

// Image assets
import img_00 from '../../assets/images/our-work-00.jpg';
import img_01 from '../../assets/images/our-work-01.png';
import img_02 from '../../assets/images/our-work-02.jpg';
import img_03 from '../../assets/images/our-work-03.jpg';

const CollageWork = (props) => {

    return (
        <div className="cmpt-collage --is-our-work">
            <div className="cmpt-collage__wrapper">
                <div className="global-container">
                    <div className="cmpt-collage__text">
                        <span className="cmpt-collage__text-title">Our Work</span>
                        <GestureCircle text="Learn More" url="/our-work" isLight={false} />
                    </div>
                    <div className="cmpt-collage__images">
                        <img className="cmpt-collage__img-00" src={img_00} />
                        <img className="cmpt-collage__img-01" src={img_01} />
                        <img className="cmpt-collage__img-02" src={img_02} />
                        <img className="cmpt-collage__img-03" src={img_03} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollageWork;