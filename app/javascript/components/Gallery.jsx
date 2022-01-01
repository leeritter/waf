import React, { useEffect, useState } from "react";
import classNames from 'classnames';
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from 'react-modal';

const Gallery = ({slides}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    function openModal(url) {
        setModalImage(url);
        setIsOpen(true);
    }
    
    function closeModal() {
        setIsOpen(false);
    }

    const cmptClasses = classNames(
        'cmpt-gallery',        
    );

    useEffect(() => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 768) {
            setIsMobile(true);
        }
    }, []);

    Modal.setAppElement(document.getElementsByClassName('page-wrapper')[0]);

    return (
        <div className={cmptClasses}>
            <div className="cmpt-gallery__wrapper">
                <Swiper
                    spaceBetween={isMobile ? 30 : 50}
                    slidesPerView={isMobile ? 2 : 4}
                    slidesOffsetBefore={isMobile ? 20 : 80}
                    freeMode={true}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.key}>
                            <button className="cmpt-gallery__button" onClick={() => {openModal(slide.url)}}>
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
                
                <button className="modalClose" onClick={closeModal}></button>
                <div className="modalContent">
                    <figure className="modalFigure">
                        <img className="modalImage" src={modalImage} />
                        {/* eventually add captions to these */}
                        {/* <figcaption className="modalCaption">Test caption</figcaption> */}
                    </figure>
                </div>
            </Modal>
        </div>
    );
}

export default Gallery;