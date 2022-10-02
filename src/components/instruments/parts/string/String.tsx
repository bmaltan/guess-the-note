import { Component, createSignal, For, onMount } from 'solid-js';
import { Note } from '../single-note/Note.enum';

import { styled } from 'solid-styled-components';
import SingleNote from '../single-note/SingleNote';


const String: Component<StringProps> = (props: StringProps) => {
  const StringLine = styled('div')`
    border-bottom: 1px solid black;
    margin: 2rem 0;
  `;

  const NotesOnString = styled('div')`
    display: grid;
    grid-template-columns: repeat(${props.numOfNotes}, 1fr);
    justify-items: center;
  `; 

  const [notes, setNotes] = createSignal<Note[]>([]);

  onMount(() => {
    setNotes(getNotes(props.firstNote))
  })

  const getNotes = (firstNote: Note) => {
    const notes: Note[] = [];
    const availableNotes = Object.values(Note);
    const indexOfFirstNote = availableNotes.indexOf(firstNote) + 1;

    for (let i = 0; i < 12; i++) {
      let index = indexOfFirstNote + i;
      if (index > availableNotes.length - 1) {
        index = index - availableNotes.length;
      }
      notes.push(availableNotes[index]);
    }

    return notes;
  }

  return (
    <>
      <StringLine />      
      <NotesOnString>
        <For each={notes()}>{(note) =>
          <SingleNote note={note} />
        }</For>
      </NotesOnString>
    </>
  );
};

export default String;

interface StringProps {
  firstNote: Note;
  numOfNotes: number;
}
