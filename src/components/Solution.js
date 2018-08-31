import React, { Component } from 'react';
import { SolTitle, SolBody, SolIcon } from '../style';

const Solution = solution => (
  <div style={{
      textAlign: 'center',
  }}
  >
    <SolIcon><i className={`fa fa-${solution.solution.icon}`} /></SolIcon>
    <SolTitle><h1>{solution.solution.title}</h1></SolTitle>
    <SolBody><p>{solution.solution.body}</p></SolBody>
  </div>
);

export default Solution;
