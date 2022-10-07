import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

import Strings from './parts/strings/Strings';
import Frets from './parts/frets/Frets';
import { instrumentState } from '../../store/instrument-store';
import { preferencesState } from '../../store/preferences-store';

const Bass: Component = () => {
  const Fretboard = styled('div')<{numOfFrets: number}>(
    props => `
      position: relative;
      min-width: ${props.numOfFrets * 5}rem;
    `
  );

  const Container = styled('div')<{ leftHanded: boolean }>(
    props => `
      max-width: 100%;
      overflow-x: auto;
      transform: ${props.leftHanded ? 'scaleX(-1)' : ''};
    `
  );

  return (
    <Container leftHanded={preferencesState.leftHanded}>
      <Fretboard numOfFrets={instrumentState.numOfFrets}>
        <Frets />
        <Strings />
      </Fretboard>
    </Container>
  );
};

export default Bass;
