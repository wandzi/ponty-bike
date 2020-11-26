import React from "react"
import { FormattedMessage } from 'react-intl';

import FirstBike from '../../images/aboutUs/bike1.svg'
import SecondBike from '../../images/aboutUs/bike2.svg'
import ThirdBike from '../../images/aboutUs/bike3.svg'

import './AboutUs.scss';

const AboutUs = () => {    
    return (
        <section className="about-us">
            <div className="about-us__gallery">
                <FirstBike className="gallery__first-bike"/>
                <div className="gallery__container">
                    <SecondBike className="gallery__second-bike"/>
                    <ThirdBike className="gallery__third-bike"/>
                </div>
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


  
  export default AboutUs;
