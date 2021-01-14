import React from "react"
import { FormattedMessage } from 'react-intl';

import PhotoGallery from '../../images/aboutUs/aboutus_image.svg'

import './AboutUs.scss';

const AboutUs = () => {    
    return (
        <section className="about-us">
            <div className="about-us__gallery">
                <PhotoGallery className="about-us__gallery-image" />
            </div>
            <div className="about-us__description">
                <h1 className="description__title">
                    <FormattedMessage id="home.About Us title" />
                </h1>
                <p className="description__text">
                    <FormattedMessage id="home.About Us description" />
                </p>
            </div>
        </section>
    )
}


  
  export default AboutUs
