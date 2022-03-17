import React from "react";
import { Link } from "react-router-dom";

import icon_fb from '../../assets/images/icons/fb.svg';
import icon_insta from '../../assets/images/icons/insta.svg';
import icon_twitter from '../../assets/images/icons/twitter.svg';
import icon_youtube from '../../assets/images/icons/youtube.svg';

const Footer = (props) => {

    return (
        <div className="cmpt-footer">
            <div className="global-container">
                <div className="cmpt-footer__left">
                    <span className="cmpt-footer__byline">World Arts Foundation Inc.</span>
                    <div className="cmpt-footer__social">
                        <a href="https://www.facebook.com/wafpdx" target="_blank" rel="noopener noreferrer"><img src={icon_fb} /></a>
                        <a href="https://www.instagram.com/wafpdx/" target="_blank" rel="noopener noreferrer"><img src={icon_insta} /></a>                        
                        <a href="https://www.youtube.com/channel/UC-4PwMXuB7MaLiWg55w4ldg" target="_blank" rel="noopener noreferrer"><img src={icon_youtube} /></a>
                    </div>
                    <span className="cmpt-footer__copy">&copy; 2021 World Arts Foundation Inc.</span>
                </div>

                <div className="cmpt-footer__right">
                    <ul className="cmpt-footer__links">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/archive">Cultural Archive</Link></li>
                        <li><Link to="/our-work">Our Work</Link></li>
                        <li><Link to="/leadership">Leadership</Link></li>
                        <li><Link to="/donate">Donate</Link></li>
                    </ul>
                    <span className="cmpt-footer__copy">&copy; 2021 World Arts Foundation Inc.</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;