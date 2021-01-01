import React from 'react';
import { FormattedMessage } from 'react-intl';
import Arrow from '../../images/arrow.svg'
import './ServicesPage.scss'

const ServicesPage = () => {
    return (
        <section className="services-section">  
            <div className="services-section_list-container">
                <h1 className="services-section__heading">
                    <FormattedMessage id="Models.services heading"/>
                </h1>
                <ul className="services-section__services-list">
                    <li className="specification-container__specification">
                        <div className="specification_detail">
                            <Arrow className="detail__arrow"/>
                            <h3 className="detail__title"><FormattedMessage id="Models.services printing"/></h3>
                        </div>
                    </li>
                    <li className="specification-container__specification">
                        <div className="specification_detail">
                            <Arrow className="detail__arrow"/>
                            <h3 className="detail__title"><FormattedMessage id="Models.services projecting"/></h3>
                        </div>
                    </li>
                    <li className="specification-container__specification">
                        <div className="specification_detail">
                            <Arrow className="detail__arrow"/>
                            <h3 className="detail__title"><FormattedMessage id="Models.services prototype"/></h3>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="services-section__services-description">
                <p>
                <FormattedMessage id="Models.services description"/>
                </p>
            </div>
        </section>
    )
};

export default ServicesPage;
