import React from 'react';
import { FormattedMessage } from 'react-intl';
import PerformanceBike from '../../images/models/performance.svg'
import LongRangeBike from '../../images/models/longrange.svg'
import Arrow from '../../images/arrow.svg'
import './ModelsPage.scss'

const ModelsPage = () => {
    return (
        <section className="models-section">
            <div className="heading-container">
                <h1 className="heading-container__title"><FormattedMessage id="Models.models heading"/></h1>
            </div>
            <div className="model-section__bike-container">
                <PerformanceBike className="bike-container__photo"/>
                <div className="bike-container__table">
                    <h1 className="bike-container__name">Performance</h1>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Arrow className="detail__arrow"/>
                            <h3 className="detail__title">Silnik</h3>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Arrow className="detail__arrow"/>
                            <h3 className="detail__title">Bateria</h3>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Arrow className="detail__arrow"/>
                            <h3 className="detail__title">Max Prędkość</h3>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Arrow className="detail__arrow"/>
                            <h3 className="detail__title">Zasięg</h3>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Arrow className="detail__arrow"/>
                            <h3 className="detail__title">Koła</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="model-section__bike-container">
                <LongRangeBike className="bike-container__photo"/>
                <div className="bike-container__table">
                    <h1 className="bike-container__name">Long Range</h1>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Arrow className="detail__arrow"/>
                            <h3 className="detail__title">Silnik</h3>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Arrow className="detail__arrow"/>
                            <h3 className="detail__title">Bateria</h3>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Arrow className="detail__arrow"/>
                            <h3 className="detail__title">Max Prędkość</h3>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Arrow className="detail__arrow"/>
                            <h3 className="detail__title">Zasięg</h3>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Arrow className="detail__arrow"/>
                            <h3 className="detail__title">Koła</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ModelsPage;
