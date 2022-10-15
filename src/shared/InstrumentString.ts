import { Note } from "../components/instruments/parts/notes/note.enum";

export interface InstrumentString {
  firstNote: Note;
  notesFlipped: {
    [key: string]: boolean;
  };
}
