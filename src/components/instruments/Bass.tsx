import { Component, createSignal, For } from 'solid-js';
import { Note } from './parts/single-note/Note.enum';
import { styled } from 'solid-styled-components';

import String from './parts/string/String';

const FretLine = styled('div')`
  border-right: 1px solid black;
  height: 100%;
`;

const Bass: Component = () => {
  const Container = styled('div')`
    position: relative;
  `;

  const Frets = styled('div')`
    display: grid;
    grid-template-columns: repeat(${12}, 1fr);
    width: 100%;
    position: absolute;
    height: calc(100% - 2rem);
  `;

  const [firstNotes, _setFirstNotes] = createSignal<Note[]>([Note.G, Note.D, Note.A, Note.E]);

  return (
    <Container>
      <Frets class="FUCK">
        <For each={[...Array(12)]}>{() =>
          <FretLine />
        }</For>
      </Frets>
      <For each={firstNotes()}>{(note) =>
        <String 
          firstNote={note} 
          numOfNotes={12}
        />
      }</For>
    </Container>

  );
};

export default Bass;
