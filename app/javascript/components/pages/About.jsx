import React from 'react';
import Banner from "../Banner";
import TextBlock from "../TextBlock";
import Gallery from '../Gallery';
import CollageWork from "../CollageWork";
import Footer from "../Footer";

import galleryImage01 from '../../../assets/images/about-gallery/01.jpg';
import galleryImage02 from '../../../assets/images/about-gallery/02.jpg';
import galleryImage04 from '../../../assets/images/about-gallery/04.jpg';
import galleryImage05 from '../../../assets/images/about-gallery/05.jpg';
import galleryImage06 from '../../../assets/images/about-gallery/06.jpg';
import galleryImage07 from '../../../assets/images/about-gallery/07.jpg';
import galleryImage08 from '../../../assets/images/about-gallery/08.jpg';
import galleryImage09 from '../../../assets/images/about-gallery/09.jpg';
import galleryImage10 from '../../../assets/images/about-gallery/10.jpg';
import galleryImage11 from '../../../assets/images/about-gallery/11.jpg';

const About = () => {

    const leftText = "<p>World Arts Foundation Inc. celebrates and preserves African-American contributions in American culture.</p>";
    const rightText = "<p>Founded in 1978, our work integrates the arts and education to inspire culture-building among community leaders, artists, educators, activists, and youth. We are stewards of a multicultural archive which documents our community's legacy in Portland's Albina District. Our programs and community events highlight Albina's cultural heritage for future generations.</p>";    
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
            key: 4,
            url: galleryImage04
        },
        {
            key: 5,
            url: galleryImage05
        },
        {
            key: 6,
            url: galleryImage06
        },
        {
            key: 7,
            url: galleryImage07
        },
        {
            key: 8,
            url: galleryImage08
        },
        {
            key: 9,
            url: galleryImage09
        },
        {
            key: 10,
            url: galleryImage10
        },
        {
            key: 11,
            url: galleryImage11
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