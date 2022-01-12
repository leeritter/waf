import React, { useEffect, useState } from "react";
import classNames from 'classnames';
import { Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

const GalleryStaff = ({slides, headline}) => {    
    const [isMobile, setIsMobile] = useState(false);

    const cmptClasses = classNames(
        'cmpt-gallery-staff',        
    );

    useEffect(() => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 768) {
            setIsMobile(true);
        }
    }, []);

    return (
        <div className={cmptClasses}>
            <div className="cmpt-gallery-staff__heading">
                <h2 className="heading-m">{headline}</h2>
            </div>
            <div className="cmpt-gallery-staff__wrapper">
                <Swiper
                    modules={[Mousewheel]}
                    spaceBetween={isMobile ? 30 : 50}
                    slidesPerView={isMobile ? 2 : 3.5}
                    slidesOffsetBefore={isMobile ? 40 : 80}
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