import React from "react";
import { Link } from "react-router-dom";
import classNames from 'classnames';

const GestureUnderline = ({text, url, isLight, isSmall, isDonate, onClickFn}) => {
    const cmptClasses = classNames({
        'cmpt-gesture-underline': true,
        'is-light': isLight,
        'is-small': isSmall,
        'is-donate': isDonate    
    });    

    return (
        <>
        {isDonate && 
            <a 
                href="https://www.paypal.com/donate?token=4bQSWht7Is9Qj44IGCMedmeFp25xWSHsJEX6eps5m13PP6ZbbsFSkiEZbruLWek6YL53JDtO69Dp3Y--" 
                className={cmptClasses}
                target="_blank" 
                rel="noopener noreferrer"
            >
                {text}
            </a>
        }

        {onClickFn &&
        <a className={cmptClasses} onClick={onClickFn}>{text}</a>
        }

        {!isDonate && !onClickFn &&
            <Link 
                className={cmptClasses} 
                to={url}
            >
                {text}
            </Link>
        }         
        </>
    );
}

export default GestureUnderline;