import React, { useEffect, useRef, useState } from "react";
import classNames from 'classnames';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Modal from 'react-modal';

const Gallery = ({slides}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal() {
        setIsOpen(false);
    }

    const cmptClasses = classNames(
        'cmpt-gallery',        
    );

    Modal.setAppElement(document.getElementsByClassName('page-wrapper')[0]);

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
                            <button className="cmpt-gallery__button" onClick={openModal}>
                                <img src={slide.url} />
                            </button>
                        </SwiperSlide>
                    ))}                    
                </Swiper>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="overlay"
                contentLabel="Gallery Modal"
            >
                <h2>Modal</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>        
            </Modal>
        </div>
    );
}

export default Gallery;