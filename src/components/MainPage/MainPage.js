import React from 'react';

import HeaderBike from '../../images/header-bike.svg'
import HeaderLogo from '../../images/header-logo.svg'

import './MainPage.scss';

const MainPage = () => {
    return (
        <section className="top">
            <HeaderBike className="top__header-bike"/>
            <div className="top__header-kicker-container"> 
                <HeaderLogo className="kicker-containe__header-logo"/>
            </div>
        </section>
    )
}

export default MainPage
    