import { Component, createSignal } from 'solid-js';
import { Note } from './note.enum';
import { styled } from 'solid-styled-components';

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
  background: #f0f0f0;
  font-weight: bold;
`;

const SingleNote: Component<NoteProps> = (props: NoteProps) => {
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