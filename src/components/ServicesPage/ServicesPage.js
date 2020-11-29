import React from 'react';
import { FormattedMessage } from 'react-intl';
import Arrow from '../../images/arrow.svg'
import './ServicesPage.scss'

const ServicesPage = () => {
    return (
        <section className="services-section">  
            <div className="services-section_list-container">
                <h1 className="services-section__heading">
                    <FormattedMessage id="Models.services heading" />
                </h1>
                <ul className="services-section__services-list">
                    <li className="specification-container__specification">
                        <div className="specification_detail">
                            <Arrow className="detail__arrow"/>
                            <h3 className="detail__title">A</h3>
                        </div>
                    </li>
                    <li className="specification-container__specification">
                        <div className="specification_detail">
                            <Arrow className="detail__arrow"/>
                            <h3 className="detail__title">B</h3>
                        </div>
                    </li>
                    <li className="specification-container__specification">
                        <div className="specification_detail">
                            <Arrow className="detail__arrow"/>
                            <h3 className="detail__title">C</h3>
                        </div>
                    </li>
                    <li className="specification-container__specification">
                        <div className="specification_detail">
                            <Arrow className="detail__arrow"/>
                            <h3 className="detail__title">D</h3>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="services-section__services-description">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat, 
                    velit in tempor scelerisque, eros est posuere nunc, eget blandit sapien diam sed libero. 
                    Pellentesque nisl nunc, facilisis in turpis in, ultrices placerat purus. Ut hendrerit auctor 
                    lorem vel sollicitudin. Suspendisse potenti. Vivamus auctor id mi vel ultrices. Proin sed leo dui. 
                    Nunc malesuada dignissim tortor. In eget vulputate felis. In hac habitasse platea dictumst.
                </p>
                <p>
                    Suspendisse sit amet nulla id libero sollicitudin scelerisque. Pellentesque turpis turpis, 
                    imperdiet et leo ac, dapibus venenatis nunc. Suspendisse consequat sapien sit amet porta lobortis. 
                    Proin nec risus lacus. Maecenas id blandit neque. Pellentesque nec leo egestas, malesuada lorem quis, 
                    pretium arcu. 
                </p>
            </div>
        </section>
    )
};

export default ServicesPage;
