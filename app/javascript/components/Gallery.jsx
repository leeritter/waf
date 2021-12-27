import React, { useEffect, useRef, useState } from "react";
import classNames from 'classnames';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import galleryImage01 from '../../assets/images/about-gallery/01.jpg';
import galleryImage02 from '../../assets/images/about-gallery/02.jpg';

const Gallery = () => {

    const cmptClasses = classNames(
        'cmpt-gallery',        
    );

    const slides = [
        {
            key: 1,
            url: galleryImage01
        },
        {
            key: 2,
            url: galleryImage01
        },
        {
            key: 3,
            url: galleryImage01
        },
        {
            key: 4,
            url: galleryImage01
        },
        {
            key: 5,
            url: galleryImage01
        },
        {
            key: 6,
            url: galleryImage01
        },
    ]

    return (
        <div className={cmptClasses}>
            <div className="cmpt-gallery__wrapper">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    slidesOffsetBefore={80}
                    freeMode={true}
                >
                    {slides.map((slide) => (
                        <SwiperSlide>
                            <img src={slide.url} />
                        </SwiperSlide>
                    ))}
                    <SwiperSlide>
                        <img src={galleryImage01} />
                    </SwiperSlide>
                    <SwiperSlide><img src={galleryImage02} /></SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Gallery;