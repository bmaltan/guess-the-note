import { Note } from "../components/instruments/parts/notes/note.enum";
import { generateRandomId } from "../utils/utils";

export const bassPresets = {
  standard: {
    name: "Standard",
    firstNotes: [
      { note: Note.G, id: generateRandomId() },
      { note: Note.D, id: generateRandomId() },
      { note: Note.A, id: generateRandomId() },
      { note: Note.E, id: generateRandomId() },
    ],
  },
};
