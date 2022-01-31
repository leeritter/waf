import React from 'react';
import Banner from "../Banner";
import DonateBlock from '../DonateBlock';
import Sponsors from '../Sponsors';
import Footer from "../Footer";
import Nav from "../Nav";

import sponsorLogo01 from '../../../assets/images/sponsors/logo-01.png';
import sponsorLogo02 from '../../../assets/images/sponsors/logo-02.png';
import sponsorLogo03 from '../../../assets/images/sponsors/logo-03.png';
import sponsorLogo04 from '../../../assets/images/sponsors/logo-04.png';
import sponsorLogo05 from '../../../assets/images/sponsors/logo-05.png';
import sponsorLogo06 from '../../../assets/images/sponsors/logo-06.png';
import sponsorLogo07 from '../../../assets/images/sponsors/logo-07.png';
import sponsorLogo08 from '../../../assets/images/sponsors/logo-08.png';
import sponsorLogo09 from '../../../assets/images/sponsors/logo-09.png';
import sponsorLogo10 from '../../../assets/images/sponsors/logo-10.png';
import sponsorLogo11 from '../../../assets/images/sponsors/logo-11.png';
import sponsorLogo12 from '../../../assets/images/sponsors/logo-12.png';
import sponsorLogo13 from '../../../assets/images/sponsors/logo-13.png';
import sponsorLogo14 from '../../../assets/images/sponsors/logo-14.png';
import sponsorLogo15 from '../../../assets/images/sponsors/logo-15.png';
import sponsorLogo16 from '../../../assets/images/sponsors/logo-16.png';
import sponsorLogo17 from '../../../assets/images/sponsors/logo-17.png';
import sponsorLogo18 from '../../../assets/images/sponsors/logo-18.png';
import sponsorLogo19 from '../../../assets/images/sponsors/logo-19.png';
import sponsorLogo20 from '../../../assets/images/sponsors/logo-20.png';
import sponsorLogo21 from '../../../assets/images/sponsors/logo-21.png';

const Donate = () => {

    const logos = [
        {
            name: "Regional Arts & Culture Council",
            url: sponsorLogo16
        },
        {
            name: "The Collins Foundation",
            url: sponsorLogo21
        },
        {
            name: "Oregon Humanities",
            url: sponsorLogo17
        },
        {
            name: "Hollywood Theatre",
            url: sponsorLogo18
        },
        {
            name: "Enterprise",
            url: sponsorLogo19
        },
        {
            name: "Representative Janelle Bynum",
            url: sponsorLogo20
        },
        {
            name: "City of Portland",
            url: sponsorLogo01
        },
        {
            name: "Trimet",
            url: sponsorLogo02
        },
        {
            name: "Portland Public Schools",
            url: sponsorLogo03
        },
        {
            name: "PGE",
            url: sponsorLogo04
        },
        {
            name: "Portland Association of Teachers",
            url: sponsorLogo05
        },
        {
            name: "Oregon Community Foundation",
            url: sponsorLogo06
        },
        {
            name: "Open Signal",
            url: sponsorLogo07
        },
        {
            name: "KBOO FM",
            url: sponsorLogo08
        },
        {
            name: "Oregon Education Society",
            url: sponsorLogo09
        },
        {
            name: "State Farm",
            url: sponsorLogo10
        },
        {
            name: "Holocene",
            url: sponsorLogo11
        },
        {
            name: "XRAY FM",
            url: sponsorLogo12
        },
        {
            name: "Fortress",
            url: sponsorLogo13
        },
        {
            name: "Moda Health",
            url: sponsorLogo14
        },
        {
            name: "KBMS",
            url: sponsorLogo15
        },
    ]

    return (
        <div className="page-wrapper">
            <Nav />
            <Banner themeLight alignLeft={true} headline="Donate" hasDonateCta />
            <DonateBlock />
            <Sponsors logos={logos} />
            <Footer />
        </div >
    );
}
export default Donate;