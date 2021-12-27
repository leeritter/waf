import React, { useEffect, useRef, useState } from "react";
import classNames from 'classnames';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const Gallery = ({slides}) => {

    const cmptClasses = classNames(
        'cmpt-gallery',        
    );

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
                        <SwiperSlide key={slide.key}>
                            <img src={slide.url} />
                        </SwiperSlide>
                    ))}                    
                </Swiper>
            </div>
        </div>
    );
}

export default Gallery;