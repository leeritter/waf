import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import TextBlock from "./TextBlock";
import Video from "./Video";
import LinkList from "./LinkList";
import Collage from "./Collage";
import Footer from "./Footer";
import posterImage from '../../assets/images/vid-splash.png';

const Home = () => {
    const leftText = "<p>Through community events and educational programming, we amplify regional contributions to arts and culture. Our media archive highlights the cultural heritage of Portland's historic Albina District.</p>";
    const videoText = "<h3>Featured</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada venenatis faucibus interdum amet, nullam dignissim sed in ut. Lorem in facilisis nisi bibendum amet.</p>";
    const workLinks = [
        {
            text: "MLK Annual Tribute",
            link: "/mlk",
            targetBlank: false
        },
        {
            text: "Albina Music Trust",
            link: "https://www.albinamusictrust.com",
            targetBlank: true
        },
        {
            text: "Urban Wings",
            link: "https://urbanwings.club",
            targetBlank: true
        },
    ];

    return (
        <div className="page-wrapper">
            <Banner themeLight={true} alignLeft={true} headline="Homepage" />
            <TextBlock themeLight={false} heading="What we do" leftText={leftText} />
            <Video themeLight={false} text={videoText} poster={posterImage} videoSrc="videos/kite.webm" />
            <LinkList heading="Our Work" links={workLinks} />
            <Collage />
            <Footer />
        </div >
    );
};

export default Home;