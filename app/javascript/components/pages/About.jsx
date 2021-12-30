import React from 'react';
import Banner from "../Banner";
import TextBlock from "../TextBlock";
import Gallery from '../Gallery';
import CollageWork from "../CollageWork";
import Footer from "../Footer";

import galleryImage01 from '../../../assets/images/about-gallery/01.jpg';
import galleryImage02 from '../../../assets/images/about-gallery/02.jpg';
import galleryImage03 from '../../../assets/images/about-gallery/03.jpg';

const About = () => {

    const leftText = "<p>Our programs connect performing artists, educators, and community leaders to underserved communities of color.</p>";
    const rightText = "<p>Since 1978, our programs have connected artists and educators to communities of color in Portland, Oregon.</p><p>With a focus on African American culture, our work involves performing arts, film, youth education and workforce programs, and the preservation of historic community media.</p>";    
    const leftTextHistory = `<p>Since 1985, our Rev. Dr. Martin Luther King, Jr. tribute program continues to be the largest community cultural event of its kind in the State of Oregon.</p>`;
    const rightTextHistory = `<p>This event is recognized by the National Martin Luther King, Jr. Federal Holiday Commission. The program's origin can be traced to our 1978 stage program, "From The Pulpit To The People" as well as a period from 1980-1984 when this program was broadcast on KBOO 90.7 FM.</p><p>This all-day community event highlights the achievements of Portland, Oregon’s African American community and beyond. The event serves as a springboard for our year round programming as well as a common ground for community members to walk on. The program serves thousands in person and online with non-perishable food items donated to the Oregon Food Bank. Due to COVID-19 impacts, we transitioned this program to a virtual streaming format in 2021.</p>`;
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
            <Banner themeLight={false} alignLeft={true} headline="About the foundation" className="--has-graphic" />
            <TextBlock themeLight={true} heading="Our Mission" leftText={leftText} rightText={rightText} vPadding="lg" />
            <Gallery slides={slides} />
            <TextBlock themeLight={true} heading="Our History" leftText={leftTextHistory} rightText={rightTextHistory} vPadding="lg" />
            <CollageWork />
            <Footer />
        </div >
    );
}
export default About;