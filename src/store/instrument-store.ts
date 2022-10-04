import { createStore } from "solid-js/store";
import { Note } from "../components/instruments/parts/notes/note.enum";

const [instrumentState, setInstrumentState] = createStore({
  numOfFrets: 12,
  firstNotes: [Note.G, Note.D, Note.A, Note.E]
});

const setNumOfFrets = (numOfFrets: number) => {
  setInstrumentState({
    ...instrumentState,
    numOfFrets
  });
};

const setFirstNotes = (firstNotes: Note[]) => {
  setInstrumentState({
    ...instrumentState,
    firstNotes
  });
};

export { instrumentState, setNumOfFrets, setFirstNotes };