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
            </div>
            <div className="cmpt-sponsors__grid">
                {logos.map((logo) => (
                    <img src={logo.url} alt={logo.name} />
                ))}
            </div>
        </div>
    );
}

export default Sponsors;