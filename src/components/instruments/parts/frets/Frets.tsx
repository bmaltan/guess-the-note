import { Component, For } from 'solid-js';
import { styled } from 'solid-styled-components';
import { instrumentState } from '../../../../store/instrument-store';
import FretLine from './FretLine';
import FretMarkers from './FretMarkers';

const Bass: Component = () => {
  const Container = styled('div')<{numOfFrets: number}>(
    props => `
      display: grid;
      grid-template-columns: repeat(${props.numOfFrets}, 1fr);
      width: 100%;
      position: absolute;
      height: calc(100% - 2rem);
    `
  );

  return (
    <>
      <Container numOfFrets={instrumentState.numOfFrets}>
        <For each={[...Array(instrumentState.numOfFrets)]}>{() =>
          <FretLine />
        }</For>
      </Container>
      <Container numOfFrets={instrumentState.numOfFrets}>
        <For each={[...Array(instrumentState.numOfFrets)]}>{(_fret, i) =>
          <FretMarkers index={i()}/>
        }</For>
      </Container>
    </>
  );
};

export default Bass;
