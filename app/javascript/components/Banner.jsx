import React from "react";
import { Link } from "react-router-dom";
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
                <div className="cmpt-banner__content">
                    {headline &&
                        <h1 className="heading-xl" dangerouslySetInnerHTML={{__html: headline}} />
                    }
                    {hasDonateCta &&
                        <form target="_blank" action="https://www.paypal.com/cgi-bin/webscr" method="post">
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
                            <input type="submit" value="Donate now" className="cmpt-banner__donate-cta" />
                        </form>
                    }
                </div>
            </div>
        </div>
    );
}

export default Banner;