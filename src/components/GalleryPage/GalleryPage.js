import React from 'react';
import FirstBike from '../../images/gallery/galleryphoto1.svg';
import SecondBike from '../../images/gallery/galleryphoto2.svg';
import ThirdBike from '../../images/gallery/galleryphoto3.svg';
import FourthBike from '../../images/gallery/galleryphoto4.svg';

import './GalleryPage.scss'

const GalleryPage = () => {
    return (
        <section className="gallery-section">
            <FirstBike className="gallery-section__photo"/>
            <SecondBike className="gallery-section__photo"/>
            <ThirdBike className="gallery-section__photo"/>
            <FourthBike className="gallery-section__photo"/>
        </section>
    )
};

export default GalleryPage;
