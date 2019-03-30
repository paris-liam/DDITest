import React, { Component } from 'react';

const Solution = solution => (
  <div style={{ textAlign: 'center' }}>
    <div className='SolIcon'><h1><i className={`fa fa-${solution.solution.icon}`} /></h1></div>
    <div className='SolTitle'><h3>{solution.solution.title}</h3></div>
    <div className='SolBody'><p>{solution.solution.body}</p></div>
  </div>
);

export default Solution;
