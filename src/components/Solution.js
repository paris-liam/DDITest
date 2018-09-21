import React, { Component } from 'react';
import { SolTitle, SolBody, SolIcon } from '../style/style-index';

const Solution = solution => (
  <div style={{ textAlign: 'center' }}>
    <SolIcon><h1><i className={`fa fa-${solution.solution.icon}`} /></h1></SolIcon>
    <SolTitle><h3>{solution.solution.title}</h3></SolTitle>
    <SolBody><p>{solution.solution.body}</p></SolBody>
  </div>
);

export default Solution;
