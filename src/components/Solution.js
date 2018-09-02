import React, { Component } from 'react';
import { SolTitle, SolBody, SolIcon } from '../style-index';

const Solution = solution => (
  <div style={{
      textAlign: 'center',
  }}
  >
    <SolIcon><h1><i className={`fa fa-${solution.solution.icon}`} /></h1></SolIcon>
    <SolTitle>  {solution.solution.title.split('\n').map((item, key) => (
      <h3 key={key}>
        {item}
        <br/>
      </h3>
    ))}
    </SolTitle>
    <SolBody>  {solution.solution.body.split('\n').map((item, key) => (
      <p key={key}>
        {item}
        <br/>
      </p>
    ))}
    </SolBody>
  </div>
);

export default Solution;
