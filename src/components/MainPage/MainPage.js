import React from 'react';
import { FormattedMessage } from 'react-intl';

import HeaderBike from '../../images/header-bike.svg'
import HeaderLogo from '../../images/header-logo.svg'

import './MainPage.scss';

const MainPage = () => {
    return (
        <section className="top">
            <div className="top__filter"></div>
            <HeaderBike className="top__header-bike"/>
            <div className="top__header-kicker-container">
                <HeaderLogo className="kicker-containe__header-logo"/>
                <h1 className="kicker__title">
                    <FormattedMessage id="home.HeroTitle" />
                </h1>
                <h1  className="kicker__company-name">PontyBike</h1>
            </div>
        </section>
    )
}

export default MainPage
    