import React from 'react';
import Banner from "../Banner";
import TextBlock from "../TextBlock";
import Footer from "../Footer";

const Archive = () => {
    const leftText = "<p>World Arts Foundation Inc will soon have a vast library of historic preserved media available to browse, here in the archive. Check back in the coming months to explore the full collection.</p>";
    return (
        <div className="page-wrapper --is-dark">
            <Banner themeLight={true} alignLeft={true} headline="The archive" />
            <TextBlock themeLight={false} heading="Archive Coming Soon..." leftText={leftText} vPadding="lg" />
            <Footer />
        </div>
    );
}
export default Archive;