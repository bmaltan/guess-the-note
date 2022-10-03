import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

const FretLine: Component = () => {
  const FretLine = styled('div')`
    border-right: 1px solid black;
    height: 100%;

    &:first-child {
      border-left: 1px solid black;
    }
  `;

  return <FretLine />;
};

export default FretLine;
