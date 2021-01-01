import React from 'react';

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
                <h1 className="kicker__company-name">Ponty Bike</h1>
            </div>
        </section>
    )
}

export default MainPage
    