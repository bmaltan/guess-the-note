import { Component, createSignal } from 'solid-js';
import { Note } from './note.enum';
import { styled } from 'solid-styled-components';
import { preferencesState } from '../../../../store/preferences-store';
import { getNoteFlipped, setNoteFlipped } from '../../../../store/instrument-store';
import { convertFlatToSharp } from '../../../../utils/utils';

const SingleNote: Component<NoteProps> = (props: NoteProps) => {

  const NoteContainer = styled('div')<NoteContainerProps>(
    props => `
      margin-top: -3.1rem;
      border: 0.0625rem solid black;
      padding: 0.5rem;
      height: 1rem;
      line-height: 1rem;
      width: 1.25rem;
      text-align: center;
      z-index: 10;
      cursor: pointer;
      border-radius: 1rem;
      color: ${props.highlighted ? 'white' : 'black'};
      background: ${props.highlighted ? '#474747' : '#f0f0f0'};
      font-weight: bold;
      font-family: 'Arial';
      letter-spacing: ${(props.naturalNote || preferencesState.displaySharps) ? 0 :'-0.25rem'};
      transform: ${props.leftHanded ? 'scaleX(-1)' : ''};
      
      &:hover {
        transition: transform 0.2s;
        transform: ${props.leftHanded ? 'scale(-1.1, 1.1)' : 'scale(1.1)'};
      }
    `
  );

  const [noteId, _] = createSignal(`${props.stringId}_${props.noteIndex}`);
  
  const onClick = () => {
    setNoteFlipped(noteId(), !getNoteFlipped(noteId()));
  }

  const isHighlighted = () => {
    return preferencesState.highlightNaturalNotes && props.note.length === 1;
  }

  const getNoteToDisplay = () => {
    if (getNoteFlipped(noteId())) {
      return preferencesState.displaySharps ? convertFlatToSharp(props.note) : props.note;
    }
    return '';
  }
  
  return (
    <NoteContainer 
      highlighted={isHighlighted()}
      naturalNote={props.note.length === 1}
      leftHanded={preferencesState.leftHanded}
      onClick={onClick}
    >
      { getNoteToDisplay() }
    </NoteContainer>
  );
};

export default SingleNote;

interface NoteContainerProps {
  highlighted: boolean;
  naturalNote: boolean;
  leftHanded: boolean;
}

interface NoteProps {
  note: Note;
  stringId: string;
  noteIndex: number;
}