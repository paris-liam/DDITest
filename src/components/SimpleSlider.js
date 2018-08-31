import React, { Component } from 'react';
import Slider from 'react-slick';
import Solution from './Solution';

const responsiveArray = [
  {
    breakpoint: 1300,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      swipeToSlide: true,
      adaptiveHeight: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    },
  },
  {
    breakpoint: 950,
    settings: {
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      swipeToSlide: true,
      adaptiveHeight: true,
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

const info = [
  {
    icon: 'first-aid',
    title: 'Healthcare',
    body: 'DDI has worked alongside healthcare providers for over 25 years, easing financial concerns and constraints through our flexible leasing and financing solutions. We are experts at helping you effectively manage cash flow so you can continue to focus on providing quality care.',
  },
  {
    icon: 'graduation-cap',
    title: 'Education',
    body: 'Technology is the future of innovation in the modern classroom. DDI works with hundreds of school districts, public and private, providing the tools to reinvent education and helping bring their visions of learning in the 21st century to life.',
  },
  {
    icon: 'camera',
    title: 'Media',
    body: 'From broadcasting to production and distribution, media companies rely on DDI to stay current and competitive in the ever-evolving entertainment industry, without pressing the “pause button” on growth.',
  },
  {
    icon: 'shopping-cart',
    title: 'Retail',
    body: 'From disruptive growth companies to Fortune 500s, DDI offers tailored and appropriate financing solutions to help your sales boom, keep your data safe and ensure your offerings remain competitive.',
  },
  {
    icon: 'cogs',
    title: 'Manufacturing',
    body: 'The need for state-of-the-art technology to enhance manufacturing and workflow operations is critical. Our leasing solutions help maximize your company’s productivity and efficiency.',
  },
  {
    icon: 'money-bill-wave',
    title: 'Financial',
    body: 'In no other industry is the “Internal Rate of Return” dynamic more evident. DDI’s flexible and creative solutions allow financial institutions to keep their capital for operations, rather than solving technology problems, all while fitting cleanly into allocated budgets.',
  },
  {
    icon: 'bullhorn',
    title: 'Managed Service Providers',
    body: '  In the most rapidly evolving landscape, establish, expand and reinvent your business with the latest technologies to ensure your customers will not look elsewhere. DDI offers the solutions to keep your technology current and help your business to thrive.',
  },
  {
    icon: 'bed',
    title: 'Hospitality',
    body: 'Leading hospitality brands depend on DDI to help them connect with guests and improve operational efficiencies so they can deliver the best possible experiences to their customers.',
  },
];
const SimpleSlider = () => (
  <Slider infinite slidesToShow={3} slidesToScroll={1} responsive={responsiveArray} nextArrow={<SampleNextArrow />} prevArrow={<SamplePrevArrow />}>
    {
    info.map(solution => <Solution key={solution.title} solution={solution} />)
    }
  </Slider>
);


export default SimpleSlider;

