import { Component } from 'solid-js';

import { styled } from 'solid-styled-components';

const String: Component = () => {
  const String = styled('div')`
    border-bottom: 1px solid black;
    margin: 2rem 0;
  `;

  return (
    <String />
  );
};

export default String;

