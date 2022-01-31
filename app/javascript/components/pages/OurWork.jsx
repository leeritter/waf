import React from 'react';
import { Link } from "react-router-dom";
import Banner from "../Banner";
import WorkBlock from '../WorkBlock';
import CollageLeadership from '../CollageLeadership';
import Footer from "../Footer";
import Nav from "../Nav";

import image01 from '../../../assets/images/work-block-01.jpg';
import image02 from '../../../assets/images/work-block-02.jpg';
import image03 from '../../../assets/images/work-block-03.jpg';

const OurWork = () => {
    const block_1_text = `<p>Since 1985, our Rev. Dr. Martin Luther King, Jr. tribute program has been recognized as the largest community cultural event of its kind in the State of Oregon. This event has official designation from the National Martin Luther King, Jr. Federal Holiday Commission. The program's origin can be traced to our 1978 stage program, "From The Pulpit To The People" as well as a period from 1980-1984 when this program was broadcast on KBOO 90.7 FM.</p>`;
    const block_2_text = `<p>Albina Music Trust is preserving North Portland’s music culture with programming that documents the community’s oral history, archival media, and special events. In collaboration with Albina musicians, founders Bobby Smith and Calvin Walker have brought to light a definitive catalog of historic music and the memories of its creators.</p>`;
    const block_3_text = `<p>Urban Wings is a supplemental education program serving at-risk middle school and high school youth in Portland, Oregon. With aviation at its core, the program explores the holistic development of young people through hands-on learning strategies utilizing STEM and character development with a special focus on the Tuskegee Airmen.</p>`;
    
    const block_1_link = {
        text: "Visit Keep Alive The Dream",
        url: "/mlk-tribute"
    }
    const block_2_link = {
        text: "Visit Albina Music Trust",
        url: "https://www.albinamusictrust.com"
    }
    const block_3_link = {
        text: "Visit Urban Wings",
        url: "https://urbanwings.club"
    }

    return (
        <div className="page-wrapper">
            <Nav />
            <Banner themeLight={false} alignLeft={true} headline="Our Work" className="--has-graphic" />            
            <WorkBlock 
                blockNumber="01" 
                heading="MLK Annual Tribute"
                text={block_1_text} 
                image={image01} 
                imageLeft
                link={block_1_link}
            />
            <WorkBlock 
                blockNumber="02" 
                heading="Albina Music Trust" 
                text={block_2_text} 
                image={image02} 
                link={block_2_link}
            />
            <WorkBlock 
                blockNumber="03" 
                heading="Urban Wings and Aerospace Leadership Club" 
                text={block_3_text} 
                image={image03} 
                imageLeft 
                link={block_3_link}                
            />
            {/* <CollageLeadership /> */}
            <Footer />
        </div >
    );
}
export default OurWork;