import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import classNames from 'classnames';

const Banner = ({themeLight, alignLeft, headline, className}) => {

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
                </div>
            </div>
        </div>
    );
}

export default Banner;