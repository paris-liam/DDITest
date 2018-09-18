import React, { Component } from 'react';
import Slider from 'react-slick';
import Solution from './Solution';
import { sliderInfo } from '../style/dataAndCopy';

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
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    },
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="new-slick-next"
      onClick={onClick}
    >
      <i className="fa fa-angle-right" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="new-slick-prev"
      onClick={onClick}
    >
      <i className="fa fa-angle-left" />
    </div>
  );
}

const SimpleSlider = () => (
  <Slider infinite slidesToShow={2} slidesToScroll={1} responsive={responsiveArray} nextArrow={<SampleNextArrow />} prevArrow={<SamplePrevArrow />} autoplay autoplaySpeed={2000}>
    {
    sliderInfo.map(solution => <Solution key={solution.title} solution={solution} />)
    }
  </Slider>
);


export default SimpleSlider;

