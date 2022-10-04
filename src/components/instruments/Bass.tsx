import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

import Strings from './parts/strings/Strings';
import Frets from './parts/frets/Frets';
import { instrumentState } from '../../store/instrument-store';

const Bass: Component = () => {
  const Fretboard = styled('div')<{numOfFrets: number}>(
    props => `
      position: relative;
      min-width: ${props.numOfFrets * 80}px;
    `
  );

  const Container = styled('div')`
    max-width: 100%;
    overflow-x: auto;
  `;

  return (
    <Container>
      <Fretboard numOfFrets={instrumentState.numOfFrets}>
        <Frets />
        <Strings />
      </Fretboard>
    </Container>
  );
};

export default Bass;
