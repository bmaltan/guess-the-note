import { Note } from "../components/instruments/parts/notes/note.enum";
import { generateRandomId } from "../utils/utils";
import { TuningPreset } from "./Preset";

export const bassPresets: {[key: string]: TuningPreset} = {
  standard: {
    name: "Standard",
    firstNotes: [
      { note: Note.G, id: generateRandomId(), string: 3 },
      { note: Note.D, id: generateRandomId(), string: 2 },
      { note: Note.A, id: generateRandomId(), string: 1 },
      { note: Note.E, id: generateRandomId(), string: 0 },
    ],
  },
};
