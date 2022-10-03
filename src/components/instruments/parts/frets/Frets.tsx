import { Component, For } from 'solid-js';
import { styled } from 'solid-styled-components';
import { bassState } from '../../../../store/bass-store';
import FretLine from './FretLine';
import FretMarkers from './FretMarkers';

const Bass: Component = () => {
  const Container = styled('div')`
    display: grid;
    grid-template-columns: repeat(${bassState.numOfNotes}, 1fr);
    width: 100%;
    position: absolute;
    height: calc(100% - 2rem);
  `;

  return (
    <>
      <Container>
        <For each={[...Array(bassState.numOfNotes)]}>{() =>
          <FretLine />
        }</For>
      </Container>
      <Container>
        <For each={[...Array(bassState.numOfNotes)]}>{(_fret, i) =>
          <FretMarkers index={i()}/>
        }</For>
      </Container>
    </>
  );
};

export default Bass;
