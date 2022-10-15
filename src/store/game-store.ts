import { createStore } from "solid-js/store";
import { Note } from "../components/instruments/parts/notes/note.enum";

export const [gameState, setGameState] = createStore<GameState>({
  active: false,
  activeNote: '',
  correctResponses: 0,
  incorrectResponses: 0,
});

export const setGameActive = (gameActive: boolean) => {
  setGameState({
    ...gameState,
    active: gameActive,
    correctResponses: 0,
    incorrectResponses: 0,
  });
}

export const setActiveNote = (note: Note) => {
  setGameState({
    ...gameState,
    activeNote: note,
  });
}

export const checkGuess = (guess: Note) => {
  if (guess === gameState.activeNote) {
    setGameState({
      ...gameState,
      correctResponses: gameState.correctResponses + 1,
    });
  } else {
    setGameState({
      ...gameState,
      incorrectResponses: gameState.incorrectResponses + 1,
    });
  }
  return guess === gameState.activeNote;
}

interface GameState {
  active: boolean;
  activeNote: Note | '';
  correctResponses: number;
  incorrectResponses: number;
}
