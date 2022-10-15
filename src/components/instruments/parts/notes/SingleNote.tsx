import { Component, JSXElement } from 'solid-js';
import { styled } from 'solid-styled-components';
import { preferencesState } from '../../../../store/preferences-store';
import { Note } from './note.enum';

const SingleNote: Component<SingleNoteProps> = (props: SingleNoteProps) => {
  const SingleNote = styled('div')<Partial<SingleNoteProps>>(
    props => `
      margin-top: ${props.isOnFret ? '-3.1rem' : ''};
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
      letter-spacing: ${(props.active || props.naturalNote || preferencesState.displaySharps) ? 0 : '-0.25rem'};
      transform: ${props.leftHanded ? 'scaleX(-1)' : ''};
      ${props.active ? 'box-shadow: 0px 0px 0px 0.25rem black;' : ''}

      &:hover {
        transition: transform 0.2s;
        transform: ${props.leftHanded ? 'scale(-1.1, 1.1)' : 'scale(1.1)'};
      }
    `
  );

  const isHighlighted = () => {
    return preferencesState.highlightNaturalNotes && props.note.length === 1;
  }

  const isNaturalNote = () => {
    return props.note.length === 1;
  }

  return (
    <SingleNote
      highlighted={isHighlighted()}
      naturalNote={isNaturalNote()}
      isOnFret={props.isOnFret}
      active={props.active}
      leftHanded={props.leftHanded}
      onClick={props.onClick}
    >
      { props.children }
    </SingleNote>
  );
};

export default SingleNote;

interface SingleNoteProps {
  note: Note;
  isOnFret?: boolean;
  naturalNote?: boolean;
  highlighted?: boolean;
  active?: boolean;
  leftHanded?: boolean;
  children: JSXElement;
  onClick: () => void;
}