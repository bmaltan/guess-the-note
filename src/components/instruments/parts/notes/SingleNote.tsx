import { Component, createSignal } from 'solid-js';
import { Note } from './note.enum';
import { styled } from 'solid-styled-components';
import { preferencesState } from '../../../../store/preferences-store';

const SingleNote: Component<NoteProps> = (props: NoteProps) => {
  
  const NoteContainer = styled('div')`
    margin-top: -3.15rem;
    border: 1px solid black;
    padding: 0.5rem;
    height: 1rem;
    line-height: 1rem;
    width: 2rem;
    text-align: center;
    z-index: 10;
    cursor: pointer;
    border-radius: 1rem;
    background: ${preferencesState.highlightNaturalNotes ? 'black' : '#f0f0f0'};
    font-weight: bold;

    &:hover {
      background: #dbdbdb;
      outline: 1px solid black;
    }
  `;

  const [display, setDisplay] = createSignal<boolean>(false);
  
  const onClick = () => {
    setDisplay(!display());
  }
  
  return (
    <NoteContainer onClick={onClick}>
      { display() ? props.note : '' }
    </NoteContainer>
  );
};

export default SingleNote;

interface NoteProps {
  note: Note;
}