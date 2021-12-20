import React from "react";
import { Link } from "react-router-dom";
import classNames from 'classnames';

const GestureUnderline = ({text, url, isLight}) => {
    const cmptClasses = classNames({
        'cmpt-gesture-underline': true,
        'is-light': isLight       
    });    

    return (    
        <Link className={cmptClasses} to={url}>{text}</Link>
    );
}

export default GestureUnderline;