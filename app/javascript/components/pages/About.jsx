import React from 'react';
import { Link } from "react-router-dom";
import Banner from "../Banner";
import TextBlock from "../TextBlock";

const About = () => {

    const leftText = "<p>Our programs connect performing artists, educators, and community leaders to underserved communities of color.</p>";
    const rightText = "<p>Since 1978, our programs have connected artists and educators to communities of color in Portland, Oregon.</p><p>With a focus on African American culture, our work involves performing arts, film, youth education and workforce programs, and the preservation of historic community media.</p>";

    return (
        <div className="page-wrapper">
            <Banner themeLight={false} alignLeft={true} headline="About the foundation" className="--is-about" />
            <TextBlock themeLight={true} heading="Our Mission" leftText={leftText} rightText={rightText} vPadding="lg" />
        </div >
    );
}
export default About;