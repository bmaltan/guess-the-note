import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

const Divider: Component = () => {
  const Container = styled('div')`
    width: 100%;
    border-top: 1px solid #ddd;
    margin: 0.25rem 0;
  `;

  return (
    <Container />
  );
};

export default Divider;
