import React from "react";
import { Link } from "react-router-dom";
import classNames from 'classnames';

const GestureUnderline = ({text, url, isLight, isSmall, isDonate, onClickFn, isExternal}) => {
    const cmptClasses = classNames({
        'cmpt-gesture-underline': true,
        'is-light': isLight,
        'is-small': isSmall,
        'is-donate': isDonate    
    });    

    return (
        <>
        {isDonate && 
            <form target="_blank" action="https://www.paypal.com/cgi-bin/webscr" method="post" className={'donate-form'}>
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="item_name" value="World Arts Foundation, Inc." />
                <input type="hidden" name="item_number" value="" />
                <input type="hidden" name="bn" value="Wix_Donate_WPS_IL" />
                <input type="hidden" name="business" value="kberry49@comcast.net" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="notify_url" value="" />
                <input type="hidden" name="return" value="https://www.worldartsfoundation.org/donate" />
                <input type="hidden" name="cancel_return" value="https://www.worldartsfoundation.org/donate" />
                <input type="hidden" name="amount" value="" />                            
                <input type="submit" value="Donate now" className={cmptClasses} />
            </form>
        }

        {onClickFn &&
        <a className={cmptClasses} onClick={onClickFn}>{text}</a>
        }

        {isExternal && !onClickFn &&
            <a className={cmptClasses} href={url} target="_blank" rel="noopener">{text}</a>
        }

        {!isDonate && !onClickFn && !isExternal &&
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