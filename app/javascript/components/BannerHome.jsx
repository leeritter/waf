import React from "react";
import { Link } from "react-router-dom";
import GestureUnderline from "./GestureUnderline";
import classNames from 'classnames';

const BannerHome = () => {
    const cmptClasses = classNames({
        'cmpt-banner-home': true,        
    });    

    return (
        <div className={cmptClasses}>
            <div className="cmpt-banner-home__top">
                <div className="cmpt-banner-home__wrapper">
                    <div className="cmpt-banner-home__content">
                        <h1 className="heading-xl">World Arts Foundation Inc.</h1>
                        <div className="banner-home-subhead">
                            <p>Based in Portland, Oregon. Preserving African-American contributions in American culture, since 1978.</p>
                            <GestureUnderline text="About Us" url="/about" />
                        </div>
                    </div>                
                </div>
            </div>
            <div className="cmpt-banner-home__photo">
                <div className="cmpt-banner-home__photo-text global-container">
                    <h2>The Intersection of Arts &amp; Education</h2>
                </div>
            </div>
        </div>
    );
}

export default BannerHome;