import React, { Component } from "react";
import Slider from "react-slick";
import SliderFirst from '../../images/slider/slider-first.svg'
import SliderSecond from '../../images/slider/slider-second.svg'
import SliderThird from '../../images/slider/slider-third.svg'
import SliderFourth from '../../images/slider/slider-fourth.svg'
import SliderFifth from '../../images/slider/slider-fifth.svg'
import Slidersixth from '../../images/slider/slider-sixth.svg'
import Sliderseventh from '../../images/slider/slider-seventh.svg'
import Slidereight from '../../images/slider/slider-eight.svg'
import Slidereleventh from '../../images/slider/slider-eleventh.svg'
import Slidertwelveth from '../../images/slider/slider-twelveth.svg'
import Sliderthirteenth from '../../images/slider/slider-thirteenth.svg'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./slider.scss"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}  className="overflow-hidden">
          <div className="slider-image">
           <SliderFirst />
          </div>
          <div>
            <SliderSecond />
          </div>
          <div>
            <SliderThird />
          </div>
          <div>
            <SliderFourth />
          </div>
          <div>
            <SliderFifth />
          </div>
          <div>
            <Slidersixth />
          </div>
          <div>
            <Sliderseventh />
          </div>
          <div>
            <Slidereight />
          </div>
          <div>
            <Slidereleventh />
          </div>
          <div>
            <Slidertwelveth />
          </div>
          <div>
            <Sliderthirteenth />
          </div>
        </Slider>
      </div>
    );
  }
}