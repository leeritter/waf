import React from "react";
import { Link } from "react-router-dom";
import GestureCircle from "./GestureCircle";

const CollageLeadership = (props) => {

    return (
        <div className="cmpt-collage --is-leadership">
            <div className="cmpt-collage__wrapper">
                <div className="global-container">
                    <div className="cmpt-collage__text">
                        <span className="cmpt-collage__text-title">Leadership</span>
                        <GestureCircle text="Learn More" url="/leadership" isLight />
                    </div>
                    <div className="cmpt-collage__images"></div>
                </div>
            </div>
        </div>
    );
}

export default CollageLeadership;