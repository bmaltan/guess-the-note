import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

import Strings from './parts/strings/Strings';
import Frets from './parts/frets/Frets';
import Preferences from '../shared/Preferences';

const Bass: Component = () => {
  const Fretboard = styled('div')`
    position: relative;
  `;

  return (
    <>
      <Preferences />
      <Fretboard>
        <Frets />
        <Strings />
      </Fretboard>
    </>
  );
};

export default Bass;
