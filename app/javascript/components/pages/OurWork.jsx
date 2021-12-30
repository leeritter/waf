import React from 'react';
import { Link } from "react-router-dom";
import Banner from "../Banner";
import WorkBlock from '../WorkBlock';
import CollageWork from "../CollageWork";
import Footer from "../Footer";

import image01 from '../../../assets/images/work-block-01.jpg';

const OurWork = () => {
    return (
        <div className="page-wrapper">
            <Banner themeLight={false} alignLeft={true} headline="Our Work" className="--has-graphic" />            
            <WorkBlock heading="Test Heading" image={image01} imageLeft />
            <CollageWork />
            <Footer />
        </div >
    );
}
export default OurWork;