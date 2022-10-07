import { createStore } from "solid-js/store";
import { Note } from "../components/instruments/parts/notes/note.enum";

const [instrumentState, setInstrumentState] = createStore<InstrumentState>({
  numOfFrets: 12,
  firstNotes: [Note.G, Note.D, Note.A, Note.E],
  noteFlipped: {},
});

const setNumOfFrets = (numOfFrets: number) => {
  setInstrumentState({
    ...instrumentState,
    [InstrumentProperty.NumOfFrets]: numOfFrets,
  });
};

const setNoteFlipped = (note: string, flipped: boolean) => {
  setInstrumentState({
    ...instrumentState,
    [InstrumentProperty.NoteFlipped]: {
      ...instrumentState.noteFlipped,
      [note]: flipped,
    },
  });
};

const getNoteFlipped = (note: string) => {
  return instrumentState.noteFlipped[note];
};

const setFirstNote = (index: number, firstNote: Note) => {
  const firstNotes = [...instrumentState.firstNotes];
  firstNotes[index] = firstNote;
  setInstrumentState({
    ...instrumentState,
    [InstrumentProperty.FirstNotes]: firstNotes,
  });
};

enum InstrumentProperty {
  NumOfFrets = 'numOfFrets',
  FirstNotes = 'firstNotes',
  NoteFlipped = 'noteFlipped',
}

type InstrumentState = {
  numOfFrets: number;
  firstNotes: Note[];
  noteFlipped: {
    [key: string]: boolean;
  };
};


export { instrumentState, setNumOfFrets, setFirstNote, setNoteFlipped, getNoteFlipped };