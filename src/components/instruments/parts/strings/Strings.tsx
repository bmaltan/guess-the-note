import { Component, For } from 'solid-js';
import { instrumentState } from '../../../../store/instrument-store';
import String from './String';
import Notes from '../notes/Notes';

const Strings: Component = () => {
  return (
    <>
      <For each={instrumentState.firstNotes}>{(note, i) =>
        <>
          <String />      
          <Notes 
            firstNote={note} 
            stringIndex={i()}
          />
        </>
      }</For>
    </>
  );
};

export default Strings;

