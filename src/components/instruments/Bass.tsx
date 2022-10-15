import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

import Strings from './parts/strings/Strings';
import Frets from './parts/frets/Frets';
import { instrumentState } from '../../store/instrument-store';
import { preferencesState } from '../../store/preferences-store';
import Heading2 from '../../ui-lib/Heading2';

const Bass: Component = () => {
  const Container = styled('div')<{ leftHanded: boolean }>(
    props => `
      max-width: 100%;
      overflow-x: auto;
      transform: ${props.leftHanded ? 'scaleX(-1)' : ''};
    `
  );

  const Fretboard = styled('div')<{numOfFrets: number}>(
    props => `
      position: relative;
      min-width: ${props.numOfFrets * 5}rem;
    `
  );

  return (
    <>
      <Heading2>Fretboard</Heading2>
      <Container leftHanded={preferencesState.leftHanded}>
        <Fretboard numOfFrets={instrumentState.numOfFrets}>
          <Frets />
          <Strings />
        </Fretboard>
      </Container>
    </>
  );
};

export default Bass;
