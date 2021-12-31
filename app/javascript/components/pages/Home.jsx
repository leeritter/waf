import React from "react";
import { Link } from "react-router-dom";
import BannerHome from "../BannerHome";
import TextBlock from "../TextBlock";
import Video from "../Video";
import LinkList from "../LinkList";
import CollageAbout from "../CollageAbout";
import Footer from "../Footer";
import Nav from "../Nav";
import posterImage from '../../../assets/images/vid-splash.png';

const Home = () => {
    const leftText = "<p>Through community events and educational programming, we amplify regional contributions to arts and culture. Our media archive highlights the cultural heritage of Portland's historic Albina District.</p>";
    const videoText = `<h3>Featured</h3><p>World Arts Foundation Inc. presents <em>Keep Alive The Dream</em>. This historical film directed by Elijah Hasan documents African-American communities in Oregon honoring the legacy of Rev. Dr. Martin Luther King, Jr.</p>`;
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
            <Nav />
            <BannerHome themeLight={true} alignLeft={true} />
            <TextBlock themeLight={false} heading="What we do" leftText={leftText} />
            <Video themeLight={false} text={videoText} poster={posterImage} videoSrc="videos/kite.webm" />
            <LinkList heading="Our Work" links={workLinks} />
            <CollageAbout />
            <Footer />
        </div >
    );
};

export default Home;