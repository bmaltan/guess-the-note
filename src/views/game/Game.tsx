import { Component, For, Show } from 'solid-js';
import { Note } from '../../components/instruments/parts/notes/note.enum';
import SingleNote from '../../components/instruments/parts/notes/SingleNote';
import { checkGuess, gameState, setGameActive } from '../../store/game-store';
import { activateRandomNote, clearActiveNote } from '../../store/instrument-store';
import { preferencesState } from '../../store/preferences-store';
import Button from '../../ui-lib/Button';
import Grid from '../../ui-lib/Grid';
import Heading2 from '../../ui-lib/Heading2';
import { convertFlatToSharp } from '../../utils/utils';

const Game: Component = () => {

  const onStartGame = () => {
    setGameActive(true);
    activateRandomNote();
  }

  const onEndGame = () => {
    setGameActive(false);
    clearActiveNote();
  }

  const onGuess = (note: Note) => {
    if (checkGuess(note)) {
      activateRandomNote();
    }
  }

  const getNoteToDisplay = (note: Note) => {
    return preferencesState.displaySharps ? convertFlatToSharp(note) : note;
  }

  return (
    <>
    <Heading2>Game mode</Heading2>
      <div>
        <Button
          onClick={() => gameState.active ? onEndGame() : onStartGame()}
          label={gameState.active ? 'Stop' : 'Start'}
        />
        <Show
          when={!gameState.active}
          fallback={<span>What's the highlighted note?</span>}
        >
          <span>Guess as many notes as you can!</span>
        </Show>
      </div>
      <Show when={gameState.active}>
        <div>Correct guesses: {gameState.correctResponses}</div>
        <div>Incorrect guesses: {gameState.incorrectResponses}</div>
        <Grid
          gap="1.5rem"
          gridTemplateColumns="repeat(auto-fill, minmax(auto, 2rem))"
        >
          <For each={Object.values(Note)}>{(n) =>
            <SingleNote
              note={n}
              onClick={() => onGuess(n)}
            >
              { getNoteToDisplay(n) }
            </SingleNote>
          }</For>
        </Grid>
      </Show>
    </>
  );
};

export default Game;
