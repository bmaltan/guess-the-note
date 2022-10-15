import { InstrumentString } from "./InstrumentString";

export interface TuningPreset {
  name: string;
  strings: Omit<InstrumentString, 'notesFlipped'>[];
}
