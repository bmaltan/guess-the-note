import { Component, For } from 'solid-js';
import { styled } from 'solid-styled-components';
import { getFretWidths } from '../../../../shared/theme';
import { instrumentState } from '../../../../store/instrument-store';
import FretLine from './FretLine';
import FretMarkers from './FretMarkers';

const Frets: Component = () => {
  const Frets = styled('div')<{numOfFrets: number}>(
    props => `
      display: grid;
      grid-template-columns: ${getFretWidths(props.numOfFrets)};
      width: 100%;
      position: absolute;
      height: calc(100% - 2rem);
    `
  );

  return (
    <>
      <Frets numOfFrets={instrumentState.numOfFrets}>
        <For each={[...Array(instrumentState.numOfFrets)]}>{() =>
          <FretLine />
        }</For>
      </Frets>
      <Frets numOfFrets={instrumentState.numOfFrets}>
        <For each={[...Array(instrumentState.numOfFrets)]}>{(_fret, i) =>
          <FretMarkers index={i()}/>
        }</For>
      </Frets>
    </>
  );
};

export default Frets;
