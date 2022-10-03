import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

import Strings from './parts/strings/Strings';
import Frets from './parts/frets/Frets';

const Bass: Component = () => {
  const Fretboard = styled('div')`
    position: relative;
  `;

  return (
    <>
      <Fretboard>
        <Frets />
        <Strings />
      </Fretboard>
    </>
  );
};

export default Bass;
