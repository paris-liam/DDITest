import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 1rem;
`;
const Body = styled.div`
  font-size: .75rem;
  color:white;
`;
const Icon = styled.div`
  font-size: 2rem;
`;

const Solution = solution => (
  <div style={{
      textAlign: 'center',
  }}
  >
    <Icon><i className={`fa fa-${solution.solution.icon}`} /></Icon>
    <Title><h1>{solution.solution.title}</h1></Title>
    <Body><p>{solution.solution.body}</p></Body>
  </div>
);

export default Solution;
