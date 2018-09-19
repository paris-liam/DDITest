import React from 'react';

export function SampleNextArrow(props) {
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

export function SamplePrevArrow(props) {
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
