import { Note } from "../components/instruments/parts/notes/note.enum";
import { TuningPreset } from "./Preset";

export const bassPresets: {[key: string]: TuningPreset} = {
  standard: {
    name: "Standard",
    strings: [
      { firstNote: Note.E },
      { firstNote: Note.A },
      { firstNote: Note.D },
      { firstNote: Note.G },
    ],
  },
};
