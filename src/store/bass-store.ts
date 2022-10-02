import { createStore } from "solid-js/store";
import { Note } from "../components/instruments/parts/notes/note.enum";

const [bassState, setBassState] = createStore({
  numOfNotes: 12,
  firstNotes: [Note.G, Note.D, Note.A, Note.E]
});

const setNumOfNotes = (numOfNotes: number) => {
  setBassState({
    ...bassState,
    numOfNotes
  });
};

const setFirstNotes = (firstNotes: Note[]) => {
  setBassState({
    ...bassState,
    firstNotes
  });
};

export { bassState, setNumOfNotes, setFirstNotes };