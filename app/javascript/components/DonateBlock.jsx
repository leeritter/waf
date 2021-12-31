import React from "react";
import classNames from 'classnames';
import GestureUnderline from "./GestureUnderline";

const DonateBlock = () => {
    const cmptClasses = classNames(
        'cmpt-donate-block',        
    );

    return (
        <div className={cmptClasses}>
            <div className="global-container">   
                <div className="cmpt-donate-block__wrapper">
                    <div className="cmpt-donate-block__text">
                        <h2 className="cmpt-donate-block__heading">
                            Supporting World Arts Foundation Inc. is supporting local arts and education.
                        </h2>
                        <div className="cmpt-donate-block__copy">
                            <p>With time, we have found that Black culture and historical accounts are slowly disappearing as we lose community members of color from elder generations. Gone with them are the customs, stories, historical media, and other precious artifacts that are so much a part of the Black experience. World Arts Foundation Inc. strives to preserve Black arts and culture. We recognize the educational importance of preservation and the cataloging of historical works such as newsprint, photography, audio, film, and other media that can act as an inspiration to future generations.</p>
                            <p>We ask you to join us on a journey to preserve our culture. Your donations help us to act on our mission. To all of our previous supporters and to our valued new supporters, we thank you for making a difference!</p>
                        </div>
                    </div>
                    <div className="cmpt-donate-block__link">
                        <GestureUnderline text="Donate Now" url="https://www.paypal.com/donate?token=4bQSWht7Is9Qj44IGCMedmeFp25xWSHsJEX6eps5m13PP6ZbbsFSkiEZbruLWek6YL53JDtO69Dp3Y--" isDonate />
                    </div>
                </div>                
            </div>
        </div>
    );
}

export default DonateBlock;