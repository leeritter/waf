import React from "react";
import { Link } from "react-router-dom";
import classNames from 'classnames';

const GestureUnderline = ({text, url, isLight, isSmall, isDonate}) => {
    const cmptClasses = classNames({
        'cmpt-gesture-underline': true,
        'is-light': isLight,
        'is-small': isSmall,
        'is-donate': isDonate    
    });    

    return (    
        <Link className={cmptClasses} to={url}>{text}</Link>
    );
}

export default GestureUnderline;