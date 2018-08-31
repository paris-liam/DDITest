import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 1.5rem;
  padding-bottom:10px;
`;
const Body = styled.div`
  font-size: 1rem;
  color:white;
  width:70%;
  margin: 0 auto 0 auto;
`;
const Icon = styled.div`
  font-size: 3.25rem;
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
