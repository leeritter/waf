import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import classNames from 'classnames';

const Nav = (props) => {

    const [locationPath, setLocationPath] = useState();
    const [activeLink, setActiveLink] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Create array of refs for links
    const numberOfLinks = 4;
    const linkRefs = [];

    for (let i = 0; i < numberOfLinks; i++) {
        const newRef = React.createRef();
        linkRefs.push(newRef);
    }

    useEffect(() => {
        const currentPath = location.pathname;
        setLocationPath(currentPath);
    }, [location]);

    useEffect(() => {
        linkRefs.forEach((link, index) => {
            const linkHref = link.current.getAttribute('href');
            if (linkHref === locationPath) {
                setActiveLink(index);
            }
        });
    }, [locationPath]);

    const cmptClasses = classNames({
        'global-nav-wrapper': true,
        '--is-light': props.themeLight,
        '--is-dark': !props.themeLight,
        '--is-open': isOpen,
    });

    return (
        <>
            <div className="mobile-navbar">
                <Link className="mobile-navbar__title" to="/">WORLD ARTS FOUNDATION INC.</Link>
                <button className="mobile-navbar__button" onClick={()=>{setIsOpen(!isOpen)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div className={cmptClasses}>
                <nav className='global-nav'>
                    <Link className="global-nav__home-link" to="/">WORLD ARTS FOUNDATION INC.</Link>                    
                    <ul className="global-nav__links">
                        <li><Link className={activeLink == 0 ? '--is-active' : ''} ref={linkRefs[0]} to="/about">About</Link></li>
                        <li><Link className={activeLink == 1 ? '--is-active' : ''} ref={linkRefs[1]} to="/archive">Cultural Archive</Link></li>
                        <li><Link className={activeLink == 2 ? '--is-active' : ''} ref={linkRefs[2]} to="/our-work">Our Work</Link></li>
                        <li><Link className={activeLink == 3 ? '--is-active' : ''} ref={linkRefs[3]} to="/leadership">Leadership</Link></li>
                    </ul>
                    <Link className="global-nav__donate-link" to="/donate">Donate</Link>
                </nav>
            </div>
        </>
    );
}

export default Nav;