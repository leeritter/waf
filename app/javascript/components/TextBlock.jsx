import React from "react";
import classNames from 'classnames';

const TextBlock = ({themeLight, leftText, rightText, heading, vPadding = "default", singleCol, className }) => {
    const cmptClasses = classNames(
        'cmpt-text-block',
        themeLight && '--is-light',
        !themeLight && '--is-dark',
        singleCol && '--is-single-col',
        `--padding-${vPadding}`,
        !rightText && '--no-right-col',
        className && `${className}`
    );

    return (
        <div className={cmptClasses}>
            <div className="global-container">
                {heading &&
                    <h2 className="heading-m cmpt-text-block__heading">{heading}</h2>
                }
                <div className="cmpt-text-block__text">
                    <div className="cmpt-text-block__left" dangerouslySetInnerHTML={{ __html: leftText }}></div>
                    <div className="cmpt-text-block__right" dangerouslySetInnerHTML={{ __html: rightText }}></div>
                </div>
            </div>
        </div>
    );
}

export default TextBlock;