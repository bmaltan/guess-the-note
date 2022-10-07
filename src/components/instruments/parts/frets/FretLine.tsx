import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

const FretLine: Component = () => {
  const FretLine = styled('div')`
    border-right: 0.0625rem solid black;
    height: 100%;

    &:first-child {
      border-left: 0.0625rem solid black;
    }
  `;

  return <FretLine />;
};

export default FretLine;
