import { Component, createSignal } from 'solid-js';
import { Note } from './parts/note/Note.enum';

import String from './parts/string/String';


const Bass: Component = () => {
  const [firstNotes, setFirstNotes] = createSignal<Note[]>([Note.E, Note.A, Note.D, Note.G]);

  return (
    <String />
  );
};

export default Bass;
