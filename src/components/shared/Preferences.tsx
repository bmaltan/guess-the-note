import { Component } from 'solid-js';
import { toggleHighlightNaturalNotes } from '../../store/preferences-store';

const Preferences: Component = () => {
  const toggleHighlights = () => {
    toggleHighlightNaturalNotes();
  }

  return (
    <>
      <button onClick={toggleHighlights}>Toggle highlights</button>
    </>
  );
};

export default Preferences;
