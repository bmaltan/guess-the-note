import { Note } from "../components/instruments/parts/notes/note.enum";

export interface TuningPreset {
  name: string;
  firstNotes: {
    note: Note;
    id: string;
  }[];
};
