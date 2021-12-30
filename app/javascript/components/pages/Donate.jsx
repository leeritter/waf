import React from 'react';
import Banner from "../Banner";
import DonateBlock from '../DonateBlock';
import Sponsors from '../Sponsors';
import Footer from "../Footer";

import sponsorLogo01 from '../../../assets/images/sponsors/logo-01.png';

const Donate = () => {

    const logos = [
        {
            name: "City of Portland",
            url: sponsorLogo01
        },
        {
            name: "City of Portland",
            url: sponsorLogo01
        },
        {
            name: "City of Portland",
            url: sponsorLogo01
        },
        {
            name: "City of Portland",
            url: sponsorLogo01
        },
    ]

    return (
        <div className="page-wrapper">
            <Banner themeLight alignLeft={true} headline="Donate" hasDonateCta />
            <DonateBlock />
            <Sponsors logos={logos} />
            <Footer />
        </div >
    );
}
export default Donate;