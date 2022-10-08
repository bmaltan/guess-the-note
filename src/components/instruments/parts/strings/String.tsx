import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

const String: Component = () => {
  const String = styled('div')`
    border-bottom: 0.0625rem solid black;
    margin: 2rem 0;
  `;

  return (
    <String />
  );
};

export default String;

