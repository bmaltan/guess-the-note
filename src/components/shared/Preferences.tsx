import { Component } from 'solid-js';
import { Preference, togglePreference } from '../../store/preferences-store';

const Preferences: Component = () => {
  return (
    <>
      <button onClick={() => togglePreference(Preference.HighlightNaturalNotes)}>Toggle natural notes</button>
      <button onClick={() => togglePreference(Preference.DisplayFretMarkers)}>Toggle fret markers</button>
    </>
  );
};

export default Preferences;
