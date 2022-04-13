import React from "react";
import classNames from 'classnames';

const Sponsors = ({logos}) => {
    const cmptClasses = classNames(
        'cmpt-sponsors',
    );

    return (
        <div className={cmptClasses}>
            <div className="global-container">   
                <h2 className="cmpt-sponsors__headline">Our Sponsors Past &amp; Present</h2>
                <div className="cmpt-sponsors__grid">
                    {logos.map((logo) => (
                        <img className="cmpt-sponsors__logo" src={logo.url} alt={logo.name} key={logo.name} />
                    ))}
                </div>
            </div>            
        </div>
    );
}

export default Sponsors;