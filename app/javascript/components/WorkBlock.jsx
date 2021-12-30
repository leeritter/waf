import React from "react";
import classNames from 'classnames';
import GestureUnderline from "./GestureUnderline";

const WorkBlock = ({blockNumber, imageLeft, heading, text, link, image, sideText}) => {
    const cmptClasses = classNames(
        "cmpt-work-block",
        "global-container",
        imageLeft && '--image-left',
        !imageLeft && '--image-right',
    );

    return (
        <div className={cmptClasses}>
            <div className="cmpt-work-block__side-text">{sideText}</div>
            <img className="cmpt-work-block__image" src={image} />
            <div className="cmpt-work-block__content">
                <div className="cmpt-work-block__number">&mdash; {blockNumber}</div>
                {heading &&
                    <h2 className="heading-m cmpt-work-block__heading">{heading}</h2>
                }
                <div className="cmpt-work-block__text" dangerouslySetInnerHTML={{ __html: text }}></div>
                {link &&
                    <GestureUnderline text={link.text} url={link.url} isSmall />
                }
            </div>            
        </div>
    );
}

export default WorkBlock;