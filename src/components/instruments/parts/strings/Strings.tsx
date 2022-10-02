import { Component, For } from 'solid-js';
import { bassState } from '../../../../store/bass-store';
import String from './String';
import Notes from '../notes/Notes';

const Strings: Component = () => {
  return (
    <>
      <For each={bassState.firstNotes}>{(note) =>
        <>
          <String />      
          <Notes firstNote={note} />
        </>
      }</For>
    </>
  );
};

export default Strings;

