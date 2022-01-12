import React from "react";
import GestureUnderline from "./GestureUnderline";
import classNames from 'classnames';

import graphic from '../../assets/images/home-graphic.svg';

const BannerHome = () => {
    const cmptClasses = classNames({
        'cmpt-banner-home': true,        
    });    

    return (
        <div className={cmptClasses}>
            <div className="cmpt-banner-home__top">
                <img src={graphic} className="cmpt-banner-home__graphic" />
                <div className="cmpt-banner-home__wrapper">
                    <div className="cmpt-banner-home__content">
                        <div className="cmpt-banner-home__left">
                            <div className="cmpt-banner-home__graphic-wrapper">
                                <div className="cmpt-banner-home__bg"></div>
                            </div>
                        </div>
                        <div className="cmpt-banner-home__right">
                            <div className="banner-home-subhead">
                                <p>Based in Portland, Oregon. Preserving African-American contributions in American culture, since 1978.</p>
                                <GestureUnderline text="About Us" url="/about" />
                            </div>
                        </div>                        
                    </div>                
                </div>

                <div className="cmpt-banner-home__graphic-wrapper">                    
                    <div className="cmpt-banner-home__bg"></div>
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