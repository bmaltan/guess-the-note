import { Component } from 'solid-js';
import { instrumentState, setNumOfFrets } from '../../store/instrument-store';
import { Preference, togglePreference } from '../../store/preferences-store';

const Preferences: Component = () => {
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
    </>
  );
};

export default Preferences;
