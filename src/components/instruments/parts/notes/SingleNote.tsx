import { Component, createEffect, JSXElement } from 'solid-js';
import { styled } from 'solid-styled-components';
import { checkIfCurrentIncorrectGuess } from '../../../../store/game-store';
import { preferencesState } from '../../../../store/preferences-store';
import { Note } from './note.enum';

const SingleNote: Component<SingleNoteProps> = (props: SingleNoteProps) => {
  let ref: HTMLDivElement | undefined = undefined;
  ref = undefined;

  const SingleNote = styled('div')<Partial<SingleNoteProps>>(
    props => `
      ${props.isOnFret ? 'margin-top: -3.1rem;' : ''}
      border: 0.0625rem solid black;
      padding: 0.5rem;
      height: 1rem;
      line-height: 1rem;
      width: 1.25rem;
      text-align: center;
      z-index: 10;
      ${!props.disabled ? 'cursor: pointer;' : ''}
      border-radius: 1rem;
      color: ${props.highlighted ? 'white' : 'black'};
      background: ${props.highlighted ? '#474747' : '#f0f0f0'};
      font-weight: bold;
      font-family: 'Arial';
      letter-spacing: ${(props.active || props.naturalNote || preferencesState.displaySharps) ? 0 : '-0.25rem'};
      ${props.leftHanded ? 'transform: scaleX(-1);' : ''}
      ${props.active ? 'box-shadow: 0px 0px 0px 0.25rem black;' : ''}
      ${ props.disabled ? 'opacity: 0.5;' : ''}

      &:hover {
        transition: transform 0.2s;
        ${!props.disabled ? `transform: ${props.leftHanded ? 'scale(-1.1, 1.1)' : 'scale(1.1)'};` : ''}
      }
    `
  );

  createEffect(() => {
    if (props.active) {
      ref?.scrollIntoView({inline: 'center', behavior: 'smooth'});
    }
  })

  const isHighlighted = () => {
    return preferencesState.highlightNaturalNotes && props.note.length === 1;
  }

  const isNaturalNote = () => {
    return props.note.length === 1;
  }

  const isDisabled = () => {
    return !props.isOnFret && checkIfCurrentIncorrectGuess(props.note);
  }

  return (
    <SingleNote
      ref={ref}
      highlighted={isHighlighted()}
      naturalNote={isNaturalNote()}
      disabled={isDisabled()}
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
  disabled? :boolean;
  highlighted?: boolean;
  active?: boolean;
  leftHanded?: boolean;
  children: JSXElement;
  onClick: () => void;
}