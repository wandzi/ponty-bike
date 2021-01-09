import React from 'react';
import { FormattedMessage } from 'react-intl';
import Collapsible from 'react-collapsible';
import PerformanceBike from '../../images/models/performance.svg'
import LongRangeBike from '../../images/models/longrange.svg'
import './ModelsPage.scss'

const ModelsPage = () => {
    return (
        <section className="models-section">
            <div className="heading-container">
                <h1 className="heading-container__title"><FormattedMessage id="Models.models heading"/></h1>
            </div>
            <div className="model-section__bike-container">
                <PerformanceBike className="bike-container__photo"/>

                    <h1 className="bike-container__name">Performance</h1>
                    <p className="bike-container__description"><FormattedMessage id="Models.performance desc"/></p>
                    <div className="bike-container__table">
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Collapsible trigger="&rsaquo; Rama">
                                <FormattedMessage id="Models.performance frame"/>
                            </Collapsible>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Collapsible trigger="&rsaquo; Silnik">
                                <FormattedMessage id="Models.performance engine"/>
                            </Collapsible>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Collapsible trigger="&rsaquo; Bateria">
                                <FormattedMessage id="Models.performance battery"/>
                            </Collapsible>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Collapsible trigger="&rsaquo; Wyświetlacz LCD">
                                <FormattedMessage id="Models.performance lcd"/>
                            </Collapsible>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Collapsible trigger="&rsaquo; Max Prędkość">
                                <FormattedMessage id="Models.performance speed"/>
                            </Collapsible>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Collapsible trigger="&rsaquo; Zasięg">
                                <FormattedMessage id="Models.performance range"/>
                            </Collapsible>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Collapsible trigger="&rsaquo; Koła">
                                <FormattedMessage id="Models.performance wheels"/>
                            </Collapsible>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Collapsible trigger="&rsaquo; Wyposażenie standardowe wersji Performance">
                                <FormattedMessage id="Models.performance equipment"/>
                            </Collapsible>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Collapsible trigger="&rsaquo; Wyposażenie opcjonalne wersji Performance">
                                <FormattedMessage id="Models.performance optional equipment"/>
                            </Collapsible>
                        </div>
                    </div>
                </div>
            </div>

            <div className="model-section__bike-container">
                <LongRangeBike className="bike-container__photo"/>
                
                <h1 className="bike-container__name">Long Range</h1>
                <p className="bike-container__description"><FormattedMessage id="Models.longrange desc"/></p>
                <div className="bike-container__table">
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Collapsible trigger="&rsaquo; Silnik">
                                <FormattedMessage id="Models.longrange engine"/>
                            </Collapsible>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Collapsible trigger="&rsaquo; Bateria">
                                <FormattedMessage id="Models.longrange battery"/>
                            </Collapsible>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Collapsible trigger="&rsaquo; Max Prędkość">
                                <FormattedMessage id="Models.longrange speed"/>
                            </Collapsible>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Collapsible trigger="&rsaquo; Zasięg">
                                <FormattedMessage id="Models.longrange range"/>
                            </Collapsible>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Collapsible trigger="&rsaquo; Koła">
                                <FormattedMessage id="Models.longrange wheels"/>
                            </Collapsible>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Collapsible trigger="&rsaquo; Wyposażenie standardowe wersji Long Range">
                                <FormattedMessage id="Models.longrange equipment"/>
                            </Collapsible>
                        </div>
                    </div>
                    <div className="bike-container__specification">
                        <div className="specification_detail">
                            <Collapsible trigger="&rsaquo; Wyposażenie opcjonalne wersji Long Range">
                                <FormattedMessage id="Models.longrange optional equipment"/>
                            </Collapsible>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ModelsPage;
