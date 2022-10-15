import { Note } from "../components/instruments/parts/notes/note.enum";

export const convertFlatToSharp = (note: Note) => {
  if (note.length === 1) return note;

  const noteLetter: Note = note[0] as Note;
  const noteMap: {[key in Note]?: string} = {
    [Note.A]: 'G♯',
    [Note.B]: 'A♯',
    [Note.D]: 'C♯',
    [Note.E]: 'D♯',
    [Note.G]: 'F♯',
  };

  return noteMap[noteLetter] || note;
};
