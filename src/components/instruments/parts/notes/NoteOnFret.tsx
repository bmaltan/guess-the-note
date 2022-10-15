import { Component, createEffect } from 'solid-js';
import { Note } from './note.enum';
import { preferencesState } from '../../../../store/preferences-store';
import { getNoteFlipped, instrumentState, setNoteFlipped } from '../../../../store/instrument-store';
import { convertFlatToSharp } from '../../../../utils/utils';
import { gameState, setActiveNote } from '../../../../store/game-store';
import SingleNote from './SingleNote';

const NoteOnFret: Component<NoteOnFretProps> = (props: NoteOnFretProps) => {
  const onClick = () => {
    setNoteFlipped(props.noteIndex, props.stringIndex);
  }

  const isActive = () => {
    return instrumentState.activeNotePos === `${props.stringIndex}-${props.noteIndex}`;
  }

  createEffect(() => {
    if (isActive()) {
      setActiveNote(props.note);
    }
  });

  const getNoteToDisplay = () => {
    if (gameState.active && isActive()) {
      return '?'
    }
    else if (!gameState.active && getNoteFlipped(props.noteIndex, props.stringIndex)) {
      return preferencesState.displaySharps ? convertFlatToSharp(props.note) : props.note;
    }
    return '';
  }

  return (
    <SingleNote
      note={props.note}
      active={isActive()}
      isOnFret
      leftHanded={preferencesState.leftHanded}
      onClick={onClick}
    >
      { getNoteToDisplay() }
    </SingleNote>
  );
};

export default NoteOnFret;

interface NoteOnFretProps {
  note: Note;
  stringIndex: number;
  noteIndex: number;
}
