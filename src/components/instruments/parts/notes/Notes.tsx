import { Component, For } from 'solid-js';
import { Note } from './note.enum';

import { styled } from 'solid-styled-components';
import SingleNote from '../notes/SingleNote';
import { instrumentState } from '../../../../store/instrument-store';

const Notes: Component<NotesProps> = (props: NotesProps) => {
  const NotesOnString = styled('div')<{numOfFrets: number}>(
    props => `
      display: grid;
      grid-template-columns: repeat(${props.numOfFrets}, 1fr);
      justify-items: center;
    `
  );

  const getNotes = (firstNote: Note) => {
    const notes: Note[] = [];
    const availableNotes = Object.values(Note);
    const indexOfFirstNote = availableNotes.indexOf(firstNote) + 1;

    for (let i = 0; i < instrumentState.numOfFrets; i++) {
      const index = (indexOfFirstNote + i) % availableNotes.length;
      notes.push(availableNotes[index]);
    }

    return notes;
  }

  return (
    <NotesOnString numOfFrets={instrumentState.numOfFrets}>
      <For each={getNotes(props.firstNote)}>{(n, i) =>
        <SingleNote
          note={n}
          stringIndex={props.stringIndex}
          noteIndex={i()}
        />
      }</For>
    </NotesOnString>
  );
};

export default Notes;

interface NotesProps {
  firstNote: Note;
  stringIndex: number;
}
