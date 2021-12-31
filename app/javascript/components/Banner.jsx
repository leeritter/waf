import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import classNames from 'classnames';

const Banner = ({themeLight, alignLeft, headline, className, hasDonateCta}) => {

    const cmptClasses = classNames(
        'cmpt-banner',
        themeLight && '--is-light',
        !themeLight && '--is-dark',
        alignLeft && '--is-left',
        !alignLeft && '--is-right',
        className
    );

    return (
        <div className={cmptClasses}>
            <div className="cmpt-banner__wrapper">
                <Nav themeLight={themeLight} />
                <div className="cmpt-banner__content">
                    {headline &&
                        <h1 className="heading-xl">{headline}</h1>
                    }
                    {hasDonateCta && 
                        <a href="https://www.paypal.com/donate?token=4bQSWht7Is9Qj44IGCMedmeFp25xWSHsJEX6eps5m13PP6ZbbsFSkiEZbruLWek6YL53JDtO69Dp3Y--" className="cmpt-banner__donate-cta" target="_blank" rel="noopener noreferrer">Donate Now</a>
                    }
                </div>
            </div>
        </div>
    );
}

export default Banner;