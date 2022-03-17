import React from 'react';
import Banner from "../Banner";
import TextBlock from "../TextBlock";
import Gallery from '../Gallery';
import CollageWork from "../CollageWork";
import Footer from "../Footer";
import Nav from "../Nav";

import galleryImage01 from '../../../assets/images/about-gallery/01.jpg';
import galleryImage02 from '../../../assets/images/about-gallery/02.jpg';
import galleryImage03 from '../../../assets/images/about-gallery/03.jpg';
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
    const rightText = "<p>Founded in 1976, our work integrates the arts and education to inspire culture-building among community leaders, artists, educators, activists, and youth. We are stewards of a multicultural archive which documents our community's legacy in Portland's Albina District. Our programs and community events highlight Albina's cultural heritage for future generations.</p>";    
    const leftTextHistory = `<p>In 1976, we came together to celebrate our culture. Being a small group of African-American teachers, our aims were modest. We wanted to deepen our students’ and our community’s understanding of African-American history. And we wanted to create opportunities for self-expression through the arts. It felt necessary that our community participate in the process. To engage our audience meant inviting our community to join us.</p>`;
    const rightTextHistory = `
        <p>Originally calling ourselves One World Arts Foundation, we launched a series of oral history programs focused on historic figures such as Martin Luther King, Jr. and W.E.B. DuBois. These programs celebrated the rich cultural heritage of African-Americans while providing a platform for local talent to shine. At these events, we captured our community’s imagination and were met with overwhelming support. Soon thereafter, the seed we had planted began to grow.</p>
        <p>In the years to follow, World Arts Foundation Inc. became a galvanizing force for performing arts and education programs in Albina. We assembled mass choirs, orchestras, marching bands, and after school programs. There was something sacred we were doing that African-Americans could tap into. With the forces of arts and education at play, we’d started something our community would come to take ownership of. In the decades to follow, a cultural movement would develop by way of our annual tribute to the Rev. Dr. Martin Luther King, Jr.</p>
        <p>“Keep Alive The Dream” came to define Black excellence in Albina. Under the direction of Kenneth W. Berry, the program united generations of community leaders, artists, musicians, and youth. Community servants were honored with awards. An immense network of volunteers guided our efforts. And over multiple decades, the program grew beyond our community to include a variety of multicultural groups, civic and non-profit organizations, as well as city and state officials. Our hearts were full after each year’s program came to a close…and a few weeks later we’d eagerly begin planning for the next year all over again.</p>
        <p>Like many organizations, the COVID-19 pandemic challenged us to think beyond our current paradigm and respond with innovative means of operating as a non-profit organization. The seed we’ve cultivated continues to grow. Through many years of documenting the arts in Albina, we’ve become stewards of a multicultural archive whose legacy is greater than ours alone. We now come full circle in our mission to preserve African-American history, tradition, and life. And as we tighten our efforts to make this material accessible to all, new programming has developed which continues to celebrate the rich cultural heritage of African-Americans in Albina and beyond.</p>
        `;
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
            <Nav />
            <Banner themeLight={false} alignLeft={true} headline="About the foundation" className="--has-graphic" />
            <TextBlock themeLight={true} heading="Our Mission" leftText={leftText} rightText={rightText} vPadding="lg" />
            <Gallery slides={slides} />
            <TextBlock themeLight={true} heading="Our History" leftText={leftTextHistory} rightText={rightTextHistory} vPadding="lg" />
            {/* <CollageWork /> */}
            <Footer />
        </div >
    );
}
export default About;