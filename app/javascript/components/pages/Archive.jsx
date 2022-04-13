import React from 'react';
import Banner from "../Banner";
import TextBlock from "../TextBlock";
import Footer from "../Footer";
import Nav from "../Nav";

const Archive = () => {
    const leftText = "<p>World Arts Foundation Inc will soon have a vast library of historic preserved media available to browse, here in the archive. Check back in the coming months to explore the full collection.</p>";
    return (
        <div className="page-wrapper --is-dark">
            <Nav />
            <Banner themeLight={false} alignLeft={true} headline="Albina<br/>Community Archive" className="--has-graphic --is-archive" />
            <TextBlock themeLight={false} heading="Archive Coming Soon..." leftText={leftText} vPadding="lg" />
            <Footer />
        </div>
    );
}
export default Archive;