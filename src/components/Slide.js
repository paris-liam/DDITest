import React from 'react';
import styled from 'styled-components';

const Slide = info => (
  <SlideContainer>
    <i className={`fa fa-${info.icon}`} />
    <h3>{info.title}</h3>
    <p>{info.body}</p>
  </SlideContainer>
);

export default Slide;
