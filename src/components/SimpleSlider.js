import React, { Component } from 'react';
import Slider from 'react-slick';
import Solution from './Solution';
import { sliderInfo } from '../style/dataAndCopy';
import { SampleNextArrow, SamplePrevArrow } from './sliderArrows';

const responsiveArray = [
  {
    breakpoint: 950,
    settings: {
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    },
  },
];


const SimpleSlider = () => (
  <Slider infinite slidesToShow={2} slidesToScroll={1} responsive={responsiveArray} nextArrow={<SampleNextArrow />} prevArrow={<SamplePrevArrow />} autoplay autoplaySpeed={2000}>
    {
    sliderInfo.map(solution => <Solution key={solution.title} solution={solution} />)
    }
  </Slider>
);


export default SimpleSlider;

