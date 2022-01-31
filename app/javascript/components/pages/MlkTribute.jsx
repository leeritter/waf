import React from 'react';
import { Link } from "react-router-dom";
import Banner from "../Banner";
import TextBlock from "../TextBlock";
import Video from "../Video";
import Footer from "../Footer";
import Nav from "../Nav";

import posterImage from '../../../assets/images/video-poster.jpg';

const leftText = "<p>World Arts Foundation Inc. presents Keep Alive The Dream.</p>";
const rightText = "<p>This historical film directed by Elijah Hasan documents African-American communities in Oregon honoring the legacy of Rev. Dr. Martin Luther King, Jr. Since 1978, WAFI has hosted an annual MLK tribute event. With King’s work as a guide, Keep Alive The Dream highlights pioneering activists, community leaders, artists, musicians, and youth whose valiant efforts have left lasting impacts in Oregon’s African-American community.</p><p>The film airs at 3pm on Monday, January 17, 2022 at Portland’s historic Hollywood Theatre (4122 NE Sandy Blvd). In addition to the film, the program will feature live music and a Q &amp; A with community members. Proof of vaccination or a negative COVID-19 test is required for entry. Admission is free, with tickets available at: <a href='http://hollywoodtheatre.org/events/keep-alive-the-dream' target='_blank' style='color:#5444ec'>www.hollywoodtheatre.org/events/keep-alive-the-dream</a>.</p>";

const OurWork = () => {
    return (
        <div className="page-wrapper">
            <Nav />
            <Banner themeLight={false} alignLeft={true} headline="Keep Alive The Dream" className="--has-graphic" />            
            <TextBlock themeLight={true} heading="" leftText={leftText} rightText={rightText} vPadding="lg" />
            <Video themeLight={false} text="" poster={posterImage} />
            <Footer />
        </div >
    );
}
export default OurWork;