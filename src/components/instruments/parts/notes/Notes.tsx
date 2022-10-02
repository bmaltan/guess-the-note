import { Component, For } from 'solid-js';
import { Note } from './note.enum';

import { styled } from 'solid-styled-components';
import SingleNote from '../notes/SingleNote';
import { bassState } from '../../../../store/bass-store';

const Notes: Component<NotesProps> = (props: NotesProps) => {
  const NotesOnString = styled('div')`
    display: grid;
    grid-template-columns: repeat(${bassState.numOfNotes}, 1fr);
    justify-items: center;
  `;

  const getNotes = (firstNote: Note) => {
    const notes: Note[] = [];
    const availableNotes = Object.values(Note);
    const indexOfFirstNote = availableNotes.indexOf(firstNote) + 1;

    for (let i = 0; i < bassState.numOfNotes; i++) {
      let index = indexOfFirstNote + i;
      if (index > availableNotes.length - 1) {
        index = index - availableNotes.length;
      }
      notes.push(availableNotes[index]);
    }

    return notes;
  }

  return (
    <NotesOnString>
      <For each={getNotes(props.firstNote)}>{(n) =>
        <SingleNote note={n} />
      }</For>
    </NotesOnString>
  );
};

export default Notes;

interface NotesProps {
  firstNote: Note;
}