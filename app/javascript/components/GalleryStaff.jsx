import React, { useState } from "react";
import classNames from 'classnames';
import { Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const GalleryStaff = ({slides}) => {    
    const cmptClasses = classNames(
        'cmpt-gallery-staff',        
    );

    return (
        <div className={cmptClasses}>
            <div className="cmpt-gallery-staff__heading">
                <h2 className="heading-m">Our Board</h2>
            </div>
            <div className="cmpt-gallery-staff__wrapper">
                <Swiper
                    modules={[Mousewheel]}
                    spaceBetween={50}
                    slidesPerView={4}
                    slidesOffsetBefore={80}
                    freeMode={true}
                    mousewheel={true}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.key}>
                            <div className="cmpt-gallery-staff__item">
                                <img src={slide.url} />
                                <h3 className="cmpt-gallery-staff__item-name">{slide.name}</h3>
                                <div className="cmpt-gallery-staff__item-role">{slide.role}</div>
                            </div>                            
                        </SwiperSlide>
                    ))}                    
                </Swiper>
            </div>            
        </div>
    );
}

export default GalleryStaff;