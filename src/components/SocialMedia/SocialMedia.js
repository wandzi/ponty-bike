import React from 'react';
import './SocialMedia.scss';

import FB from '../../images/socials/fb.svg'
import IG from '../../images/socials/ig.svg'
import YT from '../../images/socials/yt.svg'

const SocialMedia = () => {
    return (
        <div className="social-container">
            <a href="https://www.facebook.com/PontyBike" target="_blank" rel="noopener noreferrer" className="social-container__link">
                <FB className="social-container__icon"/>
            </a>
            <a href="https://www.instagram.com/pontybike/" target="_blank" rel="noopener noreferrer" className="social-container__link">
                <IG className="social-container__icon"/>
            </a>
            <a href="https://www.youtube.com/channel/UCBb2Mzo6yjbloD_y075Bz0g" target="_blank" rel="noopener noreferrer" className="social-container__link">
                <YT className="social-container__icon"/>
            </a>
        </div>
    )
}

export default SocialMedia
    