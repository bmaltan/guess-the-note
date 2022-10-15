import { createStore } from "solid-js/store";
import { Note } from "../components/instruments/parts/notes/note.enum";
import { InstrumentString } from "../shared/InstrumentString";
import { TuningPreset } from "../shared/Preset";

export const [instrumentState, setInstrumentState] = createStore<InstrumentState>({
  numOfFrets: 12,
  strings: [],
  activeNotePos: '',
});

export const applyTuningPreset = (preset: TuningPreset) => {
  preset.strings.forEach((string) => {
    addString(string.firstNote);
  })
};

export const setNumOfFrets = (numOfFrets: number) => {
  setInstrumentState({
    ...instrumentState,
    numOfFrets: numOfFrets,
  });
};

export const setNoteFlipped = (noteIndex: number, stringIndex: number) => {
  setInstrumentState({
    ...instrumentState,
    strings: instrumentState.strings.map((string, index) => {
      if (index === stringIndex) {
        return {
          ...string,
          notesFlipped: {
            ...string.notesFlipped,
            [noteIndex]: !getNoteFlipped(noteIndex, stringIndex),
          },
        };
      }
      return string;
    }),
  });
};

export const getNoteFlipped = (noteIndex: number, stringIndex: number) => {
  return instrumentState.strings[stringIndex].notesFlipped[noteIndex];
};

export const toggleAllNotesFlipped = (flipped?: boolean) => {
  setInstrumentState({
    ...instrumentState,
    strings: instrumentState.strings.map((string) => {
      const newNotesFlipped = {...string.notesFlipped};
      Object.keys(newNotesFlipped).forEach((noteIndex) => {
        newNotesFlipped[noteIndex] = flipped ?? !atLeastOneNoteFlipped();
      })
      return {
        ...string,
        notesFlipped: newNotesFlipped,
      };
    }),
  });
};

export const setFirstNote = (index: number, firstNote: Note) => {
  setInstrumentState({
    ...instrumentState,
    strings: instrumentState.strings.map((string, i) => {
      if (i === index) {
        return {
          ...string,
          firstNote,
        };
      }
      return string;
    }),
  });
};

export const addString = (firstNote: Note) => {
  const strings = [...instrumentState.strings];
  const newString: InstrumentString = {
    firstNote: firstNote,
    notesFlipped: {},
  }
  for (let i = 0; i < instrumentState.numOfFrets; i++) {
    newString.notesFlipped[i] = false;
  }
  strings.unshift(newString);
  setInstrumentState({
    ...instrumentState,
    strings,
  });
};

export const removeString = () => {
  const firstNotes = [...instrumentState.strings];
  firstNotes.shift();
  setInstrumentState({
    ...instrumentState,
    strings: firstNotes,
  });
};

export const activateRandomNote = () => {
  const randomString = Math.floor(Math.random() * instrumentState.strings.length);
  const randomNote = Math.floor(Math.random() * instrumentState.numOfFrets);
  setInstrumentState({
    ...instrumentState,
    activeNotePos: `${randomString}-${randomNote}`,
  });
};

export const clearActiveNote = () => {
  setInstrumentState({
    ...instrumentState,
    activeNotePos: '',
  });
}

const atLeastOneNoteFlipped = () => {
  return instrumentState.strings.some((string) => {
    return Object.values(string.notesFlipped).some((flipped) => flipped);
  });
}

type InstrumentState = {
  numOfFrets: number;
  strings: InstrumentString[];
  activeNotePos: string;
}
