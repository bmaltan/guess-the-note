import { Component, For } from 'solid-js';
import { instrumentState } from '../../../../store/instrument-store';
import String from './String';
import Notes from '../notes/Notes';

const Strings: Component = () => {


  return (
    <>
      <For each={instrumentState.strings}>{(string, i) =>
        <>
          <String />
          <Notes
            firstNote={string.firstNote}
            stringIndex={i()}
          />
        </>
      }</For>
    </>
  );
};

export default Strings;

