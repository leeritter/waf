import React, { useState } from "react";
import Banner from "../Banner";
import WorkBlock from '../WorkBlock';
import Footer from "../Footer";
import Nav from "../Nav";
import Modal from 'react-modal';
import Video from "../Video";
import Divider from "../Divider";

import image01 from '../../../assets/images/work-block-01.jpg';
import image02 from '../../../assets/images/work-block-02.jpg';
import image03 from '../../../assets/images/work-block-03.jpg';
import posterImage01 from '../../../assets/images/video-poster.jpg';
import posterImage02 from '../../../assets/images/video-poster.jpg';

const OurWork = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [videoSrc, setVideoSrc] = useState(null);
    const [posterSrc, setPosterSrc] = useState(null);

    const block_1_text = `<p>Our annual tribute to the Rev. Dr. Martin Luther King, Jr. has been recognized as the largest community cultural event of its kind in the State of Oregon. With King’s work as a guide, Keep Alive The Dream highlights pioneering activists, community leaders, artists, musicians, and youth whose valiant efforts have left lasting impacts in Oregon’s African-American community. This event has official designation from the National Martin Luther King, Jr. Federal Holiday Commission.</p>`;
    const block_2_text = `<p>Albina Music Trust is preserving North Portland’s music culture with programming that documents the community’s oral history, archival media, and special events. In collaboration with Albina musicians, founders Bobby Smith and Calvin Walker have brought to light a definitive catalog of historic music and the memories of its creators.</p>`;
    const block_3_text = `<p>Urban Wings is a supplemental education program serving at-risk middle school and high school youth in Portland, Oregon. With aviation at its core, the program explores the holistic development of young people through hands-on learning strategies utilizing STEM and character development with a special focus on the Tuskegee Airmen.</p>`;

    const block_4_text = `<p>Surveyed in 1992 and again in 2015, this cultural resource inventory was conducted by WAFI and local high school students, with support from Portland Public Schools, Prosper Portland, and Black United Fund Of Oregon. The report documents the conditions of the Alberta neighborhood for residents and businesses while making recommendations for mitigating gentrification, social displacement, crime, poverty, and unemployment in the area.</p>`;
    const block_5_text = `<p>Founded in 2011 by Donna Maxey, Race Talks is a community forum facilitating conversations which enhance cross-cultural connections among participants. WAFI was a founding partner in this work.</p>`;
    const block_6_text = `<p>From 2009-2013, founder Ron Craig curated this festival documenting African-American cinema of the 1920s-1980s. Screenings included documentaries, blaxploitation films, and historical dramas. Support was provided by WAFI and McMenamins.</p>`;
    const block_7_text = `<p>This 2009 book by Raymond Burrell III documents the legacy of a historic landmark, Vancouver Avenue Baptist Church. Research for the book was funded by WAFI in partnership with Meyer Memorial Trust.</p>`;
    const block_8_text = `<p>Directed by Thara Memory, this 2009 stage program highlights Portland's jazz history during the 1940s-50s. Support was provided by WAFI and the Regional Arts & Culture Council.</p>`;

    const video_url_1 = "https://video.wixstatic.com/video/d4b16f_d9511cb3515c4041bcc4f655f43e21fa/1080p/mp4/file.mp4";
    const video_url_2 = "https://video.wixstatic.com/video/d4b16f_d9511cb3515c4041bcc4f655f43e21fa/1080p/mp4/file.mp4";
    
    const block_1_link = {
        text: "Watch the documentary",
    }
    const block_2_link = {
        text: "Visit Albina Music Trust",
        url: "https://www.albinamusictrust.com"
    }
    const block_3_link = {
        text: "Visit Urban Wings",
        url: "https://urbanwings.club"
    }

    const block_4_link = {
        text: "View the article",
        url: "https://pamplinmedia.com/pt/9-news/285180-159735-alberta-street-then-and-now?wallit_nosession=1"
    }
    const block_4a_link = {
        text: "View the study",
        url: "http://www.orww.org/Alberta_Street_Project/"
    }
    const block_5_link = {
        text: "Visit the site",
        url: "https://racetalkspdx.com"
    }
    const block_6_link = {
        text: "View the article",
        url: "https://www.oregonlive.com/movies/2013/01/indie_arthouse_african_america.html"
    }
    const block_7_link = {
        text: "View the article",
        url: "https://www.oregonlive.com/portland/2009/08/relics_of_a_vibrant_faith_anti.html"
    }

    const block_8_link = {
        text: "Watch the performance",
    }

    function playVideo(videoSrc, posterSrc) {
        setVideoSrc(videoSrc);
        setPosterSrc(posterSrc);
        setIsOpen(true);
    }

    Modal.setAppElement(document.getElementsByClassName('page-wrapper')[0]);

    return (
        <div className="page-wrapper">
            <Nav />
            <Banner themeLight={false} alignLeft={true} headline="Our Work" className="--has-graphic" />            
            <WorkBlock 
                blockNumber="01" 
                heading="Keep Alive The Dream"
                text={block_1_text} 
                image={image01} 
                imageLeft
                link={block_1_link}
                onClickFn={() => {playVideo(video_url_1, posterImage01)}}
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

            <div className="global-container">
                <h2 className="heading-xl">Our Legacy</h2>
                <Divider />
            </div>

            <WorkBlock 
                heading="Alberta Street Project"
                text={block_4_text} 
                image={image01} 
                imageLeft
                link={block_4_link}
                link_2={block_4a_link}
            />

            <WorkBlock 
                heading="Race Talks"
                text={block_5_text} 
                image={image01} 
                link={block_5_link}
            />

            <WorkBlock 
                heading="Portland African-American Film Festival"
                text={block_6_text} 
                image={image01} 
                imageLeft
                link={block_6_link}
            />

            <WorkBlock 
                heading="Yesterday, Today, and Forever: Vancouver Avenue Baptist Church"
                text={block_7_text} 
                image={image01} 
                link={block_7_link}
            />

            <WorkBlock 
                heading="Sherman: A Jazz Opera"
                text={block_8_text} 
                image={image01} 
                imageLeft
                link={block_8_link}
                onClickFn={() => {playVideo(video_url_2, posterImage02)}}
            />
            
            <Footer />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => {setIsOpen(false)}}
                className="modal"
                overlayClassName="overlay"
                contentLabel="Gallery Modal"
            >
                    <Video videoSrc={videoSrc} themeLight={false} text="" poster={posterSrc} autoPlay />
                    <button className="modalClose" onClick={() => {setIsOpen(false)}}></button>
            </Modal>    
        </div >
    );
}
export default OurWork;