import React from 'react';
import { Link } from "react-router-dom";
import Banner from "../Banner";
import TextBlock from "../TextBlock";
import Gallery from '../Gallery';

import galleryImage01 from '../../../assets/images/about-gallery/01.jpg';
import galleryImage02 from '../../../assets/images/about-gallery/02.jpg';
import galleryImage03 from '../../../assets/images/about-gallery/03.jpg';

const About = () => {

    const leftText = "<p>Our programs connect performing artists, educators, and community leaders to underserved communities of color.</p>";
    const rightText = "<p>Since 1978, our programs have connected artists and educators to communities of color in Portland, Oregon.</p><p>With a focus on African American culture, our work involves performing arts, film, youth education and workforce programs, and the preservation of historic community media.</p>";    
    const slides = [
        {
            key: 1,
            url: galleryImage01
        },
        {
            key: 2,
            url: galleryImage02
        },
        {
            key: 3,
            url: galleryImage03
        },
        {
            key: 4,
            url: galleryImage01
        },
        {
            key: 5,
            url: galleryImage02
        },
        {
            key: 6,
            url: galleryImage03
        },
    ];

    return (
        <div className="page-wrapper">
            <Banner themeLight={false} alignLeft={true} headline="About the foundation" className="--is-about" />
            <TextBlock themeLight={true} heading="Our Mission" leftText={leftText} rightText={rightText} vPadding="lg" />
            <Gallery slides={slides} />
        </div >
    );
}
export default About;