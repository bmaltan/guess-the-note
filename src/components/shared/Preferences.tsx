import { Component, For } from 'solid-js';
import { instrumentState, setFirstNote, setNumOfFrets } from '../../store/instrument-store';
import { Preference, togglePreference } from '../../store/preferences-store';
import { Note } from '../instruments/parts/notes/note.enum';

const Preferences: Component = () => {
  const availableNotes = Object.values(Note);

  const onFirstNoteChange = (event: Event, index: number) => {
    setFirstNote(index, event?.target?.value as Note);
  }
  
  return (
    <>
      <button 
        onClick={() => togglePreference(Preference.HighlightNaturalNotes)}
      >
        Toggle natural notes
      </button>
      <button 
        onClick={() => togglePreference(Preference.DisplayFretMarkers)}
      >
        Toggle fret markers
      </button>
      <input
        value={instrumentState.numOfFrets}
        onChange={(event) => setNumOfFrets(parseInt(event.currentTarget.value))}
        type="number" 
        min="5" 
        max="24" 
      />
      <For each={instrumentState.firstNotes}>{(_, i) =>
        <select 
          name={`String ${i}`}
          value={instrumentState.firstNotes[i()]}
          onChange={(event) => onFirstNoteChange(event, i())}
        >
          <For each={availableNotes}>{(note) =>
            <option value={note}>{note}</option>
          }</For>
        </select>
      }</For>
    </>
  );
};

export default Preferences;
