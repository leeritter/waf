import React from 'react';
import Banner from "../Banner";
import GalleryStaff from '../GalleryStaff';
import TextBlock from "../TextBlock";
import Footer from "../Footer";
import Nav from "../Nav";

import galleryImage01 from '../../../assets/images/board/boardmember_01.jpg';
import galleryImage02 from '../../../assets/images/board/boardmember_02.jpg';
import galleryImage03 from '../../../assets/images/board/boardmember_03.jpg';
import galleryImage04 from '../../../assets/images/board/boardmember_04.jpg';
import galleryImage05 from '../../../assets/images/board/boardmember_05.jpg';
import galleryImage06 from '../../../assets/images/board/boardmember_06.jpg';
import galleryImage07 from '../../../assets/images/board/boardmember_07.jpg';
import galleryImage08 from '../../../assets/images/board/boardmember_08.jpg';

const Leadership = () => {

    const slides = [
        {
            key: 7,
            url: galleryImage07,
            name: "Donny R. Adair",
            role: "Board Member",
        },
        {
            key: 3,
            url: galleryImage03,
            name: "Kenneth W. Berry",
            role: "Secretary/Treasurer",
        },
        {
            key: 4,
            url: galleryImage04,
            name: "Sunshine Dixon",
            role: "Board Member",
        },
        {
            key: 6,
            url: galleryImage06,
            name: "Michael Grice",
            role: "President",
        },
        {
            key: 2,
            url: galleryImage02,
            name: "Shelia Searight",
            role: "Board Member",
        },                   
        {
            key: 5,
            url: galleryImage05,
            name: "Gwen Thompson",
            role: "Board Member",
        },                                                                              
    ];

    const staffSlides = [
        {
            key: 8,
            url: galleryImage08,
            name: "Bobby Smith",
            role: "Archivist",
        },                        
        {
            key: 1,
            url: galleryImage01,
            name: "Sandra Wadsworth",
            role: "Executive Director",
        },                                                        
    ];

    const executiveText = `Kevin Berry, Val Peterson, Joe "Bean" Keller, Arietta Ward, Heather Coleman-Cox, James Wright, Bobby Pallotta, Steve Hollingsworth, Pat Dobbins, Pearl Hill, Dr. Harriet Adair, Cheanice Stone, Lessie Williams`;
    const advisoryText = `Jasmine Wadsworth, Cedric Berry, Anne Morin, Lavern Davis, Charles Hunter, Chisao Hata, Richard Donin, Cottrell White`;

    return (
        <div className="page-wrapper --is-leadership">
            <Nav />
            <Banner themeLight={false} alignLeft={true} headline="Leadership" className="--has-graphic" />            
            <GalleryStaff slides={slides} headline="Our Board" />
            <GalleryStaff slides={staffSlides} headline="Our Staff" />
            <TextBlock className="team-text" themeLight={true} heading="Executive Team" leftText={executiveText} singleCol />
            <TextBlock themeLight={true} heading="Advisory Council" leftText={advisoryText} vPadding="lg" singleCol />
            <Footer />
        </div >
    );
}
export default Leadership;