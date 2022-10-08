import { createStore } from "solid-js/store";
import { Note } from "../components/instruments/parts/notes/note.enum";
import { TuningPreset } from "../shared/Preset";

export const [instrumentState, setInstrumentState] = createStore<InstrumentState>({
  numOfFrets: 12,
  firstNotes: [],
  noteFlipped: {},
});

export const applyTuningPreset = (preset: TuningPreset) => {
  setInstrumentState({
    ...instrumentState,
    firstNotes: preset.firstNotes,
  });
};

export const setNumOfFrets = (numOfFrets: number) => {
  setInstrumentState({
    ...instrumentState,
    [InstrumentProperty.NumOfFrets]: numOfFrets,
  });
};

export const setNoteFlipped = (note: string, flipped: boolean) => {
  setInstrumentState({
    ...instrumentState,
    [InstrumentProperty.NoteFlipped]: {
      ...instrumentState.noteFlipped,
      [note]: flipped,
    },
  });
};

export const getNoteFlipped = (note: string) => {
  return instrumentState.noteFlipped[note];
};

export const toggleAllNotesFlipped = () => {
  const noteFlipped = {...instrumentState.noteFlipped};
  const allNotesFlipped = Object.keys(noteFlipped).every((note) => noteFlipped[note]);
  Object.keys(noteFlipped).forEach((note) => {
    noteFlipped[note] = !allNotesFlipped;
  });
  setInstrumentState({
    ...instrumentState,
    [InstrumentProperty.NoteFlipped]: noteFlipped,
  });
}

export const resetNotesFlipped = () => {
  setInstrumentState({
    ...instrumentState,
    [InstrumentProperty.NoteFlipped]: {},
  });
};

export const getFirstNotes = () => {
  return instrumentState.firstNotes;
};

export const setFirstNote = (index: number, firstNote: Note) => {
  const firstNotes = instrumentState.firstNotes.map((note, i) => {
    return (i === index) ? { ...note, note: firstNote } : note;
  });
  setInstrumentState({
    ...instrumentState,
    [InstrumentProperty.FirstNotes]: firstNotes,
  });
};

export const addString = () => {
  const firstNotes = [...instrumentState.firstNotes];
  firstNotes.unshift({ note: Note.A, id: Math.random().toString(36) });
  console.log(firstNotes)
  setInstrumentState({
    ...instrumentState,
    [InstrumentProperty.FirstNotes]: firstNotes,
  });
};

export const removeString = () => {
  const firstNotes = [...instrumentState.firstNotes];
  firstNotes.shift();
  console.log(firstNotes)
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
  firstNotes: {
    note: Note;
    id: string;
  }[];
  noteFlipped: {
    [key: string]: boolean;
  };
}
