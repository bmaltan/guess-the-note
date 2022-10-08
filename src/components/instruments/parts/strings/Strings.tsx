import { Component, For } from 'solid-js';
import { instrumentState } from '../../../../store/instrument-store';
import String from './String';
import Notes from '../notes/Notes';

const Strings: Component = () => {
  return (
    <>
      <For each={instrumentState.firstNotes}>{(note) =>
        <>
          <String />      
          <Notes 
            firstNote={note.note}
            stringId={note.id}
          />
        </>
      }</For>
    </>
  );
};

export default Strings;

