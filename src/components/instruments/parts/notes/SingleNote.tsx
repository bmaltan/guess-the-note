import { Component, createSignal } from 'solid-js';
import { Note } from './note.enum';
import { styled } from 'solid-styled-components';
import { preferencesState } from '../../../../store/preferences-store';

const SingleNote: Component<NoteProps> = (props: NoteProps) => {

  const NoteContainer = styled('div')<{highlighted: boolean}>(
    props => `
      margin-top: -3.15rem;
      border: 1px solid black;
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
  
      &:hover {
        outline: 1px solid black;
      }
    `
  );
  
  const [display, setDisplay] = createSignal<boolean>(false);
  
  const onClick = () => {
    setDisplay(!display());
  }

  const isHighlighted = () => {
    return preferencesState.highlightNaturalNotes && props.note.length === 1;
  }
  
  return (
    <NoteContainer 
      highlighted={isHighlighted()}
      onClick={onClick}
    >
      { display() ? props.note : '' }
    </NoteContainer>
  );
};

export default SingleNote;

interface NoteProps {
  note: Note;
}