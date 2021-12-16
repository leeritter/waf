import React from "react";
import { Link } from "react-router-dom";
import classNames from 'classnames';

const BannerHome = (props) => {
    const cmptClasses = classNames({
        'cmpt-banner-home': true,        
    });

    return (
        <div className={cmptClasses}>
            <div className="cmpt-banner-home__wrapper">
                <div className="cmpt-banner-home__content">                    
                    <h1 className="heading-xl">World Arts Foundation Inc.</h1>
                    <div className="banner-home-subhead">
                        <p>Based in Portland, Oregon. Preserving African-American contributions in American culture, since 1978.</p>
                        <a className="underline-link" href="/about">About Us</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerHome;